import React, {useState} from 'react';
import Login from './Login';
import Signup from './Signup'
import LandingPage from './LandingPage'
import Feed from './Feed'
import axios from 'axios';
import { Routes, Route, Navigate } from 'react-router-dom';

axios.defaults.baseURL = 'http://127.0.0.1:3333';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const ContentContext = React.createContext()

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState('')
  const [usernameLogin, setUsernameLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')
  const [usernameSignup, setUsernameSignup] = useState('')
  const [passwordSignup, setPasswordSignup] = useState('')
  const [emailSignup, setEmailSignup] = useState('')

  function handleLogin() {
    console.log(usernameLogin)
    console.log(passwordLogin)
    axios.post('/api/auth/login', {
      "username":usernameLogin,
      "password":passwordLogin,
    })
    .then((data) => {
      console.log(data.data)
      setCurrentUser(data.data)
      setLoggedIn(true)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  function handleLogout() {
    axios.post('/api/auth/logout', {
      "username":currentUser.username,
      "password":currentUser.password,
    })
    .then((data) => {
      console.log(data.data)
      setCurrentUser(data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  function handleSignup(){
    
    axios.post('/api/user', {
      "username":usernameSignup,
      "password":passwordSignup,
      "email":emailSignup,
      "account_type":"P",
      "account_status":"Active",
      "account_tier":"tier1",
      "reference_id":"2f9w0fj043"
    })
    .then((data) => {
      console.log(data)
      setCurrentUser(data.data)
      setLoggedIn(true)
      console.log(loggedIn)
    })
    .catch((err) => {
      console.err(err)
    })
  }

  function handleUsernameLogin(e) {
    setUsernameLogin(e.target.value)
  }

  function handlePasswordLogin(e) {
    setPasswordLogin(e.target.value)
  }

  function handleUsernameSignup(e) {
    console.log(e.target.value)
    setUsernameSignup(e.target.value)
  }

  function handlePasswordSignup(e) {
    console.log(e.target.value)
    setPasswordSignup(e.target.value)
  }

  function handleEmailSignup(e) {
    console.log(e.target.value)
    setEmailSignup(e.target.value)
  }

  const ContentContextValue = {
    handleLogin,
    handleLogout, 
    handleUsernameLogin,
    handlePasswordLogin,
    handleSignup,
    handlePasswordSignup,
    handleUsernameSignup,
    handleEmailSignup
  }

  return (
    <div className="App">
      <ContentContext.Provider value={ContentContextValue}>
        <Routes>
          <Route exact path="/" element={loggedIn ? <Feed/> : <Login/>} />
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      </ContentContext.Provider>
    </div>
  );
}