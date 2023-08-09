import React from 'react';
const Register = () => {
  return (
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
            <h2>Join Now!</h2>
            <p>Setup A New Account In A Minute</p>
          </div>
          <div className="user-form-group">
            <img
             
              className="responsiv"
              src="https://vsmart.ajspire.com/images/images.jpg"
              
             
            />
            <form action="/register" method="POST" className="user-form">
              <input type="hidden" name="_token" defaultValue="fwKPJTxKPYeVJfgrR9OIGvU1OXUcKdQbOMUWnZ4i" />
              <div className="form-group">
                <span>Name</span>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  
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
                />
              </div>
              <div className="form-group">
                <span>Mobile No</span>
                <input type="number" className="form-control" name="mob_no" placeholder="Enter your Number" required />
              </div>
              <div className="form-group">
                <span>Address</span>
                <input type="text" className="form-control" name="address" placeholder="Enter your address" />
              </div>
              <div className="form-group">
                <span>Password</span>
                <input type="password" className="form-control" name="password" placeholder="Enter your password" />
              </div>
              <div className="form-group">
                <span>Password Confirm</span>
                <input type="password" className="form-control" name="confirm_password" placeholder="Enter repeat password" />
              </div>
              <div className="form-group">
                <span>Select Franchise</span>
                <select name="franchise_id" id="order" className="form-control select2" data-live-search="true">
                  <option value="" selected>Choose Franchise</option>
                  <option value={2059}>
                    Pimple Gurav Branch , Maharashtra colony, Galli No-2, Amarnath Family Restaurant, Near Kalpataru Society, Pimple-Gurav-411061
                  </option>
                  <option value={2058}>
                    Indapur Branch , Ingale Peth, near Bhargavrao Garden, Old Kacheri road, Indapur - 413106
                  </option>
                  <option value={2054}>
                    Wai Branch , Songirwadi, Bavdhan naka, Wai-412803
                  </option>
                  <option value={2}>
                    Satara Branch , Satara
                  </option>
                </select>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" defaultValue id="check" />
                <label className="form-check-label" htmlFor="check">
                  Accept all the <a href="#">Terms &amp; Conditions</a>
                </label>
              </div>
              <div className="form-button">
                <button type="submit">register</button>
              </div>
            </form>
          </div>
        </div>
        <div className="user-form-remind">
          <p>
            Already Have An Account?
            <a href="/login">login here</a>
          </p>
        </div>
        <div className="user-form-footer">
          <p>
            <a target="_blank" href="/"> Vs Mart </a> | © Copyright by
            <a target="_blank" href="https://www.sandipgadekar.com">Sandip Gadekar</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
