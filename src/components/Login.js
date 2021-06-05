import React from 'react'

const Login = () => {
  return (
    <>
    <div className="login-container">
      <div className="login-c container1">
        <h1 className="login-title">Log in</h1>
      </div>
      <div className="login-c container2">
        <input className="login-input" placeholder="Username/Email" type="text" />
        <input className="login-input" placeholder="Password" type="password" />
        <button className="login-signin">SIGN IN</button>
        <div className="login-social-media"></div>
      </div>
      <div className="login-c container3">
        <h4 className="login-signup">Don't have an account? <span className="signup">SIGN UP</span></h4>
    </div>
    </div> 
    </>
  )
}

export default Login
