import React, {useState, useEffect} from 'react'
import View from './View'
import {Link} from 'react-router-dom'





const Profile = ({name, setName, id, setId, email, setEmail, password, setPassword, phone, setPhone, getData}) => {

//  let add =  JSON.parse(window.localStorage.getItem('Email'))




   
   

  
 
 
   
  
   
   

  return (
    <>
  
<div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-danger">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="#" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Sidebar</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center text-white align-items-sm-start" id="menu">
                
                {localStorage.getItem('id') ?
                <>
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
                    </>
                    :
                    <>
                        <p>Go to login page</p>
                    </>
                }
                </ul>
                <hr/>
               
            </div>
        </div>
        {/* <div className="col py-3">
        <div className="flex-grow-1 ms-3">
                <h5 className="mb-1">Danny McLoan</h5>
                <p className="mb-2 pb-1" style={{color: '#2b2a2a'}}>Senior Journalist</p>
                <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                  style={{backgroundColor: '#efefef'}}>
                  <div>
                    <p className="small text-muted mb-1">first</p>
                    <p className="mb-0">41</p>
                  </div>
                  <div className="px-3">
                    <p className="small text-muted mb-1">first</p>
                    <p className="mb-0">976</p>
                  </div>
                  <div>
                    <p className="small text-muted mb-1">Phone number</p>
                    <p className="mb-0">8.5</p>
                  </div>
                </div>
        </div>
        </div> */}
        
      <div className='view-container'>
      {id.length>0 && <>
          <div className='table-responsive'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    <View id={id} />
                </tbody>
            </table>
          </div>
      </>}
            {id.length < 1 && <div>No data added</div>}
      </div>
    </div>
</div>
    </>
  )
}

export default Profile