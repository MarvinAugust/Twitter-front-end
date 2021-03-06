import React, { useContext } from 'react'
import { useState,createContext } from 'react'
import { FaTwitter, FaWindowClose,FaHashtag } from "react-icons/fa";
import close from '../images/closer.png'
import { Link,Routes,Route } from 'react-router-dom';
import InsertPass from './InsertPass';
import Password from './Password';
import { Feed } from './Feed';
import Reply from './Reply';
import { NewContext } from '../App';
export const VisibilityContext = createContext()
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
    const [fourthPopUp,setFourth] = useState('hidden');
    const [connect,setConnect] = useState('hidden')
    const [replyPop,setReply] = useState('hidden')
    const [isOk, setOk] = useState()

    const [errMessage,setErrMsg] = useState('')
    const {mainVal,explore,setExplorer} = useContext(NewContext)
    console.log(mainVal)
    let handler = mainVal
    const shadow = ()=>{
        if(popoUp === 'visible'){
            setFilter('blur(4px)')
        }
    }

    const registerName = (e)=>{
        setName(e.target.value)
    }

    const registerNumber =(e)=>{
        setNumber(e.target.value)
    }
    const registerBirth=(e)=>{
        setBirth(e.target.value)
    }
    const registerMonth=(e)=>{
        setBirthMonth(e.target.value)
    }
    const registerDay=(e)=>{
        setDay(e.target.value)
    }
    const formValue =(e)=>{
        setForm(e.target.value)
    }
    

    const sendContext = {
        thirdPopUp:thirdPopUp,
        formValue:form,
        setThird:setThird,
        setFilter:setFilter,
        fourthPopUp:fourthPopUp,
        setFourth:setFourth,
        setAccount:setAccount,
        replyPop:replyPop,
        setReply:setReply
    }


    const poster = (e) =>{
        e.preventDefault();
        console.log(birth)
        const myHeaders = new Headers({"Content-type":"application/json"})
            fetch('http://localhost:3002/signup',{
                method:'POST',
                headers:myHeaders,
                body:JSON.stringify({
                    name:name,
                    contactNumber:number,
                    birthDate:birth +"/"+birthMonth+"/"+day
                })
            }).then(result=>result.json())
                .then(data=>console.log(data))

                setFourth('visible')
                setPopUp('hidden')

}
    const findUser = (e)=>{
        e.preventDefault()
        const myHeaders = new Headers({"Content-type":"application/json"})
        fetch('http://localhost:3002/isUser', {
            method:'POST',
            headers:myHeaders,
            body:JSON.stringify({
                identity:form
            })
        }).then(result=>result.json())
            .then(json=>{
                console.log(json.exist)
                if(json.exist === true){
                    setThird('visible')
                    setAccount('hidden')
                    setErrMsg('');
                }else{
                    setThird('hidden')
                    setAccount('visible')
                    setErrMsg('identifiant unconnu')
                }
        })
   
           
          
           
    } 
    const getInfo = ()=>{
        if(isOk === true){
            setThird('visible')
            setAccount('hidden')
            setErrMsg('')
        }else{
            setThird('hidden')
            setAccount('visible')
            setErrMsg('Identifiant unconnu')
        }
    }
    return (
        <div className='main-div'>
            <section className='twitter-image' style={{filter:filter}}>
            </section>
            <section style={{filter:filter}}>
                <div>
                    <FaTwitter className='twitter-icon' />
                </div>
                <div className='intro-div'>
                    <span className='intro-span'>
                        ??a se passe<br /> maintenant
                    </span>
                    <div className='intro-div-child'>

                        <span>
                            Rejoinez Twitter d??s aujourd'hui
                        </span>
                    </div>
                    <div className='explorer-btn' onClick={()=>{
                        setConnect('hidden');
                        setExplorer(true);
                    }}>
                        <FaHashtag className='hashtag' />
                        <span>Explorer</span>
                    </div>
                    <div className='register-div' onClick={()=>{
                        setPopUp('visible')
                       
                        setFilter('blur(4px)')
                    
                    }}>
                        <span>s'inscrire avec un num??ro t??l??pho...</span>
                    </div>
                    <div className='policy-div'>
                        <p>
                            En vous inscrivant, vous acceptez les <span style={{ color: 'rgb(42, 182, 237)' }}>Conditions d'Utilisation</span><br />
                            et la <span style={{ color: 'rgb(42, 182, 237)' }}>Politique de Confdentilalit??</span>, incluant l'<span style={{ color: 'rgb(42, 182, 237)' }}>Utilisation de <br />Cookies</span>
                        </p>
                    </div>
                    <div className='have-account'>
                        <span className="check-account">Vous avez d??ja un compte ?</span>
                    </div>
                    <div className='connect-to-account'>
                        <button onClick={()=>{
                            setAccount('visible')
                            setFilter('blur(4px)')
                        }}>se connecter</button>
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
                        <span className="popUp-span">Cr??er votre compte</span>

                    </div>
                        <input type="text" placeholder='lionel messi' onChange={registerName}/>
                    </div>
                    <div >
                        <input type="number" placeholder='0123456789' onChange={registerNumber}/>
                        <a><p className='phNumber-paragraph' style={{color:'rgb(42, 182, 237)'}}>Utiliser un email</p></a>
                    </div>
                    <div className='birth-date-div'>
                        <span className='birth-date-span'>Date de naissance</span>
                        <div className='birth-div-child'>
                            <strong>
                                <p className='birth-div-child-text'>Cette information ne sera pas affich?? publiquement. Confirmez votre<br/>
                                    ??ge, m??me si ce compte est poue une entreprise, un animal de <br/>
                                    compagnie ou autre chose
                                </p>
                            </strong>
                        </div>
                    </div>
                    <div className='date-input-div'>
                        <input type="number" className='first-input' onChange={registerBirth}/>
                        <input type="number" onChange={registerMonth}/>
                        <input type="number" onChange={registerDay}/>
                    </div>
                    <div className='Next-button-div'>
                        <button type='submit' onClick={poster}> <span className='btn-span'>Suivant</span>  </button>
                    </div>
                        
                </div>
                <div className='popUp-div' style={{visibility:account}}>
                    <div  className='close-window' onClick={()=>{
                        setAccount('hidden')
                        setFilter('')
                      }}>
                        <img src={close} style={{backgroundColor:'white',color:'black'}} width="30px"/>
                    </div>
                    <FaTwitter style={{color:'rgb(42, 182, 237)', fontSize:'40px'}}/>
                    <div className='account-div'>
                      <span>Connectez-vous ??<br/>Twitter</span>
                      <span className='Error-message-span'>{errMessage}</span>
                      <div className='account-child'>
                          <form onChange={formValue}>
                              <input type="text" className='account-input' style={{border:inputBorder}} placeholder='Num??ro de t??l??phone,address emi...' onClick={()=>setBorder('2px solid rgb(42, 182, 237)')}/>
                          </form>
                      </div>
                      <div className='btn-div'>
                         <button type="submit" className='btt next-btn' onClick={findUser}>  Suivant</button>
                          <div>
                          <button className='btt forgotten-password-btn'>Mot de passe oubli?? ?</button>
                          </div>
                      </div>
                      <p className='create-account-route'>Vous n'avez pas de compte ? <a href="" style={{color:"rgb(42, 182, 237)"}} onClick={(e)=>{
                          e.preventDefault()
                          setPopUp('visible')
                          setAccount('hidden')
                      }}>Inscrivez-vous</a></p>
                    </div>
                </div>
                {/* <Routes>
                    <Route to='/register' element={<InsertPass/>}/>
                </Routes> */}
                <VisibilityContext.Provider value={sendContext}>
                    <InsertPass visible={thirdPopUp}/>
                    <Password/>
                </VisibilityContext.Provider>
        </div>
    )
}

export default Login