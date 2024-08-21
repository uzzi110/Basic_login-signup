import React, { useState } from 'react';
import image from '../images/login.png'
import './login.css'
import { useNavigate, Link } from'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    setError('');

    // let user = JSON.parse(localStorage.getItem('user'));
    // if (!user || user.email!==email || user.password!==password) {
    //   setError('Invalid email or password');
    //   return;
    // }
    // else{
    //     alert('logged in successfully');
    // }

    const response = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`);
    console.log(response.data);
  
    if (response) {
      alert('Login successful!');
    } else {
      setError('Invalid email or password');
    }
     

  };

  return (
    <div className="container">
        <img src={image}  style={{width:"250px", height:"250px", marginLeft:"20px"}}alt="login_image"></img>

    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <Link to='/signup' style={{ marginTop: '10px', display: 'block' }}>don't have an account?</Link>
      
    </div>

    </div>
    
  );
};

export default Login;
