import '../css/Global.css'
import '../css/Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <main className="login-container">
 <form>
 
  <div className="container">
    <h1>Login</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />
    <label for="email"><b> Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />
    
     <label for="password"><b> Password</b></label>
    <input type="password" placeholder="Password" name="password" required />
    <hr />
    <button type="submit" className="register-button">Create Account</button>
  </div>
  
  <div className="container signin">
    <p>Dont have an account? <Link className="input-link"  to="/register">Register Account</Link>.</p>
  </div>

 </form>
</main>
  )
}

export default Login