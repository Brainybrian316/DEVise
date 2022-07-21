import HomePage from './pages/Home';
import './assets/global.css';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';



function App() {
  return (
    <div>    
    <Navbar />
    <HomePage /> 
    <Signup />
   
    
    </div>
  );
}

export default App;
