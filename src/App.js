import './App.css';
import Login from './Components/Login';
import {Routes,Route,Links} from 'react-router-dom'
import InsertPass from './Components/InsertPass';
function App() {
  return (
    <div className="App">
    <Login/>

    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/login/register' element={<InsertPass/>}/>
    </Routes>
    </div>
  );
}

export default App;
