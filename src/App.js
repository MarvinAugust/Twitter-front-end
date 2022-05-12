import './App.css';
import Login from './Components/Login';
import Homepage from "./Components/Homepage"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, Links } from 'react-router-dom'
// import InsertPass from './Components/InsertPass';
function App() {
  return (

    <Routes>
      <Route path='/login' element={<Login />} />
      {/* <Route path='/login/register' element={<InsertPass />} /> */}
      <Route path='/' exact element={<Homepage />} />
    </Routes>


  )
}

export default App;
