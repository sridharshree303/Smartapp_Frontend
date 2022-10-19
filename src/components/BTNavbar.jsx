import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../utils/Auth'

const BTNavbar = () => {
  const auth = useAuth();
  const emp = auth.employee;
  const loggedIn = auth.loggedIn;

  const [navs, setNavs] = useState([]);

  useEffect(() => {
    
    axios.get("http://localhost:8082/navmenu/getallnavs").then(
      response => {
        // console.log(response.data)
        setNavs(response.data);
      }
    ).catch(
      error => {
        console.log(error)
      }
    )

  }, [emp])


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse p-1 justify-content-center" id="navbarNav">
            <ul className="navbar-nav ">
              {
                navs.map(item => {
                  return (
                    <div key={item.navId}>
                      {
                        item.loginStat && emp !== null && emp.logged ?
                          <li className="nav-item">
                            <NavLink className="nav-link" to={item.urlName}>{item.navName}</NavLink>
                          </li>
                          :
                          null
                      }
                      {
                        item.loginStat === false && loggedIn === false ?
                          <li className="nav-item">
                            <NavLink className="nav-link" to={item.urlName}>{item.navName}</NavLink>
                          </li>
                          :
                          null
                      }
                    </div>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default BTNavbar
