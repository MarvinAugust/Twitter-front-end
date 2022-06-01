import React from 'react'
import { useContext } from 'react';
import { TiChartAreaOutline, TiLocationOutline,TiPencil } from "react-icons/ti";
import { AiOutlineRetweet, AiOutlinePicture } from "react-icons/ai";
import { DisplayContext } from './Feed';
import '../reactions.css'
import { Feed } from './Feed';
const Retweet = () => {
    const {retweet,setRetweet} = useContext(DisplayContext)
    return (
        <div> 
            <div style={{visibility:retweet }} className='retweet-pop' onMouseLeave={()=>{
                setRetweet('hidden')
            }}>
                <div style={{display:'flex',paddingBottom:'25px',marginTop:'45px',paddingLeft:'15px'}}><AiOutlineRetweet style={{fontSize:'25px',paddingTop:'10px',paddingRight:'10px', color: '#666464'}}/> <span style={{fontWeight:'lighter',fontSize:'18px',marginTop:'10px'}}>Retweet</span></div>
                <div style={{display:'flex',paddingBottom:'10px',paddingLeft:'15px'}}> <TiPencil style={{fontSize:"25px",paddingRight:"10px", color: '#666464'}}/><span style={{fontWeight:'lighter',fontSize:'18px'}}>Quote Tweet</span></div>
            </div>
        </div>
    )
}

export default Retweet;