import React, { useState } from "react";
import "./Signup.css";
import LoginForm from "../Login-form/LoginForm";
import { Link } from "react-router-dom";
// import { auth } from "./firebase";
const Signup = () => {
  const [data, setData] = useState({
    // firstName: "",
    // lastName: "",
    email: "",
    password: "",
  });

  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // const createAccount = (e) => {
  //   e.preventDefault();
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((user) => console.log(user))
  //     .catch((err) => console.log(err));
  // };
  return (
    <div>
      <form autoComplete="off">
        <div>
          <h4 className="sign-up-start">START FOR FREE</h4>
          <h1 className="sign-up-account">
            Create new account<span>.</span>
          </h1>
          <h4 className="sign-up-member">
            Already A Member? &nbsp;
            <Link to="/LoginForm" className="login-link">
              <span>Log In</span>
            </Link>
          </h4>
          <div className="sign-up-names">
            <input
              type="text"
              name="firstName"
              // value={firstName}
              onChange={changeHandler}
              className="first-name"
              placeholder="First name"
              // required
            ></input>
            &nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="lastName"
              // value={lastName}
              onChange={changeHandler}
              className="sur-name"
              placeholder="Last name"
              // required
            ></input>
          </div>

          <input
            type="email"
            name="email"
            value={email}
            onChange={changeHandler}
            className="sign-up-mail"
            placeholder="Email"
            required
          ></input>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
            className="sign-up-password"
            placeholder="Password"
            required
          ></input>
          <div className="button">
            <button
              className="sign-up-button"
              //
            >
              Create account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
