import React, { useContext } from 'react'
import { ContentContext } from './App.js'

export default function Login(props) {
  const { handleUsernameLogin, handlePasswordLogin, handleLogin } = useContext(ContentContext)

  return (
    <div>
      <form>
        <div>
          <label>LOGIN</label>
        </div>
        <div>
          <label>USERNAME</label>
          <input type="text" class="form-control" name="username" id="username" aria-describedby="username" placeholder="Enter Username" onInput={(e) => {handleUsernameLogin(e)}} />
        </div>
        <div>
          <label>PASSWORD</label>
          <input type="password" class="form-control" name="password" id="password" placeholder="Enter Password" onInput={(e) => {handlePasswordLogin(e)}}/>
        </div>
        {/* <button class="btn btn-primary" onClick={() => {handleLogin()}}>Submit</button> */}
      </form>
      <button class="btn btn-primary" onClick={() => {handleLogin()}}>Submit</button>
    </div>
  )
}