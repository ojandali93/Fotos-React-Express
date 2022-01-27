import React, { useContext } from 'react'
import FileBase64 from 'react-file-base64'
import { RegistrationContext } from './Registration'

export default function Profile() {
  const {
    firstName,
    lastName,
    bio,
    location,
    facebook,
    instagram,
    twitter,
    website,
    profilePicture,
    setFirstName,
    setLastName,
    setBio,
    setLocation,
    setFacebook,
    setInstagram,
    setTwitter,
    handleProfilePicture,
    setWebsite,
    previousStep,
    confirmRegistration
  } = useContext(RegistrationContext)

  return (
    <div>
    {/* <Navbar/> */}
    <form>
      <div>
        <label>PROFILE</label>
      </div>
      <div>
        <label>PROFILE PICTURE</label>
        <input 
        type="file" 
        className="form-control" 
        name="profilePicture" id="profilePicture" 
        aria-describedby="profilePicture" 
        placeholder="Upload Profile Picture" 
        onChange={(e) => handleProfilePicture(e)} />
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
        <label>LAST NAME</label>
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
      <button className="btn btn-primary" onClick={(e) => {previousStep(e)}}>PREVIOUS STEP</button>
      <button className="btn btn-primary" onClick={(e) => {confirmRegistration(e)}}>CONFIRM</button>
    </form>
  </div>
  )
}
