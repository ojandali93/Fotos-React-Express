import React, { useContext } from 'react'
import LoggedOutMenu from './LoggedOutMenu'
import { ContentContext } from './App.js'

export default function Signup() {
  const { 
    handleSignup, 
    handleUsernameSignup, 
    handleEmailSignup,
    handlePasswordSignup } = useContext(ContentContext)

  return (
    <div>
      <LoggedOutMenu/>
      <form>
        <div>
          <label>SIGNUP</label>
        </div>
        <div>
          <label>USERNAME</label>
          <input type="text" class="form-control" name="username" id="username" aria-describedby="username" placeholder="Enter Username" onChange={(e) => {handleUsernameSignup(e)}}/>
        </div>
        <div>
          <label>PASSWORD</label>
          <input type="password" class="form-control" name="password" id="password" placeholder="Enter Password" onChange={(e) => {handlePasswordSignup(e)}}/>
        </div>
        <div>
          <label>EMAIL</label>
          <input type="email" class="form-control" name="email" id="email" placeholder="Enter Email" onChange={(e) => {handleEmailSignup(e)}}/>
        </div>
      </form>
      <button class="btn btn-primary" onClick={() => {handleSignup()}}>Submit</button>
    </div>
  )
}
