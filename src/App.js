
import HomePage from './pages/Home';
import './assets/global.css';
import Navbar from './components/Navbar';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/queries';

import Login from './pages/Login';
import About from './pages/AboutUs';


function App() {

  return (
    <ApolloProvider client={client}>
    <Navbar />
    <Login />
    <HomePage />

    <About/>
    </ApolloProvider>

  );
}

export default App;
