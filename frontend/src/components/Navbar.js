import React from 'react'
import LoggedInMenu from './LoggedInMenu.js'
import LoggedOutMenu from './LoggedOutMenu.js'

export default function Navbar(props) {
  const { loggedIn } = props
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
          <div class="navbar-nav">
            {
              loggedIn === false ? <LoggedOutMenu/> : <LoggedInMenu />
            }
          </div>
        </div>
      </nav>
    </div>
  )
}
