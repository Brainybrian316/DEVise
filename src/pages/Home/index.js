import { useGetUserQuery } from "../../graphql/hooks.js";


export default function Home() {

  const { user, loading, error } = useGetUserQuery(
    "2db3d15f265086c76a138f2"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;


  return (
    <>

      <h1>Home</h1>
      <p>Welcome {user.firstName} {user.lastName}</p>
      <p>Your username is {user.username}</p>
      <p>Your email is {user.email}</p>
      <p>Your password is {user.password}</p>
      <p>Your projects are:</p>
      
    


   </>
    
  )
}