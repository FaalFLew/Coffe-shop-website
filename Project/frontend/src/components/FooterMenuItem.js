import '../css/Global.css'
import '../css/FooterMenuItem.css'

const FooterMenuItem = ({title,dataType, links}) => {
  return (
    <div className="footer-menu-item" data-type={dataType}><ul>
            <li><h4>{title}</h4></li>
          {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
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