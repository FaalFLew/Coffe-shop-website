import '../css/Global.css';
import '../css/Register.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({ Newsletter_subscribed: false });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');



  const handleInput = (e) => {
    const { name, value, checked, type } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    const updatedValue = name === 'Newsletter_subscribed' ? (checked ? true : false) : inputValue;
    setInputs((values) => ({ ...values, [name]: updatedValue }));
  };

  useEffect(() => {
    setPasswordMatch(inputs.Password === inputs.password_repeat);
  }, [inputs.Password, inputs.password_repeat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //prevent submission if repeat pass dont match
    if (!passwordMatch) {
      return; 
    }
    const formData = { ...inputs, Newsletter_subscribed: inputs.Newsletter_subscribed ? 1 : 0 };

    try {
      await axios.post('https://group15.web-tek.ninja/backend/api/login.php', formData);
      console.log(formData);
      console.log(inputs);
      setErrorMessage('');
      setSuccessMessage('Account has been created and registered in database (login under construction)');

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
    <main className="register-container">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Create Account</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <div className="input-container">
            <label>
              <b>First name</b>
              <input
                type="text"
                placeholder="Enter First name"
                name="First_name"
                onChange={handleInput}
                autoComplete="on"
                required
              />
            </label>
          </div>
          <div className="input-container">
            <label>
              <b>Last Name</b>
              <input
                type="text"
                placeholder="Enter Last name"
                name="Last_name"
                onChange={handleInput}
                required
              />
            </label>
          </div>
          <label>
            <b>Email</b>
            <input
              type="email"
              placeholder="Enter Email"
              name="Email"
              onChange={handleInput}
              autoComplete="on"
              required
            />
          </label>
          {errorMessage && <p className="error-message"  style={{ color: 'red', fontSize:'24px' }}>{errorMessage}</p>}

          <label>
            <b>Password</b>
            <input
              type="password"
              placeholder="Password"
              name="Password"
              onChange={handleInput}
              required
            />
          </label>

          <label>
            <b>Repeat Password</b>
            <input
              type="password"
              placeholder="Repeat Password"
              name="password_repeat"
              onChange={handleInput}
              required
            />
            {!passwordMatch && (
              <p className="password-match-message" style={{ color: 'red' }}>
                Not matching
              </p>
            )}
          </label>

          <input
            type="checkbox"
            name="Newsletter_subscribed"
            onChange={handleInput}
            id="Newsletter_subscribed"
            checked={inputs.Newsletter_subscribed || false}
          />
          <label htmlFor="Newsletter_subscribed"> Subscribe to our Newsletter!</label>
          <hr />
          {successMessage && <p className="success-message"  style={{ color: 'green', fontSize:'30px' }}>{successMessage}</p>}

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
