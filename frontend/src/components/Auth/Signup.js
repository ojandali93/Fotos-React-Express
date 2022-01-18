import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

export default function Signup(props) {
  const {
    setLoggedIn,
    setCurrentUser
  } = props

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [verify, setVerify] = useState('')
  const [email, setEmail] = useState('')

  function handleSignup(e){
    e.preventDefault()
    if(password === verify){
      axios.post('/api/user', {
        "username":username,
        "password":password,
        "email":email,
        "account_type":"P",
        "account_status":"Active",
        "account_tier":"tier1",
        "reference_id":"2f9w0fj043"
      })
      .then((data) => {
        setCurrentUser(data.data)
        setLoggedIn(true)
        return(<Navigate to='/profile' />)
      })
      .catch((err) => {
        console.error(err)
      })
    } else {
      console.log('passwords dont match')
    }
  }

  return (
    <div>
      <Navbar/>
      <form onSubmit={handleSignup}>
        <div>
          <label>LOGIN</label>
        </div>
        <div>
          <label>USERNAME</label>
          <input 
          type="text" 
          className="form-control" 
          name="username" id="username" 
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
        <button type="submit" value="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
