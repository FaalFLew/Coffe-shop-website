import Options from '../components/Options.js';
import '../css/Shipping.css'

const Shipping = () => {
  return (
<main class="shipping-container">
 <form>

  <div class="container">
    <h1>Shipping details</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />
<div class="input-container" >
    <label for="first-name"><b>First name</b></label>
    <input type="text" placeholder="Enter First name" name="first-name" required />
</div>
<div class="input-container" >
    <label for="last-name"><b>Last Name</b></label>
    <input type="text" placeholder="Enter Last name" name="last-name" required />
</div>

<div class="select-country-container">
<label for="country"><b>Choose a country</b></label>
<Options />
</div>

<div class="input-container" >
    <label for="adress"><b>Adress</b></label>
    <input type="text" placeholder="Enter your address" name="first-name" required />
</div>
<div class="input-container" >
    <label for="zip-code"><b>Zip code</b></label>
    <input type="text" id="zip-code" name="zip-code" placeholder="Enter your zip code (e.g. 12345)" pattern="\d{5}" required />
</div>

    <label for="email"><b> Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />
    
    <hr />

    <button type="submit" class="register-button">Send Order</button>
  </div>
  

 </form>
</main>
  )
}

export default Shipping