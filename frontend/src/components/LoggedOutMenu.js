import React from 'react'

export default function LoggedOutMenu() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">LOGIN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/photos">SIGNUP</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
