import React, { useState } from 'react'
import Navbar from './Navbar'

export default function Profile() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [bio, setBio] = useState('')
  const [location, setLocation] = useState('')
  const [facebook, setFacebook] = useState('')
  const [instagram, setInstagram] = useState('')
  const [twitter, setTwitter] = useState('')
  const [website, setWebsite] = useState('')

  function handleProfile(){
    console.log('creating a profile')
  }

  return (
    <div>
    <Navbar/>
    <form>
      <div>
        <label>PROFILE</label>
      </div>
      <div>
        <label>FIRST NAME</label>
        <input 
        type="text" 
        className="form-control" 
        name="firstName" id="firstName" 
        aria-describedby="ffirstName" 
        placeholder="Enter First Name" 
        value={firstName} 
        onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div>
        <label>Last Name</label>
        <input 
        type="text" 
        className="form-control" 
        name="lastName" id="lastName" 
        aria-describedby="lastName" 
        placeholder="Enter Last Name" 
        value={lastName} 
        onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div>
        <label>BIO</label>
        <textarea
        className="form-control" 
        name="lastName" id="lastName" 
        aria-describedby="lastName" 
        placeholder="Enter Last Name" 
        value={bio} 
        onChange={(e) => setBio(e.target.value)}/>
      </div>
      <div>
        <label>LOCATION</label>
        <input 
        type="text" 
        className="form-control" 
        name="location" id="location" 
        aria-describedby="location" 
        placeholder="Enter Location" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div>
        <label>FACEBOOK</label>
        <input 
        type="link" 
        className="form-control" 
        name="facebook" id="facebook" 
        aria-describedby="facebook" 
        placeholder="Enter Facebook" 
        value={facebook} 
        onChange={(e) => setFacebook(e.target.value)} />
      </div>
      <div>
        <label>INSTAGRAM</label>
        <input 
        type="link" 
        className="form-control" 
        name="instagram" id="instagram" 
        aria-describedby="instagram" 
        placeholder="Enter Instagram" 
        value={instagram} 
        onChange={(e) => setInstagram(e.target.value)} />
      </div>
      <div>
        <label>TWITTER</label>
        <input 
        type="link" 
        className="form-control" 
        name="twitter" id="twitter" 
        aria-describedby="twitter" 
        placeholder="Enter Twitter" 
        value={twitter} 
        onChange={(e) => setTwitter(e.target.value)} />
      </div>
      <div>
        <label>WEBSITE</label>
        <input 
        type="link" 
        className="form-control" 
        name="website" id="website" 
        aria-describedby="website" 
        placeholder="Enter Website" 
        value={website} 
        onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <button type="submit" value="submit" className="btn btn-primary" onClick={() => {handleProfile()}}>Submit</button>
    </form>
  </div>
  )
}
