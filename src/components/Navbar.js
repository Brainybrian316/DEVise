import { useState } from 'react';
import { Menu } from 'semantic-ui-react';
// import  image from '../assets/images/DEVise-bg.png';
import './navbar.css';


export default function Navbar() {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu stackable inverted>
      <Menu.Item id="fancy-nav">
        {/* <img src={image} id="nav-image" alt="devise" /> */}
        <i class="fa-solid fa-d"></i>
        <i class="fa-solid fa-e"></i>
        <i class="fa-solid fa-v"></i>
        <i class="fa-solid fa-binoculars"></i>
        <i class="fa-solid fa-z"></i>
      </Menu.Item>

      <Menu.Item name="home" active={activeItem === 'home'} onClick={handleItemClick} color="red">
        Home
      </Menu.Item>

      <Menu.Item name="ideaBin" active={activeItem === 'ideaBin'} onClick={handleItemClick} color="blue">
        Idea Bin
      </Menu.Item>

      <Menu.Item name="projectFeed" active={activeItem === 'projectFeed'} onClick={handleItemClick} color="green">
        ProjectFeed
      </Menu.Item>

      <Menu.Item name="login" active={activeItem === 'login'} onClick={handleItemClick} color="orange">
        Login
      </Menu.Item>

      <Menu.Item name="signup" active={activeItem === 'signup'} onClick={handleItemClick} color="purple">
        Signup
      </Menu.Item>
    </Menu>
  );
}
