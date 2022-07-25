
import HomePage from './pages/Home';
import './assets/global.css';
import Navbar from './components/Navbar';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/queries';
import Login from './pages/Login';
import About from './pages/AboutUs';
import Signup from './pages/Signup';
import { Routes, Route,  } from 'react-router-dom';


function App() {

  return (
    <ApolloProvider client={client}>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </ApolloProvider>


  );
}

export default App;
