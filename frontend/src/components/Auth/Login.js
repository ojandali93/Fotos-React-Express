import React, { useState, useContext } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

export default function Login(props) {
  const {
    setLoggedIn,
    setCurrentUser
  } = props

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e){
    e.preventDefault()
    axios.post('/api/auth/login', {
      "username":username,
      "password":password,
    })
    .then((data) => {
      setCurrentUser(data.data)
      setLoggedIn(true)
      return(<Navigate to='/' />)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <Navbar/>
      <form onSubmit={handleLogin}>
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
        <button type="submit" value="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}