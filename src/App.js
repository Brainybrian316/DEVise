
import HomePage from './pages/Home';
import './assets/global.css';
import Navbar from './components/Navbar';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/queries';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/AboutUs';


function App() {

  return (
    <ApolloProvider client={client}>
    <Navbar />
    <Login />
    <HomePage />
    <Signup />
    <About/>
    </ApolloProvider>

  );
}

export default App;
