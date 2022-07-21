import FirstName from '../../components/form/FirstName'
import GroupInput from '../../components/form/FormInput';
import LastName from '../../components/form/LastName';
import CreateAcctBtn from '../../components/ui/CreateAcctBtn';


export default function Signup() {
  return (
    <div>
      <FirstName />
      <LastName />
      <GroupInput />
      <CreateAcctBtn />
    </div>
  );
}