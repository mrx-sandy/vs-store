import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div   className="login-page">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
          <div className="user-form-logo">
            <a href="/">
              <img
                src="https://vsmart.ajspire.com/images/logo1.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="user-form-card">
            <div className="user-form-title">
              <h2>welcome To VS Mart</h2>
              <p>Use your credentials to access</p>
            </div>
            <div className="user-form-group">
              <form action="/login" method="POST" className="user-form">
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="fwKPJTxKPYeVJfgrR9OIGvU1OXUcKdQbOMUWnZ4i"
                />
                <div className="form-group">
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="Enter your User Id | Mobile Numbar | Email Id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="check"
                  />
                  <label className="form-check-label" htmlFor="check">
                    Remember Me
                  </label>
                </div>
                <div className="form-button">
                  <button type="submit" value="Login" onClick={handleLogin}>
                    Login
                  </button>
                  <p>
                    Forgot your password?
                    <a href="/forgot-password">reset here</a>
                  </p>
                  <p>
                    Don't Have Any Account?
                    <a href="/register">  Register Here</a>
                  </p>
                </div>
               
              </form>
            </div>
          </div>
          <div className="user-form-remind"></div>
          <div className="user-form-footer">
            <p>
              V S Mart | © Copyright 2022 by
              <a target="blank" href="/">
                {" "}
                VS Mart
              </a>{" "}
              &nbsp;&nbsp;All Rights Reserved{" "}
            </p>
            <br />
            <p>
              Designed by
              <a target="blank" href="https://www.SandipGadekar.com">
                Sandip Gadekar
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
