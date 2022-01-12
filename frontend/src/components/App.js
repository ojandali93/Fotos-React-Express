import React, {useState} from 'react';
import Login from './Login';
import Navbar from './Navbar.js'


function App() {

  const [userToken, setUserToken] = useState('')
  const [usernameLogin, setUsernameLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')

  const checkLogin = () => {
    
  }

  const handleUsernameLogin = (e) => {
    console.log(e.target.value)
    setUsernameLogin(e.target.value)
  }

  const handlePasswordLogin = (e) => {
    console.log(e.target.value)
    setPasswordLogin(e.target.value)
  }

  return (
    <div className="App">
      <Navbar />
      {
        userToken === '' ? <Login handleUsernameLogin={handleUsernameLogin} handlePasswordLogin={handlePasswordLogin} /> : <p>Logged Out</p>
      }
    </div>
  );
}

export default App;
