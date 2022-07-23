import HomePage from './pages/Home';
import './assets/global.css';
import Navbar from './components/Navbar';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/queries';



function App() {
  return (
    <ApolloProvider client={client}>
    <div>    
    <Navbar />
    <HomePage />

    
    </div>
    </ApolloProvider>
  );
}

export default App;
