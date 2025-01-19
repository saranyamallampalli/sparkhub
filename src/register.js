// src/components/Register.js
import React, { useState } from "react";
import img2 from './images/registration.jpg'

const Register = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Handle registration logic here, such as making an API request
    console.log("Registering with:", { email, password });
  };

  return (
    <div class=" m-b-8">
      <form onSubmit={handleSubmit}>
        <div class='d-flex'>
        <div class="card-body">
          <div class='d-flex'>
            <div>
            <label>Name:</label> <br />
            <input
              className="input"
              type="text"
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
             <label>Email:</label> <br />
            <input
              className="input"
              type="email"
              placeholder='Enter email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            </div>
          </div>
          <div>
            <label>Password:</label>
            <br />
            <input
              className="input"
              type="password"
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              className="input"
              type="password"
              placeholder='Re-enter password'

              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div class="card-body height_two">
        <img src={img2} height='400' width='400' class='img2'/>
        </div>
        </div>      
      </form>
      <div class='col-12 m-l-12'>
            <div class="form-check">
             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                I accept the Terms of Use & Privacy Policy
              </label>
              </div>
            <a href="#" class="btn w-60 btn-primary m-t-8">
              Register
            </a>
            </div>
      </div>
  );
};

export default Register;
