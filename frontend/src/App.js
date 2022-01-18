import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Auth/Login'
import Logout from './components/Auth/Logout'
import Feed from './components/Post/Feed'
import Registration from './components/Auth/Registration/Registration'

axios.defaults.baseURL = 'http://127.0.0.1:3333';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const ContentContext = React.createContext();

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    setLoggedIn(JSON.parse(window.localStorage.getItem('loggedIn')))
    setCurrentUser(JSON.parse(window.localStorage.getItem('currentUser')))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('loggedIn', loggedIn)
  }, [loggedIn])

  useEffect(() => {
    window.localStorage.setItem('currentUser', JSON.stringify(currentUser))
  }, [currentUser])

  function handleLogout() {
    console.log('handle logout')
    axios.post('/api/auth/logout', {
      "username":currentUser.username,
      "password":currentUser.password,
    })
    .then((data) => {
      setCurrentUser('')
      setLoggedIn(false)
      console.log('logged out successful')
      // return(<Navigate to='/'/>)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      {/* <ContentContext value={contentContextValue}> */}
        <BrowserRouter>
          <Routes>
              <Route exact path="/" element={loggedIn ? <Feed/> : <Login setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser}/>} />
              <Route exact path="/login" element={<Login setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser}/>}/>
              <Route exact path="/signup" element={loggedIn ? <Feed/> : <Registration setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} currentUser={currentUser}/>}/>
              <Route exact path="/logout" element={loggedIn ? <Logout handleLogout={handleLogout}/> : <Login/>}/>
            </Routes>
        </BrowserRouter> 
      {/* </ContentContext> */}
    </div>
  );
}

export default App;
