import HomePage from './pages/Home';
import './assets/global.css';
import Navbar from './components/Navbar';
import ProfilePage from './pages/ProfilePage';



function App() {
  return (
    <div>    
    <Navbar />
    <HomePage /> 
    <ProfilePage/>
   
    
    </div>
  );
}

export default App;
