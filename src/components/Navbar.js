import { useState } from 'react';
import { render } from '@testing-library/react';
import { Menu } from 'semantic-ui-react';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  

  return (
    <Menu stackable>
      <Menu.Item>
        <img src="https://react.semantic-ui.com/logo.png" alt="logo" />
      </Menu.Item>

      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
      >
        Home
      </Menu.Item>

      <Menu.Item
        name="ideaBin"
        active={activeItem === 'ideaBin'}
        onClick={handleItemClick}
        >
          Idea Bin
        </Menu.Item>

        <Menu.Item
          name='projectFeed'
          active={activeItem === 'projectFeed'}
          onClick={handleItemClick}
        >
          ProjectFeed
        </Menu.Item>

        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={handleItemClick}
        >
          Login
        </Menu.Item>

        <Menu.Item
          name='signup'
          active={activeItem === 'signup'}
          onClick={handleItemClick}
        >
          Signup
        </Menu.Item>

      </Menu>   
  )
};