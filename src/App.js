import HomePage from "./pages/Home";
import "./assets/global.css";
import Navbar from "./components/Navbar";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/queries";
import Login from "./pages/Login";
import About from "./pages/AboutUs";
import Signup from "./pages/Signup";
import Membership from "./pages/Membership";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Profile from "./pages/ProfilePage";

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
      </Routes>
    </ApolloProvider>
  );
}

export default App;
