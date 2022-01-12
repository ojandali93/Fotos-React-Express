import React from 'react'
import NavbarMenu from './NavbarMenu.js'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
          <div class="navbar-nav">
            <NavbarMenu />
          </div>
        </div>
      </nav>
    </div>
  )
}
