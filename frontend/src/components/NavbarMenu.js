import React from 'react'

export default function NavbarMenu() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">FEED</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/photos">PHOTOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/edits">EDITS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/downloads">DOWNLOADS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/search">SEARCH</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/auth/logout">LOGOUT</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
