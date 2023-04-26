import { useState } from 'react';
import '../css/Global.css'
import '../css/HamburgerMenu.css'

const HamburgerMenu = ({click}) => {
    const [isOpen, setIsOpen] = useState(false);

    const clicked = () => {
        setIsOpen(!isOpen);
      }

    const className = `menu-btn ${isOpen ? 'open' : ''}`;

  return (
    <li className={className} onClick={clicked}> 
    <a className={className}>
    <span class="menu-btn__burger"></span>
  </a>
  </li>
  )
}

export default HamburgerMenu