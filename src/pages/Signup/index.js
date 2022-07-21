import FirstName from '../../components/form/FirstName'
import GroupInput from '../../components/form/FormInput';
import LastName from '../../components/form/LastName';
import CreateAcctBtn from './CreateAcctBtn';
import './signup.css';


export default function Signup() {
  return (
    <div>
      <container id="form-group">
      <FirstName />
      <LastName />
      <GroupInput />
      <CreateAcctBtn />
      </container>
    </div>
  );
}