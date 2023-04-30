import '../css/Global.css';
import '../css/Register.css';
import {Link} from 'react-router-dom'


const Register = () => {
  return (
<main className="register-container">
 <form>
 
  <div className="container">
    <h1>Create Account</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />
<div className="input-container" >
    <label htmlFor="first-name"><b>First name</b></label>
    <input type="text" placeholder="Enter First name" name="first-name" required />
</div>
<div className="input-container" >
    <label htmlFor="last-name"><b>Last Name</b></label>
    <input type="text" placeholder="Enter Last name" name="last-name" required />
</div>
    <label htmlFor="email"><b> Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />
    
     <label htmlFor="password"><b> Password</b></label>
    <input type="password" placeholder="Password" name="password" required />
    
     <label htmlFor="password-repeat"><b> Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="password-repeat"  required />
    <hr />
    <p>By creating an account you agree to our <a className="input-link" href="#">Terms & Privacy</a>.</p>

    <button type="submit" className="register-button">Create Account</button>
  </div>
  
  <div className="container signin">
    <p>Already have an account? <Link className="input-link"  to="/login">Login</Link>.</p>
  </div>

 </form>
</main>
  )
}

export default Register