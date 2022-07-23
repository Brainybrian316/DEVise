
import HomePage from './pages/Home';
import './assets/global.css';
import Navbar from './components/Navbar';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/queries';
import Login from './pages/Login';




function App() {
  
  return (
    <ApolloProvider client={client}>
    <Navbar /> 
    <Login/>
    <HomePage />
    </ApolloProvider>
  );
}

export default App;
