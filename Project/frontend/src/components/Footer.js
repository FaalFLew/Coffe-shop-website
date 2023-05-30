import '../css/Global.css'
import '../css/Footer.css'
import FooterMenuItem from './FooterMenuItem.js'
import { useState, useEffect } from 'react';
import axios from 'axios';
const Footer = () => {

  const [inputs, setInputs] = useState({ Newsletter_subscribed: false });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');



  const handleInput = (e) => {
    const { name,value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));

  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post('https://group15.web-tek.ninja/backend/api/newsletter.php', inputs);
      console.log(inputs);
      setErrorMessage('');
      setSuccessMessage('You are registered to the email list!');

    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage('*Email is already registered');
        console.log("email error");
        setSuccessMessage('');

      } else {
        setErrorMessage('An error occurred during registration');
        console.log("else error");
        setSuccessMessage('');

      }
    }
  };


  return (
<footer className="site-footer">        

<div className="newsletter">
  <div className="newsletter-description-container">
    <p className="newsletter-description">Sign up for our newsletter and receive new product release info</p>
  </div>
    <form onSubmit={handleSubmit} className="newsletter-signup-form">
    <input 
    type="email" 
    className="newsletter-input" 
    placeholder="Enter your email" 
    name="Email" autoCapitalize="off" 
    aria-label="enter-email-to-subscribe"
    onChange={handleInput} />
    <button className="newsletter-signup-button button">Sign up</button>
    </form>
</div>


<div className="footer-menus-section">

<FooterMenuItem
  dataType="Contact"
  title="Get in Touch"
  links={[
    { url: '/about', label: 'About' },
    { url: '/contact', label: 'Contact' },
  ]}
/>

<FooterMenuItem
  dataType="Menu"
  title="Policies"
  links={[
    { url: '#policy', label: 'Policy' },
    { url: '#trademark', label: 'third' },
  ]}
/>
<FooterMenuItem
  dataType="Contact"
  title="Policies"
  links={[
    { url: '#policy', label: 'Policy' },
    { url: '#trademark', label: 'third' },
  ]}
/>
<FooterMenuItem
  dataType="Contact"
  title="Policies"
  links={[
    { url: '#policy', label: 'Policy' },
    { url: '#trademark', label: 'third' },
  ]}
/>

<FooterMenuItem
  dataType="Payment"
  title="Policies"
  links={[
    { url: '#policy', label: 'Policy' },
    { url: '#trademark', label: 'Trademark' },
    { url: '#trademark', label: 'The last' },
    
  ]}
/>

<FooterMenuItem
  dataType="Payment"
  title="Policies"
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

<div className='disclaimer-info'><p><b>This website is a result of a university group project, performed in the course IDATA2301 Web 
technologies, at NTNU. All the information provided here is a result of imagination. Any 
resemblance with real companies or products is a coincidence.
All the provided material is free to use for non-commercial purposes.</b></p></div>
</footer> 
  )
}

export default Footer