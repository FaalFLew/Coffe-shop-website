
const Shipping = () => {
  return (
<main>
 <form>

  <div class="container">
    <h1>Create Account</h1>
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
<div class="input-container" >
    <label for="first-name"><b>Adress</b></label>
    <input type="text" placeholder="Enter First name" name="first-name" required />
</div>
<div class="input-container" >
    <label for="last-name"><b>Postcode</b></label>
    <input type="text" placeholder="Enter Last name" name="last-name" required />
</div>
<label for="cars">Choose a car:</label>
  <select id="cars" name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select>
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