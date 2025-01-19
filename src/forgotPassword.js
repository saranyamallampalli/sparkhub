// src/components/Login.js
import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here, such as making an API request
    
  };

  return (
    <div className="m-b-8">
      <form onSubmit={handleSubmit}>
        <div class='d-flex justify-content-center'>
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
            <a href="#" class="btn w-60 btn-primary">
            Submit
          </a>

        </div>
        </div>
        </div>      
      </form>
    </div>
  );
};

export default ForgotPassword;
