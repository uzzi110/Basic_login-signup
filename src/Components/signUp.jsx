import React, { useState } from 'react';
import image from '../images/login.png'
import './login.css'
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password || !name) {
      setError('Fields are required');
      return;
    }

    setError('');
    
    let data ={email, password, name}
    localStorage.setItem("user", JSON.stringify(data));
    console.log(data);

    setEmail('');
    setPassword('');
    setName('');

    navigate("/signin");  
  };


  return (
    <div className="container">
        <img src={image}  style={{width:"250px", height:"250px", marginLeft:"20px"}}alt="login_image"></img>

    <div className="login-container">
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="email">Name</label>
          <input
            type="name"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
      <Link to='/signin' style={{ marginTop: '10px', display: 'block' }}>already have account?</Link>
      
    </div>

    </div>
    
  );
};

export default Login;
