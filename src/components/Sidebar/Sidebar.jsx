import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
     <div className="sidebar" id="sidebar">
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="menu-title">
                  <span>Main</span>
                </li>
                <li className="">
                  <Link to="/">
                    <i className="fe fe-home"></i> <span>Dashboard</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="/user">
                    <i className="fe fe-user"></i> <span>User</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  )
}

export default Sidebar