import React, { useState, useContext } from 'react'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Profile from './components/Auth/Profile'
import Feed from './components/Post/Feed'
import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

axios.defaults.baseURL = 'http://127.0.0.1:3333';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const ContentContext = React.createContext();

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  const contentContextValue = {
    loggedIn, 
    currentUser,
    setLoggedIn,
    setCurrentUser
  }

  return (
    <div className="App">
      {/* <ContentContext value={contentContextValue}> */}
        <BrowserRouter>
          <Routes>
              {/* <Route exact path="/" element={loggedIn ? <Feed/> : <Login/>} />
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/signup" element={<Signup/>}/>
              <Route exact path="/photos" element={<Signup/>}/>
              <Route exact path="/edits" element={<Signup/>}/>
              <Route exact path="/downloads" element={<Signup/>}/>
              <Route exact path="/logout" element={loggedIn ? () => {handleLogout()} : <Login/>}/> */}
              <Route exact path="/" element={loggedIn ? <Feed/> : <Login setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser}/>} />
              <Route exact path="/signup" element={<Signup setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser}/>}/>
              <Route exact path="/login" element={<Login setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser}/>}/>
              <Route exact path="/profile" element={loggedIn ? <Profile/> : <Login setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser}/>}/>
            </Routes>
        </BrowserRouter> 
      {/* </ContentContext> */}
    </div>
  );
}

export default App;
