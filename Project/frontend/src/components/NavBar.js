import '../css/Global.css'
import '../css/NavBar.css'
import MobileLogo from '../img/mobilelogo.png';
import DesktopLogo from '../img/best21.png';
import {Link} from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu.js';


const NavBar = () => {
  return (
<header className="nav-header">
        <div><h1 id="main-logo"><Link id="logo-link" to="/" >
        <img
  srcSet={`${MobileLogo} 130w, ${DesktopLogo} 230w`}
  sizes="(max-width: 600px) 130px, 230px"
  src={`${MobileLogo}`}
  alt="Description of the im..g"
/>
              </Link></h1></div>
    <div className="nav-div">
        <h2 className="navbar-title">Coffee Selection</h2>
        <ul className="sub-ul">
            <li><a className="first-li fe" href="#Robusta">Robusta</a></li>
            <li><a href="#Excelsa" className="fe">Excelsa</a></li>
            <li><a href="#Liberica" className="fe">Liberica</a></li>
            <li><a href="#Arabica" className="fe">Arabica</a></li>
        </ul>
    </div>
   

    <div className="main-ul-container">

    <ul className="main-ul">
        <li><Link to="explore">Explore</Link></li>
        <li><Link to="login">Login</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <HamburgerMenu />

    </ul>   
    </div>

</header>   
  )
}

export default NavBar