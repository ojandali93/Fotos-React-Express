import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/login">LOGIN</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">SIGNUP</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
