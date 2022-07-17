import React from 'react'
import { Link } from 'react-router-dom';

const Logout = () => {

   



      function removeLogin() 
      {
        let keysToRemove = ["Email", "Password", "id"];

           keysToRemove.forEach(k =>
            localStorage.removeItem(k))

            window.location.href = "/"
      }

  return (
    <>
  {localStorage.getItem('id') ?
                <>
<div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-danger">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="#" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Sidebar</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center text-white align-items-sm-start" id="menu">
              
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link align-middle px-0 text-white">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Profile Page</span>
                        </Link>
                    </li>
                   
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link align-middle px-0 text-white">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Dashboard </span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/logout" className="nav-link align-middle px-0 text-white">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Logout </span>
                        </Link>
                    </li>
                   
                </ul>
                <hr/>
               
            </div>
        </div>
        <div className="col py-3">
        <h1>This is logout page</h1>
        <button onClick={removeLogin} type="button" className="btn btn-danger">Logout</button>
        </div>
    </div>
</div>
       
       </>
                    :
                    <>
                        <p>Go to login page</p>
                    </>
                }
       
    </>
  )
}

export default Logout