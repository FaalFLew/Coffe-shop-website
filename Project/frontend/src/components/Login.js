import '../css/Global.css'
import '../css/Login.css'

const Login = () => {
  return (
    <main>
 <form>
 
  <div class="container">
    <h1>Login</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />
    <label for="email"><b> Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />
    
     <label for="password"><b> Password</b></label>
    <input type="password" placeholder="Password" name="password" required />
    <hr />
    <button type="submit" class="register-button">Create Account</button>
  </div>
  
  <div class="container signin">
    <p>Dont have an account? <a class="input-link"  href="#">Register Account</a>.</p>
  </div>

 </form>
</main>
  )
}

export default Login