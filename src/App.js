import HomePage from "./pages/Home";
import "./assets/global.css";
import Navbar from "./components/Navbar";

// import { client } from "./graphql/queries";
import Login from "./pages/Login";
import About from "./pages/AboutUs";
import Signup from "./pages/Signup";
import Membership from "./pages/Membership";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Profile from "./pages/ProfilePage";
import {FooterContainer} from "./pages/Footer/footerContainer"
import IdeaBin from "./pages/IdeaBin";
import UserProjects from "./pages/UserProjects";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
    ...headers,
    authorization: token ? `Bearer ${token}` : '',
  }
};
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})



function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/ideaBin" element={<IdeaBin />} />
        <Route path="/userProjects" element={<UserProjects />} />
      </Routes>
      <FooterContainer />
    </ApolloProvider>
  );
}

export default App;
