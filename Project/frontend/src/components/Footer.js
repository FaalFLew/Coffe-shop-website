import '../css/Global.css'
import '../css/Footer.css'
import FooterMenuItem from './FooterMenuItem.js'
const Footer = () => {
  return (
<footer className="site-footer">        

<div className="newsletter">
  <div className="newsletter-description-container">
    <p className="newsletter-description">Sign up for our newsletter and receive new product release info</p>
  </div>
    <form method="post" acceptCharset="UTF-8" className="newsletter-signup-form">
    <input type="email" className="newsletter-input" placeholder="Enter your email" name="contact[email]" autoCapitalize="off" aria-label="enter-email-to-subscribe" />
    <button className="newsletter-signup-button button">Sign up</button>
    </form>
</div>


<div className="footer-menus-section">

<FooterMenuItem
  dataType="Menu"
  title="Policies"
  links={[
    { url: '#policy', label: 'Policy' },
    { url: '#trademark', label: 'Trademark' },
  ]}
/>

<FooterMenuItem
  dataType="Contact"
  title="Get in Touch"
  links={[
    { url: '#policy', label: 'Policy' },
    { url: '#trademark', label: 'third' },
  ]}
/>
<FooterMenuItem
  dataType="Contact"
  title="Get in Touch"
  links={[
    { url: '#policy', label: 'Policy' },
    { url: '#trademark', label: 'third' },
  ]}
/>
<FooterMenuItem
  dataType="Contact"
  title="Get in Touch"
  links={[
    { url: '#policy', label: 'Policy' },
    { url: '#trademark', label: 'third' },
  ]}
/>

<FooterMenuItem
  dataType="Payment"
  title="We Accept"
  links={[
    { url: '#policy', label: 'Policy' },
    { url: '#trademark', label: 'Trademark' },
    { url: '#trademark', label: 'The last' },
    
  ]}
/>

<FooterMenuItem
  dataType="Payment"
  title="We Accept"
  links={[
    { url: '#policy', label: 'Policy' },
    { url: '#trademark', label: 'Trademark' },
    { url: '#trademark', label: 'The last' },
  ]}
/>

<FooterMenuItem
  dataType="Payment"
  title="We Accept"
  links={[
    { url: '#policy', label: 'Policy' },
    { url: '#trademark', label: 'Trademark' },
  ]}
/>


    
</div>
</footer> 
  )
}

export default Footer