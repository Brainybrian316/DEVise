import { useEffect, useState } from 'react';
// import  image from '../assets/images/DEVise-bg.png';
import './navbar.css';


export default function Navbar() {
 const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  // navbar open and close useEffect
  const handleClick = useEffect(() => {
    let navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        let dropDownMenu= document.getElementById('header-menu')
        btn.classList.toggle('active');
        dropDownMenu.classList.toggle('active');
    }
    )
  });

  


  return (
    <div className="header header-fixed u-unselectable header-animated">
    <div className="header-brand">
        <div className="nav-item no-hover" id="fancy-nav">
        <i className="fa-solid fa-d"></i>
        <i className="fa-solid fa-e"></i>
        <i className="fa-solid fa-v"></i>
        <i className="fa-solid fa-binoculars"></i>
        <i className="fa-solid fa-z"></i>
        </div>
        <div className="nav-item nav-btn " id="header-btn" 
        onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div className="header-nav" id="header-menu">
        <div className="nav-left">
            <div className="nav-item text-center">
                <a href="#home">
                       Home
                </a>
            </div>
            <div className="nav-item text-center">
                <a href="#ideabin">
                   IdeaBin
                </a>
            </div>
            <div className="nav-item text-center">
                <a href="#projectfeed">
                    ProjectFeed
                </a>
            </div>
            <div className="nav-item has-sub toggle-hover" id="dropdown">
                <a className="nav-dropdown-link">Animated</a>
                <ul className="dropdown-menu dropdown-animated" role="menu">
                    <li role="menu-item"><a href="#">First Item</a></li>
                    <li role="menu-item"><a href="#">Second Item</a></li>
                    <li role="menu-item"><a href="#">Third Item</a></li>
                </ul>
            </div>
        </div>

        <div className="nav-right">
            <div className="nav-item">
                <a href="#login">Login</a>
            </div>
            <div className="nav-item">
                <a href="#signup">Sign-Up</a>
            </div>
            
            </div>
        </div>
    </div>

  );
}
