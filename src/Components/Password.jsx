import React, { useContext, useEffect, useState } from 'react'
import { VisibilityContext } from './Login'
import close from '../images/closer.png'
import { FaTwitter, FaWindowClose } from "react-icons/fa";
const Password = () => {
  const { fourthPopUp, setFourth, setFilter, setAccount } = useContext(VisibilityContext);
  //first input value
  const [value, setValue] = useState('');
  //confirm input value
  const [confirmCode, setConfirm] = useState('');
  // Error message 
  const [message, setMessage] = useState('');
  // boolean hook that changes button functionality when its true or false 
  const [isTrue, setTrue] = useState('')
  // function posts data to back
  const sender = (e) => {
    e.preventDefault();
    const myHeaders = new Headers({ "Content-type": "application/json" })
    fetch('http://localhost:3002/signup/password', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        password: value,
        confirmed: confirmCode
      })
    }).then(response => response.json())
      .then(bson => {
        // const jsb = JSON.parse(bson)
        console.log(bson)

      })
    setAccount('visible')
    setFourth('hidden')
  }
  // input onChange function 
  const inputValue = async (e) => {
    setValue(e.target.value)

  }
// without useEffect onChanges will be late while getting value.
  useEffect(() => {

    if (value !== confirmCode) {
      setMessage("password didn't matched")
      setTrue(false)
    } else {
      setTrue(true)
      setMessage('')
    }
    console.log(value)
    console.log(confirmCode, 'RRRRRR')
  }, [value, confirmCode])

  return (
    <div>
      <div className='popUp-div' style={{ visibility: fourthPopUp }}>
        <div className='close-window'>
          <img src={close} alt="close-window-icon-svg" width="30px" onClick={() => {
            setFourth('hidden')
            setFilter('')
          }} />
        </div>
        <div>
          <FaTwitter style={{ color: 'rgb(42, 182, 237)', fontSize: '40px' }} />
        </div >
        <div>
          <div>
            <h1>Entrez votre mot de passe</h1>
          </div>
          <form>
            <div className="">
              <input type="password" className='account-input acc-npt' onChange={inputValue} />
            </div>
            <div className=''>
              <label htmlFor="" style={{ fontSize: "13px", fontWeight: 'bold' }} className='label'>Confirmer mot de passe</label>
              <input type="password" className='account-input acc-ntt' onChange={(e) => {
                setConfirm(e.target.value)
              }} />
              <span>{message}</span>
            </div>
          </form>
          {isTrue === true ? <button className='final-connect' type='submit' onClick={sender}>Se Connecter</button> : <button className='final-connect hover-btn'>Se Connecter</button>}
        </div>

      </div>
    </div>
  )
}

export default Password