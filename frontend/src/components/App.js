import React, {useState} from 'react';
import Login from './Login';
import Navbar from './Navbar.js';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:3333';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const ContentContext = React.createContext()

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState('')
  const [usernameLogin, setUsernameLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')

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

  function handleUsernameLogin(e) {
    setUsernameLogin(e.target.value)
  }

  function handlePasswordLogin(e) {
    setPasswordLogin(e.target.value)
  }

  const ContentContextValue = {
    handleLogin,
    handleLogout, 
    handleUsernameLogin,
    handlePasswordLogin,
  }

  return (
    <div className="App">
      <Navbar loggedIn={loggedIn}/>
      <ContentContext.Provider value={ContentContextValue}>
        {
          loggedIn === false ? <Login /> : <p>Logged Out</p>
        }
      </ContentContext.Provider>
    </div>
  );
}