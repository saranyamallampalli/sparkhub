
import React, { useState } from 'react';
import Login from './login';
import Register from './register';


function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      <div class="card w-50">
      <h1 class='card-title m-l-12'>{isLogin ? 'Login' : 'Register'}</h1>
      {isLogin ? <Login /> : <Register />}
      <span class='m-l-12'>{isLogin ? "Don't have an account yet ?" : ' Already have an account ?' }</span>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Create an account' : 'Login here'}
      </button>
      </div>
    </div>
    
  );
}

export default App;
