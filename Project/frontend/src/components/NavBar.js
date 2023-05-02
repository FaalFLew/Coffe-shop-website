import '../css/Global.css'
import '../css/NavBar.css'
import MobileLogo from '../img/mobilelogo.png';
import DesktopLogo from '../img/best21.png';
import {Link} from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu.js';
import { useState } from 'react';



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  }

  const navClassName = isOpen ? 'nav-div mobile' : 'nav-div';


  return (
<header className="nav-header">
        <div><span id="main-logo"><Link id="logo-link" to="/" >
        <img
  srcSet={`${MobileLogo} 130w, ${DesktopLogo} 230w`}
  sizes="(max-width: 600px) 130px, 230px"
  src={`${MobileLogo}`}
  alt="Description of the im..g"
/>
              </Link></span></div>
    <div className={navClassName}>
        <h2 className="navbar-title">Product Selection</h2>
        <ul className="sub-ul">
      <li>
        <a className="first-li fe" href="#Robusta">Coffee beans</a>
      </li>
      <li>
        <a href="#Excelsa" className="fe">Pancakes</a>
      </li>
      <li>
        <a href="#Liberica" className="fe">Chocolate</a>
      </li>
    </ul>
    </div>
   

    <div className="main-ul-container">
    <ul className="main-ul">
        <li><Link to="explore">Explore</Link></li>
        <li><Link to="login">Login</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <HamburgerMenu click={handleMenuClick} isOpen={isOpen} />
    </ul>   
    </div>

</header>   
  )
}

export default NavBar