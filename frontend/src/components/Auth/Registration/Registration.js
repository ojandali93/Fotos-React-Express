import React, { useState } from 'react'
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

  function nextStep(){
    setRegistrationStep(2)
  }

  function previousStep(){
    setRegistrationStep(1)
  }

  // function confirmRegistration(e){
  //   e.preventDefault()
  //   if(password === verify){
  //     axios.all([
  //       axios.post('/api/user', {
  //         'username':username,
  //         'password':password,
  //         'email':email,
  //         'account_type':'P',
  //         'account_status':'Active',
  //         'account_tier':'tier1',
  //         'reference_id':'ewvwe98w9'
  //       }),
  //       axios.post('/api/profile/', {
  //         'f_name':firstName,
  //         'l_name':lastName,
  //         'bio':bio,
  //         'location':location,
  //         'sm_facebook':facebook,
  //         'sm_instagram':instagram,
  //         'sm_twitter':twitter,
  //         'sm_website':website,
  //         'followers':0,
  //         'following':0,
  //         'photos':0,
  //         'edits':0,
  //         'downloads':0,
  //         'userId':currentUser.id
  //       })
  //     ])
  //     .then(axios.spread((userData, profileData) => {
  //       console.log(userData)
  //       console.log(profileData)
  //       // setLoggedIn(true)
  //       // setCurrentUser(data.data)
  //       return(<Navigate to='/' />)
  //     }))
  //     .catch((err) => {
  //       console.error(err)
  //     })
  //   }
  // }
  function confirmRegistration(e){
    e.preventDefault()
    if(password === verify){
      createAccount()
    }
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
      // console.log(data.data)
      setLoggedIn(true)
      setCurrentUser(data.data)
      createProfile(data.data.user.userId)
    })
    .catch((err) => {
      console.error(err)
    })
  }

  function createProfile(userId){
    axios.post('/api/profile/', {
      'f_name':firstName,
      'l_name':lastName,
      'bio':bio,
      'location':location,
      'sm_facebook':facebook,
      'sm_instagram':instagram,
      'sm_twitter':twitter,
      'sm_website':website,
      'followers':0,
      'following':0,
      'photos':0,
      'edits':0,
      'downloads':0,
      'userId':userId
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
