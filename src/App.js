import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
// import Home from './Components/Home'
import Profile from './Components/Profile'
// import Login from './Components/Login'
// import Signup from './Components/Signup'
import './profile.css'

function App() {
  return (
    <div className="App">
      {/* <nav>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/signup'>Signup</Link></li>
        </ul>
      </nav> */}
        {/* <Routes>
          <Route exact path='/home' element={<Home/>}></Route>
          <Route path='profile' element={<Profile/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='signup' element={<Signup/>}></Route>
        </Routes> */}
     <Profile/>
    </div> 
  );
}

export default App;
