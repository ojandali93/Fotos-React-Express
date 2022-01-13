import React from 'react';
import { Link } from 'react-router-dom'

export default function LoggedOutMenu() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/login">LOGIN</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/signup">SIGNUP</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
