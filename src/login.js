// src/components/Login.js
import React, { useState } from 'react';
import img1 from './images/login.jpg'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here, such as making an API request
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="m-b-8">
      <form onSubmit={handleSubmit}>
        <div class='d-flex'>
        <div class='card-body'>
        <div>
          <label>Email:</label><br/>
          <input
          class='input'
            type="email"
            placeholder='Enter email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label><br/>
          <input
          class='input'
            type="password"
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div class='d-flex'>
        <a href="#" class="btn w-60 btn-primary">
            Login
          </a>
          <a href='/forgot-Password' class='forgot_pasword'>forgot password ?</a>          
        </div>
        </div>
        <div class='card-body'>        
        <img src={img1} height='280' width='280' class='img1'/>
        </div>
        </div>      
      </form>
    </div>
  );
};

export default Login;
