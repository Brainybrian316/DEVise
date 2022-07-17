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
        onClick={() => setIsOpen(!isOpen)}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div className="header-nav" id="header-menu"
     onClick={handleClick}
    >
        <div className="nav-left">
            <div className="nav-item text-center">
                <a href="#">
                    <span className="icon">
                        <i className="fab fa-wrapper fa-github" aria-hidden="true"></i>
                    </span>
                </a>
            </div>
            <div className="nav-item text-center">
                <a href="#">
                    <span className="icon">
                        <i className="fab fa-wrapper fa-slack" aria-hidden="true"></i>
                    </span>
                </a>
            </div>
            <div className="nav-item text-center">
                <a href="#">
                    <span className="icon">
                        <i className="fab fa-wrapper fa-twitter" aria-hidden="true"></i>
                    </span>
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
            <div className="nav-item active">
                <a href="#">Active</a>
            </div>
            <div className="nav-item">
                <a href="#">Link 1</a>
            </div>
            <div className="nav-item has-sub" id="dropdown">
                <a className="nav-dropdown-link">Click Me</a>
                <ul className="dropdown-menu" role="menu">
                    <li role="menu-item"><a href="#">First Item</a></li>
                    <li role="menu-item"><a href="#">Second Item</a></li>
                    <li role="menu-item"><a href="#">Third Item</a></li>
                    <li className="dropdown-menu-divider"></li>
                    <li role="menu-item"><a href="#">Fourth Item</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
  );
}
