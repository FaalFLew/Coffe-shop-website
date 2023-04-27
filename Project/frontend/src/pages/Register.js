import '../css/Global.css';
import '../css/Register.css';


const Register = () => {
  return (
<main class="register-container">
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
    <label for="email"><b> Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />
    
     <label for="password"><b> Password</b></label>
    <input type="password" placeholder="Password" name="password" required />
    
     <label for="password-repeat"><b> Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="password-repeat"  required />
    <hr />
    <p>By creating an account you agree to our <a class="input-link" href="#">Terms & Privacy</a>.</p>

    <button type="submit" class="register-button">Create Account</button>
  </div>
  
  <div class="container signin">
    <p>Already have an account? <a class="input-link"  href="#">Sign in</a>.</p>
  </div>

 </form>
</main>
  )
}

export default Register