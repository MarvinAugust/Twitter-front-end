import './App.css';
import './feed.css'
import Login from './Components/Login';
import { Feed } from './Components/Feed';
import {Routes,Route,Links} from 'react-router-dom'
import InsertPass from './Components/InsertPass';
import { useState } from 'react';
import { createContext } from 'react';
export const NewContext = createContext()
function App() {
  const [mainVal,setMain] = useState('');
  const [explore,setExplorer] = useState(false);
  console.log(mainVal)
  const getUserId = {
    mainVal:mainVal,
    setMain:setMain,
    explore:explore,
    setExplorer:setExplorer

  }
  return (
    <div className="App">
    <NewContext.Provider value={getUserId}>
  
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/feed' element={<Feed/>}/>
      <Route path='/login/register' element={<InsertPass/>}/>
    </Routes>
      {/* <Feed/> */}
      {/* <InsertPass/> */}
      {/* <Login/> */}
    </NewContext.Provider>
    </div>
  );
}

export default App;
