import React, { useState, useEffect } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import './Registration.css'
import swal from "sweetalert";
const Registration = ({name, setName, id, setId, email, setEmail, password, setPassword, phone, setPhone}) => {

 
  const [profession, setProfession] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

  //   if (!name || !email || !password || !phone || !profession) {
  //     setFlag(true);
  //   } else {
  //     setFlag(false);
  //     localStorage.setItem("Email", JSON.stringify(email));
  //     localStorage.setItem(
  //       "Password",
  //       JSON.stringify(password)
  //     );
  //     console.log("Saved in Local Storage");

  //     setLogin(!login);
  //   }
  // }

  let ids = {
       name,
       email,
       password,
       phone,
  }
  
if(name && email && password && phone)
{
  setId([...id,ids]);
  setName('');
  setEmail(email);
  setPassword(password);
  setPhone('')
  window.location.href = "/"
}
else{
   window.location.href = "/registration"
}

  }

  useEffect(() => {
     localStorage.setItem('id', JSON.stringify(id));
     localStorage.setItem("Email", JSON.stringify(email));
          localStorage.setItem(
            "Password",
            JSON.stringify(password));
  },[id, email, password])

  function handleClick() {
    setLogin(!login);
  }



  return (
    <>

    {login ? (
        <section className="vh-100 bg-image"
  style={{backgroundImage: "url(" + '' + ")"}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: '15px'}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <div>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h3>Register</h3>

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                required/>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                required/>
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                required/>
              </div>

              <div className="form-group">
              <label for="phonenum">Phone Number (format: xxxx-xxx-xxxx):</label><br/>
 
                <input
                  
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                  id="phonenum" type="tel" pattern="^\d{4}-\d{3}-\d{4}$"
               required />
              </div>

              {/* <div className="form-group">
                <label>Choose your Profession</label>
                <Form.Control
                  as="select"
                  onChange={(event) => setProfession(event.target.value)}
                >
                  <option>Select</option>
                  <option>Artist</option>
                  <option>Photographer</option>
                  <option>Team Player</option>
                  <option>Full Stack</option>
                </Form.Control>
              </div> */}

              <button type="submit" className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3">
                Register
              </button>
              <p onClick={handleClick} className="forgot-password text-right">
                Already registered{" "}log in?
                
              </p>
             
            </form>
          ) : (
            swal({
                          title: "Welcome!",
                          text: "You redirected to Dashboard!",
                          icon: "success",
                        }).then(function () {
                          window.location.href = "/";
                        })
                      )}
          
        </div>
            

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    ):( window.location.href = "/")}
    </>
  )
}

export default Registration