import React, { useContext } from 'react'
// import Navbar from './Navbar'
import { RegistrationContext } from './Registration'
// import axios from 'axios'
// import { Navigate } from 'react-router-dom'

export default function Signup() {
  const {
    username, 
    password, 
    verify,
    email,
    setUsername,
    setPassword,
    setVerify,
    setEmail,
    nextStep,
  } = useContext(RegistrationContext)

  return (
    <div>
      {/* <Navbar/> */}
      <form>
        <div>
          <label>SIGNUP</label>
        </div>
        <div>
          <label>USERNAME</label>
          <input 
          type="text" 
          className="form-control" 
          name="username" 
          id="username" 
          aria-describedby="username" 
          placeholder="Enter Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>PASSWORD</label>
          <input 
          type="password" 
          className="form-control" 
          name="password" 
          d="password" 
          placeholder="Enter Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <label>VERIFY PASSWORD</label>
          <input 
          type="password" 
          className="form-control" 
          name="verify" 
          id="verify" 
          placeholder="Re-enter Password" 
          value={verify} 
          onChange={(e) => setVerify(e.target.value)}/>
        </div>
        <div>
          <label>Email</label>
          <input 
          type="text" 
          className="form-control" 
          name="email" id="email" 
          aria-describedby="email" 
          placeholder="Enter Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button onClick={() => {nextStep()}} className="btn btn-primary">NEXT STEP</button>
      </form>
    </div>
  )
}
