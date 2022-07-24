import { useLoginMutation } from '../../graphql/hooks';
import { useState } from 'react';

export default function Login() {


  const { login } = useLoginMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const userLoggedIn = await login({ variables: { email, password } });
    if(userLoggedIn) {
      alert('You are logged in');
      console.log(userLoggedIn);
    }
    } catch (error) {
      alert('invalid email or password');
      console.log(error);
    }
  }


  return (
    <>

      <h1>Home</h1>

      {/* LOGIN form  */}
<div className="login-form">
<form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input  onChange={(e) => setEmail(e.target.value)}
     type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
</div>
<div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input onChange={(e) => setPassword(e.target.value)}
     type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>

    <button type="submit" className="btn btn-primary"
    onClick={handleSubmit}>
      Submit
      </button>
</form>
</div>

   </>
  )
}