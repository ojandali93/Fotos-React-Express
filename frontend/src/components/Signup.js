import React from 'react'

export default function Signup() {
  return (
    <div>
      <form>
        <div>
          <label>Login</label>
        </div>
        <div>
          <label>USERNAME</label>
          <input type="text" class="form-control" name="username" id="username" aria-describedby="username" placeholder="Enter Username" />
        </div>
        <div>
          <label>PASSWORD</label>
          <input type="password" class="form-control" name="password" id="password" placeholder="Enter Password"/>
        </div>
        <div>
          <label>EMAIL</label>
          <input type="email" class="form-control" name="email" id="email" placeholder="Enter Email"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
