import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <Link className="nav-link" to="/">HOME</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">CREATE</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">EXPLORE</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">MESSAGESs</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">SEARCH</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">PORTFOLIO</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">PROFILE</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/logout">LOGOUT</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
