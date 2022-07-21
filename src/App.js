import HomePage from './pages/Home';
import './assets/global.css';
import Navbar from './components/Navbar';
import ContactForm from './pages/Contact';



function App() {
  return (
    <div>    
    <Navbar />
    <HomePage /> 
   <ContactForm />
    
    </div>
  );
}

export default App;
