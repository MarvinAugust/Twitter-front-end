import React, { useContext } from 'react'
import { IoIosLink } from "react-icons/io";
import { MdOutlineEmail, MdOutlineBookmarkAdd } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import { DisplayContext } from './Feed';

const ShareBox = () => {
    const{share,setShare} = useContext(DisplayContext);


    
    return (
        <div className='share-icons-main' style={{visibility:share}} onMouseLeave={()=>{
            setShare('hidden')
        }}>
            <div className='share-icons-div'>
                <div style={{display:'flex'}} className='icons-container'>
                    <MdOutlineEmail className='share-icons' />
                    <span style={{marginTop:'15px'}}>send via direct message</span>
                </div>
                <div style={{display:'flex'}} className='icons-container'>
                    <MdOutlineBookmarkAdd className='share-icons' />
                    <span style={{marginTop:'15px'}}>Bookmarks</span>
                </div>
                <div style={{display:'flex'}} className='icons-container'>
                    <IoIosLink className='share-icons' />
                    <span style={{marginTop:'15px'}}> Copy Link to Tweet</span>
                </div>
                <div style={{display:'flex'}} className='icons-container'>
                    <FiShare className='share-icons' />
                    <span style={{marginTop:'15px'}}>Share Tweet via...</span> 
                </div>
            </div>
        </div>
    )
}

export default ShareBox