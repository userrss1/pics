import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Dashboard from "./Dashboard";
import { useNavigate } from 'react-router-dom'
import swal from "sweetalert";
import {Link} from "react-router-dom"

import './Login.css'

const Login = () => {

  const navigate = useNavigate();

  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("Password")
      .replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");



    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <>
      <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">

                      <div className="text-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          style={{ width: '185px' }} alt="logo" />
                        <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                      </div>

                      {home ? (
                        <form onSubmit={handleLogin}>
                          <p>Please login to your account</p>
                          <div className="form-group">

                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter email"
                              onChange={(event) => setEmaillog(event.target.value)}
                            />
                          </div>

                          <div className="form-group">

                            <input
                              type="password"
                              className="form-control"
                              placeholder="Enter password"
                              onChange={(event) => setPasswordlog(event.target.value)}
                            />
                          </div>

                          {/* <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button> */}

                          <div className="text-center pt-1 mb-5 pb-1">
                            <button type="submit" className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" >Log
                              in</button>
                            {flag && (
                              <Alert color="primary" variant="warning">
                                Fill correct Info else keep trying.
                              </Alert>
                            )}
                            <a className="text-muted" href="#!">Forgot password?</a>
                          </div>

                          <div className="d-flex align-items-center justify-content-center pb-4">
                            <p className="mb-0 me-2">Don't have an account?</p>
                            <Link type="button" className="btn btn-outline-danger" to="/registration" >Create new</Link>
                          </div>


                        </form>
                      ) : (
                        swal({
                          title: "Welcome!",
                          text: "You redirected to Dashboard!",
                          icon: "success",
                        }).then(function () {
                          window.location.href = "/dashboard";
                        })
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login