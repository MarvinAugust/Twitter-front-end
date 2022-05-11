import React, { useState } from 'react'
import { useContext } from 'react'
import { VisibilityContext } from './Login'
import close from '../images/closer.png'
import { FaTwitter, FaWindowClose } from "react-icons/fa";

const InsertPass = () => {
  const {thirdPopUp,formValue,setThird,setFilter,setFourth} = useContext(VisibilityContext)
  const [closeWin,setCLose] = useState('hidden');
  const [pssVal,setPss] = useState('')
  console.log(formValue)

  const passwordValue=(e)=>{
    e.preventDefault()
    setPss(e.target.value)
    console.log(pssVal)
  }

  const sender = (e)=>{
    e.preventDefault();
    const myHeaders = new Headers({"Content-type":"application/json"})
    fetch('http://localhost:3002/isCorrect',{
      method:'POST',
      headers:myHeaders,
      body:JSON.stringify({
        passcode:pssVal
      })
    }).then(result=>result.json())
      .then(json=>console.log(json))
      // setFourth('visible')
      // setThird('hidden')
  }
  return (
    <div>
        <div className='popUp-div' style={{visibility:thirdPopUp}}>
          <div className='close-window'>
          <img src={close} alt="close-window-icon-svg"  width="30px" onClick={()=>{
            setThird('hidden')
            setFilter('')
          }}/>
          </div>
          <div>
          <FaTwitter style={{color:'rgb(42, 182, 237)', fontSize:'40px'}}/>
          </div >
          <div className='account-div'>
            <div>
              <h1>Entrez votre mot de passe</h1>
            </div>
            <div className="inserted-email">
                <p className='input-blur'>{formValue}</p>
            </div>
            <form onChange={passwordValue}>
              <div>
              <input type="password" className='account-input acc-npt'/>
              </div>
            </form>
          <button className='final-connect'type='submit' onClick={sender}>Se Connecter</button>
          </div>
          {/* <p className='create-account-route'>Vous n'avez pas de compte ? <a href="" style={{color:"rgb(42, 182, 237)"}} onClick={(e)=>{
                          e.preventDefault()
                          setPopUp('visible')
                          setAccount('hidden')
                      }}>Inscrivez-vous</a></p> //HAVE TO BE DONE*/}
        </div>
    </div>
  )
}

export default InsertPass