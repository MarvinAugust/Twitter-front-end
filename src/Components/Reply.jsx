import React, { useContext } from 'react'
import '../reactions.css'
import close from '../images/closer.png'
import { BiHomeCircle, BiPoll } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi";
import { FiSearch, FiShare, FiMoreHorizontal } from "react-icons/fi";
import { GoComment } from "react-icons/go";
import { AiOutlineRetweet, AiOutlinePicture } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineGif, MdOutlineVerified, MdVerified } from "react-icons/md";
import { VscSmiley, VscVerified } from "react-icons/vsc";
import { BsCalendar4, BsStars } from "react-icons/bs";
import { TiChartAreaOutline, TiLocationOutline } from "react-icons/ti";
import fire from '../images/525821.jpg';
import { DisplayContext } from './Feed';
const Reply = (props) => {
    const {repPop,setRepPop} = useContext(DisplayContext)
    return (
        <div className='comment-reply-main' style={{visibility:repPop}}>
        <div className='reply-div' style={{ visibility: repPop }}>
            <div className='close-window' onClick={() => {
                setRepPop('hidden')

            }}>
                <img src={close} style={{ color: 'black', borderRadius: "20px" }} width="30px" />
            </div>
            <img src={props.image} style={{ width: "60px", height: '60px', borderRadius: '35px', marginTop: '55px', marginLeft: "15px" }} />
            <div className='content-div'>
                <p className='name-p'>{props.name}</p>
                <p className='body-p'>{props.text}</p>
            </div>
            <div className='post-tweet reply-to-comment'>
                <div className="post-tweet-child1">
                    <img src={fire} width="60px" height="60px" style={{ borderRadius: '30px' }} />
                    <textarea name="tweet" cols="80" className="textArea"> </textarea>
                    {/* <span className='visible'>{text}</span> */}
                </div>
                <div className="post-tweet-child2">
                    <div className='icon-container'>
                        <AiOutlinePicture className='tweet-bar-icon' />
                        < MdOutlineGif className='tweet-bar-icon gif-icon' />
                        < BiPoll className='tweet-bar-icon' />
                        < VscSmiley className='tweet-bar-icon' />
                        < BsCalendar4 className='tweet-bar-icon calendar-icon' />
                        < TiLocationOutline className='tweet-bar-icon location-icon' />
                    </div>
                    <button>Réponse</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Reply