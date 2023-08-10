import React, { useState } from "react";

const Register = () => {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    mob_no: "",
    address: "",
    password: "",
    confirm_password: "",
  });

  const onInputChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    }, () => {
      console.log(FormData); // Now this should log the updated state
    });
  };

  const onSubmit = (e) => {
    console.log(FormData);
    e.preventDefault();
    fetch("https://vsmart.ajspire.com/api/userregister", {
      method: "POST",
      body: JSON.stringify(FormData), // Use FormData with an uppercase "D"
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };


  return (
    <div className="row justify-content-center">
      <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
        <div className="user-form-logo">
          <a href="/">
            <img src="https://vsmart.ajspire.com/images/logo1.png" alt="logo" />
          </a>
        </div>
        <div className="user-form-card">
          <div className="user-form-title">
            <h2>Join Now!</h2>
            <p>Setup A New Account In A Minute</p>
          </div>
          <div className="user-form-group">
            <img
              src="https://vsmart.ajspire.com/images/images.jpg"
              alt="user"
            />
            <form action="/register" method="POST" className="user-form">
              <input
                type="hidden"
                name="_token"
                defaultValue="fwKPJTxKPYeVJfgrR9OIGvU1OXUcKdQbOMUWnZ4i"
              />
              <div className="form-group">
                <span>Name</span>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <span>Email</span>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                  required
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <span>Mobile No</span>
                <input
                  type="number"
                  className="form-control"
                  name="mob_no"
                  placeholder="Enter your Number"
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <span>Address</span>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="Enter your address"
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <span>Password</span>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <span>Password Confirm</span>
                <input
                  type="password"
                  className="form-control"
                  name="confirm_password"
                  placeholder="Enter repeat password"
                  onChange={(e)=>onInputChange(e)}
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
                  Accept all the <a href="#">Terms &amp; Conditions</a>
                </label>
              </div>
              <div className="form-button">
        <button type="submit" onClick={(e)=>onSubmit(e)}>
          Register
        </button>
      </div>
            </form>
          </div>
        </div>
        <div className="user-form-remind">
          <p>
            Already Have An Account?
            <a href="/login">Login here</a>
          </p>
        </div>
        <div className="user-form-footer">
          <p>
            <a target="_blank" href="/">
              {" "}
              Vs Mart{" "}
            </a>{" "}
            | © Copyright by
            <a target="_blank" href="https://www.ajspire.com">
              Sandip Gadekar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
