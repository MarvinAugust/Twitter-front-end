import React from 'react'
import { FaTwitter, FaRegComment } from "react-icons/fa";
import { AiOutlineUser, AiOutlineRetweet } from 'react-icons/ai';
import { RiQuillPenLine } from 'react-icons/ri';
import Login from './Login';
import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'








const Homepage = () => {
    const [tweets, setTweets] = useState([]);
    useEffect(() => {
        setTweets([
            {
                text: ''
            },
            {
                text: ''
            }
        ])
    }, [])
    return (
        <>
            <div class="sidenav">
                <button><FaTwitter className='twitter-icon icon-home' /></button>
                <button><AiOutlineUser className='AiOutlineUser-icon nav-icon' /></button>
                <button><RiQuillPenLine className="RiQuillPenLine-icon nav-icon" /></button>
            </div>
            <header>
                <div className='tweet'>
                    <h5>Acceuil</h5>
                    <div>
                        <input type="text" placeholder='Quoi de neuf ?'></input>
                    </div>
                </div>
                <button>Tweeter</button>
            </header>

            <main>
                <div className='tweets'>
                    <h3>Username</h3>
                    <p className='tweet'>Tweet</p>
                    <div className='buttons'>
                        <button><FaRegComment className="FaRegComment-icon tweet-icon" /></button>
                        <p>0</p>
                        <button id="modal"><AiOutlineRetweet className="AiOutlineRetweet-icon tweet-icon" /></button>
                        <p>0</p>
                    </div>
                </div>
            </main>


            <nav class="navbar fixed-bottom navbar-dark">
                <div class="container-fluid">
                    <div className='connection'>
                        <h4>Ne manquez pas ce qui se passe.</h4>
                        <p>Les utilisateurs de Twitter sont les premiers à savoir.</p>
                    </div>
                    <button className='login'><Link to='/login'>Se connecter</Link></button>
                    <button className='signup'>S'inscrire</button>
                </div>
            </nav>
            <Routes>
                <Route path='/login' element={<Login />} />
            </Routes>




        </>
    )
}

export default Homepage