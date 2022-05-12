import './App.css';
import './feed.css'
import Login from './Components/Login';
import { Feed } from './Components/Feed';
import {Routes,Route,Links} from 'react-router-dom'
import InsertPass from './Components/InsertPass';
function App() {
  return (
    <div className="App">
    {/* <Login/> */}
   <Feed/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/login/register/feed' element={<Feed/>}/>
      <Route path='/login/register' element={<InsertPass/>}/>
    </Routes>
    </div>
  );
}

export default App;
