import '../css/Global.css'
import '../css/FooterMenuItem.css'
import {Link} from 'react-router-dom'
const FooterMenuItem = ({title,dataType, links}) => {
  return (
    <div className="footer-menu-item" data-type={dataType}><ul>
            <li><h4>{title}</h4></li>
          {links.map((link, index) => (
          <li key={index}>
            <Link to={link.url}>{link.label}</Link>
          </li>
        ))}
    </ul>
</div>
)
}

FooterMenuItem.defaultProps = {
    text:'Add to Cart'
}
export default FooterMenuItem