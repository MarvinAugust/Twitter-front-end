import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
<<<<<<< HEAD
// import Home from './Components/Home'
import Profile from './Components/Profile'
// import Login from './Components/Login'
// import Signup from './Components/Signup'
import './profile.css'
=======
import Home from './Components/Home'
import Profile from './Components/Profile'
import Login from './Components/Login'
import Signup from './Components/Signup'
>>>>>>> 789bafc26b3e724eebc3fbf6e8d6bec60e87d1dc

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <nav>
=======
      <nav>
>>>>>>> 789bafc26b3e724eebc3fbf6e8d6bec60e87d1dc
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/signup'>Signup</Link></li>
        </ul>
<<<<<<< HEAD
      </nav> */}
        {/* <Routes>
=======
      </nav>
        <Routes>
>>>>>>> 789bafc26b3e724eebc3fbf6e8d6bec60e87d1dc
          <Route exact path='/home' element={<Home/>}></Route>
          <Route path='profile' element={<Profile/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='signup' element={<Signup/>}></Route>
<<<<<<< HEAD
        </Routes> */}
     <Profile/>
=======
        </Routes>

>>>>>>> 789bafc26b3e724eebc3fbf6e8d6bec60e87d1dc
    </div> 
  );
}

export default App;
