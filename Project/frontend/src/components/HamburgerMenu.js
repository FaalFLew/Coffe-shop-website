import '../css/Global.css'
import '../css/HamburgerMenu.css'


const HamburgerMenu = ({ click, isOpen }) => {
  const className = `menu-btn ${isOpen ? 'open' : ''}`;

  const handleClick = () => {
    click();
  }

  return (
    <li className={className} onClick={handleClick}>
      <a className={className}>
        <span className="menu-btn__burger"></span>
      </a>
    </li>
  );
}

export default HamburgerMenu