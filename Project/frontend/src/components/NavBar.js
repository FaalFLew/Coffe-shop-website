import '../css/Global.css'
import '../css/NavBar.css'
import logo from '../img/best21.png'; // import the image

const NavBar = () => {
  return (
<header className="nav-header">
        <div><h1 id="main-logo"><a id="logo-link" href="#Home" ><img src={logo} alt="Pure Coffe header logo"/></a></h1></div>
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
    </ul>   
    </div>

</header>   
  )
}

export default NavBar