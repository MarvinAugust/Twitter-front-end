import React, { useContext, useState } from 'react'
import { VisibilityContext } from './Login'
import close from '../images/closer.png'
import { FaTwitter, FaWindowClose } from "react-icons/fa";
const Password = () => {
    const{fourthPopUp,setFourth,setFilter}= useContext(VisibilityContext);
    const[value,setValue] = useState('');
    const[password,setPassword] = useState('');
    const[confirmCode,setConfirm] = useState('');
    const[message,setMessage] = useState('');

    const changer = (e)=>{
        e.preventDefault();
        
    }

    const getVal=(e)=>{
        setPassword(e.target.value);
        console.log(password);
    }
  return (
    <div>
        <div className='popUp-div' style={{visibility:fourthPopUp}}>
          <div className='close-window'>
          <img src={close} alt="close-window-icon-svg"  width="30px" onClick={()=>{
            setFourth('hidden')
            setFilter('')
          }}/>
          </div>
          <div>
          <FaTwitter style={{color:'rgb(42, 182, 237)', fontSize:'40px'}}/>
          </div >
          <div>
            <div>
              <h1>Entrez votre mot de passe</h1>
            </div>
            <form>
            <div className="">

                <input type="password" className='account-input acc-npt' onChange={getVal}/>
            </div>
              <div className=''>
              <label htmlFor="" style={{fontSize:"13px",fontWeight:'bold'}} className='label'>Confirmer mot de passe</label>
                <input type="password" className='account-input acc-ntt' onChange={(e)=>{
                    // if(e.target.value !== )
                }}/>
             <span>{message}</span>
              </div>
            </form>
          <button className='final-connect'type='submit' >Se Connecter</button>
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

export default Password