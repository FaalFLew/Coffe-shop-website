import '../css/Global.css';
import '../css/Register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

const Register = () => {
  const [inputs, setInput] = useState({ Newsletter_subscribed: false });

  const handleInput = (e) => {
    const { name, value, checked, type } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setInput((values) => ({ ...values, [name]: inputValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://group15.web-tek.ninja/backend/api/login.php', inputs);
    console.log(inputs);
  };

  return (
    <main className="register-container">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Create Account</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <div className="input-container">
            <label htmlFor="first_name">
              <b>First name</b>
            </label>
            <input
              type="text"
              placeholder="Enter First name"
              name="First_name"
              onChange={handleInput}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="Last_name">
              <b>Last Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Last name"
              name="Last_name"
              onChange={handleInput}
              required
            />
          </div>
          <label htmlFor="Email">
            <b> Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            name="Email"
            onChange={handleInput}
            required
          />

          <label htmlFor="Password">
            <b> Password</b>
          </label>
          <input
            type="password"
            placeholder="Password"
            name="Password"
            onChange={handleInput}
            required
          />

          <label htmlFor="password_repeat">
            <b> Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="password_repeat"
            required
          />
          <input
            type="checkbox"
            name="Newsletter_subscribed"
            onChange={handleInput}
            checked={inputs.Newsletter_subscribed || false}
          />
          <label htmlFor="Newsletter_subscribed"> Subscribe to our Newsletter! </label>
          <hr />
          <p>
            By creating an account you agree to our{' '}
            <a className="input-link" href="#">
              Terms & Privacy
            </a>
            .
          </p>

          <button type="submit" className="register-button">
            Create Account
          </button>
          
        </div>
        </form>

        <div className="container signin">
          <p>
            Already have an account?{' '}
            <Link className="input-link" to="/login">
              Login
            </Link>
            .
          </p>
        </div>
    </main>
);

};

export default Register;





