import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import Signup from './Signup'
import Profile from './Profile'
import axios from 'axios';

export const RegistrationContext = React.createContext();

export default function Registration(props) {
  const {
    currentUser,
    setLoggedIn,
    setCurrentUser
  } = props

  const [registrationStep, setRegistrationStep] = useState(1)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [verify, setVerify] = useState('')
  const [email, setEmail] = useState('')
  const [account, setAccount] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [bio, setBio] = useState('')
  const [location, setLocation] = useState('')
  const [facebook, setFacebook] = useState('')
  const [instagram, setInstagram] = useState('')
  const [twitter, setTwitter] = useState('')
  const [website, setWebsite] = useState('')
  const [profilePicture, setProfilePicture] = useState('')

  useEffect(() => {
    console.log('new photo uploaded')
    console.log(profilePicture)
  }, [profilePicture])

  function nextStep(){
    setRegistrationStep(2)
  }

  function previousStep(){
    setRegistrationStep(1)
  }

  function confirmRegistration(e){
    e.preventDefault()
    if(password === verify){
      createAccount()
    }
  }

  function handleProfilePicture(e){
    setProfilePicture(e.target.files[0])
  }

  function createAccount(){
    axios.post('/api/user', {
      'username':username,
      'password':password,
      'email':email,
      'account_type':'P',
      'account_status':'Active',
      'account_tier':'tier1',
      'reference_id':'ewvwe98w9'
    })
    .then((data) => {
      setLoggedIn(true)
      setCurrentUser(data.data)
      createProfile(data.data.user.userId)
    })
    .catch((err) => {
      console.error(err)
    })
  }

  function createProfile(userId){
    let data = new FormData()
    data.append('f_name', firstName)
    data.append('l_name', lastName)
    data.append('bio', bio)
    data.append('location', location)
    data.append('sm_facebook', facebook)
    data.append('sm_instagram', instagram)
    data.append('sm_twitter', twitter)
    data.append('sm_website', website)
    data.append('followers', 0)
    data.append('following', 0)
    data.append('photos', 0)
    data.append('edits', 0)
    data.append('downloads', 0)
    data.append('userId', userId)
    data.append('profile_pic', profilePicture)
    console.log(data)
    axios({
      method: "post",
      url: "/api/profile/",
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((data) => {
      return(<Navigate to='/' />)
    })
    .catch((err) => {
      console.error(err)
    })
  }

  const RegistrationContextValue = {
    registrationStep,
    username,
    password,
    verify,
    email,
    account, 
    firstName,
    lastName, 
    bio, 
    location,
    facebook,
    instagram,
    twitter,
    website,
    profilePicture,
    setRegistrationStep,
    setUsername,
    setPassword,
    setVerify,
    setEmail,
    setAccount,
    setFirstName,
    setLastName,
    setBio,
    setLocation,
    setFacebook,
    setInstagram,
    setTwitter,
    setWebsite,
    handleProfilePicture,
    nextStep,
    previousStep,
    confirmRegistration
  }

  return (
    <div>
      <RegistrationContext.Provider value={RegistrationContextValue}>
        {
          registrationStep == 1 ? <Signup/> : null
        }
        {
          registrationStep == 2 ? <Profile/> : null
        }
      </RegistrationContext.Provider>
    </div>
  )
}
