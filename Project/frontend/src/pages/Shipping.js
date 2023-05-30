import Options from '../components/Options.js';
import '../css/Shipping.css'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
   const [products, setProducts] = useState([]);
   const [inputs, setInput] = useState({});
   const [selectedCountry, setSelectedCountry] = useState('');
   const [errorMessage, setErrorMessage] = useState('');
   const [successMessage, setSuccessMessage] = useState('');
   
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const items = Object.values(cart);
    setProducts(items);
    console.log(items)
  }, []);

  const handleInput = (e) => {
    const { name, value, checked, type } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setInput((values) => ({ ...values, [name]: inputValue }));
  };

  const handleCountryChange = (countryValue) => {
    setSelectedCountry(countryValue.label);
    console.log(countryValue.label);
    console.log(selectedCountry);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://group15.web-tek.ninja/backend/api/order.php', { ...inputs, Country: selectedCountry, products });
    console.log({ ...inputs, Country: selectedCountry, products });
    //remove everything from cart in localstorage
    localStorage.removeItem('cart');
    setSuccessMessage('Order sent!');
    navigate('/', { state: { orderSuccess: true } });

  };

  return (
<main className="shipping-container">
 <form onSubmit={handleSubmit}>

  <div className="container">
    <h1>Shipping details</h1>
    <p>Please fill in this form with the required shipping information</p>
    <hr />
    
<div className="input-container" >
    <label><b>First name
    <input 
    type="text" 
    placeholder="Enter First name" 
    name="First_name" 
    onChange={handleInput}
    autoComplete='on'
    required />
    </b></label>
</div>
<div className="input-container" >
    <label ><b>Last Name
    <input 
    type="text" 
    placeholder="Enter Last name" 
    name="Last_name" 
    onChange={handleInput}
    required />
    </b></label>
</div>

<div className="select-country-container">
<label><b>Choose a country
<Options handleCountryChange={handleCountryChange} />
</b></label>

</div>
<div className="input-container" >
    <label ><b>City
    <input 
    type="text" 
    placeholder="Enter the city" 
    name="City" 
    onChange={handleInput}
    required />
    </b></label>
</div>

<div className="input-container" >
    <label><b>Adress
    <input 
    type="text" 
    placeholder="Enter your address" 
    name="Street"
    onChange={handleInput} 
    required />
    </b></label>
</div>
<div className="input-container" >
    <label htmlFor="zip-code"><b>Zip code</b></label>
    <input 
    type="number" 
    id="zip-code" 
    name="Zip" 
    className='form-input'
    placeholder="Enter your zip code (e.g. 12345)" 
    onChange={handleInput}
    required />
</div>
<br/>
    <label><b> Email
    <input 
    type="email" 
    placeholder="Enter Email" 
    name="Order_email" 
    onChange={handleInput}
    required />
    </b></label>
    
    <hr />

    <button type="submit" className="register-button">Send Order</button>
    {successMessage && <p className="success-message"  style={{ color: 'green', fontSize:'30px' }}>{successMessage}</p>}

  </div>
  

 </form>
</main>
  )
}

export default Shipping