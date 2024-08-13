import React from "react";

import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div>
      <form>
        <div className="login-container">
          <h3 className="login-hello">Hello,</h3>
          <h1 className="login-please">Please login.</h1>
          <input
            type="text"
            placeholder="email"
            className="login-email"
            required
          ></input>
          <br />
          <input
            type="password"
            placeholder="password"
            className="login-password"
            required
          ></input>
          <br />
          <div className="login-button">
            <button className="login-btn">login</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
