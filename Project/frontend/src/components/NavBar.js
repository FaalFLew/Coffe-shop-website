import '../css/Global.css'
import '../css/NavBar.css'
import MobileLogo from '../img/mobilelogo.png';
import DesktopLogo from '../img/best21.png';

import HamburgerMenu from './HamburgerMenu.js';


const NavBar = () => {
  return (
<header className="nav-header">
        <div><h1 id="main-logo"><a id="logo-link" href="#Home" >
        <img
  srcSet={`${MobileLogo} 130w, ${DesktopLogo} 230w`}
  sizes="(max-width: 600px) 130px, 230px"
  src={`${MobileLogo}`}
  alt="Description of the image"
/>
              </a></h1></div>
    <div className="nav-div">
        <h2 className="navbar-title">Coffe Selection</h2>
        <ul className="sub-ul">
            <li><a className="first-li fe" href="#Robusta">Robusta</a></li>
            <li><a href="#Excelsa" className="fe">Excelsa</a></li>
            <li><a href="#Liberica" className="fe">Liberica</a></li>
            <li><a href="#Arabica" className="fe">Arabica</a></li>
        </ul>
    </div>
   

    <div className="main-ul-container">

    <ul className="main-ul">
        <li><a href="#Explore">Explore</a></li>
        <li><a href="#Loign">Login</a></li>
        <li><a href="#Contact">Contact</a></li>
        <HamburgerMenu />

    </ul>   
    </div>

</header>   
  )
}

export default NavBar