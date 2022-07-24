
import HomePage from './pages/Home';
import About from './pages/Home/About';
import './assets/global.css';
import Navbar from './components/Navbar';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/queries';
import Login from './pages/Login';
import {useRoutes} from 'hookrouter';


const routes = {
  '/': () => <HomePage />,
  '/about': () => <About />
}

function App() {
  const routeResult = useRoutes(routes);
  
  return (
    <ApolloProvider client={client}>
      <Navbar />
      { routeResult }
    </ApolloProvider>
  );
}

export default App;
