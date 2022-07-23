
import HomePage from './pages/Home';
import './assets/global.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/queries';



function App() {

  const [getPage, setPage] = useState('')

  function renderPage(page) {
    switch(page){
      case '': return <HomePage />;
      // case 'About Us': return <AboutUs />;
      // case 'checkout': return <Checkout />;
      // case 'Contact': return <Contact />;
      // case 'devconnect': return <DevConnect />;
      // case 'membership': return <Membership />;
      // case 'Profile': return <Profile />;
      // case 'Projects': return <ProjectFeed />;
      // case 'login': return <Login />
      // case 'signup': return <Signup />
      case 'login': {
        alert('login button clicked')
        break;
      };
      case 'signup': {
        alert('signup button clicked')
        break;
      }
      default: return <HomePage />
    }
  }
  return (
    <ApolloProvider client={client}>
    <div>    
    <Navbar 
    setPage={setPage}
    />
    <main>
    {renderPage(getPage)}
    </main>

    
    </div>
    </ApolloProvider>
  );
}

export default App;
