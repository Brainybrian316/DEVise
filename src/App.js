
import HomePage from './pages/Home';
import './assets/global.css';
import Navbar from './components/Navbar';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/queries';
import Login from './pages/Login';
import About from './pages/AboutUs';
import Signup from './pages/Signup';


function App() {

  return (
    <ApolloProvider client={client}>
    <Navbar />
    <Signup />
    {/* <HomePage /> */}
    {/* <About/>
    <Login /> */}
    </ApolloProvider>


  );
}

export default App;
