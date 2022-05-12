import React from 'react'
import { useState } from 'react'
import { FaTwitter, FaWindowClose } from "react-icons/fa";
import close from '../images/closer.png'
const Login = () => {
    const [popoUp, setPopUp] = useState('hidden')

    const [account,setAccount] = useState('hidden')
    const [filter,setFilter] = useState('');
    const [form,setForm] = useState('')
    const [name, setName] = useState('');
    const [number,setNumber] = useState('');
    const [birth,setBirth] = useState('');
    const [birthMonth,setBirthMonth] = useState('')
    const [day,setDay]=useState('')
    const [thirdPopUp, setThird] = useState('hidden')
    const [inputBorder, setBorder] = useState(' 2px solid rgb(211, 209, 209)')
    const[fourthPopUp,setFourth] = useState('hidden')

    // const changer = (e) => {
    //     setValue(e.target.value)
    //     console.log(value)
    // }

    const shadow = ()=>{
        if(popoUp === 'visible'){
            setFilter('blur(4px)')
        }
    }
    return (
        <div className='main-div'  >
            <section className='twitter-image' style={{filter:filter}}>
            </section>
            <section style={{filter:filter}}>
                <div>
                    <FaTwitter className='twitter-icon log' />
                </div>
                <div className='intro-div'>
                    <span className='intro-span'>
                        Ça se passe<br /> maintenant
                    </span>
                    <div className='intro-div-child'>

                        <span>
                            Rejoinez Twitter dés aujourd'hui
                        </span>
                    </div>
                    <div className='register-div' onClick={()=>{
                        setPopUp('visible')
                       
                        setFilter('blur(4px)')
                    
                    }}>
                        <span>s'inscrire avec un numéro télépho...</span>
                    </div>
                    <div className='policy-div'>
                        <p>
                            En vous inscrivant, vous acceptez les <span style={{ color: 'rgb(42, 182, 237)' }}>Conditions d'Utilisation</span><br />
                            et la <span style={{ color: 'rgb(42, 182, 237)' }}>Politique de Confdentilalité</span>, incluant l'<span style={{ color: 'rgb(42, 182, 237)' }}>Utilisation de <br />Cookies</span>
                        </p>
                    </div>
                    <div className='have-account'>
                        <span className="check-account">Vous avez déja un compte ?</span>
                    </div>
                    <div className='connect-to-account'>
                        <button>se connecter</button>
                    </div>
                </div>
            </section>
                <div className='popUp-div' style={{visibility:popoUp}}>
                    <div className='close-window' onClick={()=>{
                        setPopUp('hidden')
                        setFilter('')
                      }}>
                        <img src={close} style={{backgroundColor:'white',color:'black'}} width="30px"/>
                    </div>
                    <div>
                        <FaTwitter style={{color:'rgb(42, 182, 237)', fontSize:'40px'}}/>
                    </div>
                    <div>
                    <div style={{width:"100%", marginLeft:"-5.5%"}}>
                        <span className="popUp-span">Créer votre compte</span>
                    </div>
                        <input type="text" placeholder='lionel messi'></input>
                    </div>
                    <div >
                        <input type="Number" placeholder='0123456789'></input>
                        <a><p className='phNumber-paragraph' style={{color:'rgb(42, 182, 237)'}}>Utiliser un email</p></a>
                    </div>
                    <div className='birth-date-div'>
                        <span className='birth-date-span'>Date de naissance</span>
                        <div className='birth-div-child'>
                            <strong>
                                <p className='birth-div-child-text'>Cette information ne sera pas affiché publiquement. Confirmez votre<br/>
                                    âge, même si ce compte est poue une entreprise, un animal de <br/>
                                    compagnie ou autre chose
                                </p>
                            </strong>
                        </div>
                    </div>
                    <div className='date-input-div'>
                        <input type="date" className='first-input' />
                        <input type="number" />
                        <input type="number" />
                                        </div>
                    <div className='Next-button-div'>
                        <button> <span className='btn-span'>Suivant</span>  </button>
                    </div>
                </div>
        </div>
    )
}

export default Login