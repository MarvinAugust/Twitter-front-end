import React from 'react';
import { useState, useEffect } from 'react';
import { FaArrowLeft} from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";

function Profile() {
    const [tweets, setTweets] = useState([]);
    useEffect(() =>{
        setTweets([
            {
                text: 'first tweet'
            },
            {
                text: 'second tweet'
            }

        ]) 
        
    },[])
  return (
   <section>
       <section className='main-section'>
            <nav className='profile-name'>
                <FaArrowLeft className='icon-arrow'/>
                <div className='div-1'>
                    <h5>tzi</h5> 
                    <p>1 Tweets</p> 
                </div>
            </nav>               
            
            <div className='main-div'>
                <div className='main-child'>
                </div>
                <div className='profile-pic'>
                    <span>T</span>
                </div>
                <div className='btn-div'>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>Edit profile</span></button>  

                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content ">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Profile</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="recipient-name" className="col-form-label">Name</label>
                                        <input type="text" className="form-control" id="recipient-name"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="message-text" className="col-form-label">Bio</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>
                                </form>
                                <form>
                                    <div className="mb-3">
                                        <label for="location" className="col-form-label">Location</label>
                                        <input type="text" className="form-control" id="recipient-name"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="message-text" className="col-form-label">Website</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>
                                </form>
                             
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Send message</button>
                            </div>
                        </div>
                    </div>
                    </div>





                </div>
                <div className='div-body'>
                    <h5>tzi</h5>
                    <p>@toto</p>
                    <p>Hello Twitter</p>   
                </div>
                <div className='div-calender'>
                    <BsCalendar3/><span>joined May 2022</span> 
                </div>
                <div className="div-followcount">
                    <span>1 Following</span><span>0 Followers</span>
                </div>
                <div className='history-div'>
                    <div type="div" style={{width:'10%'}} className="btn btn-light btn-sm tweets">Tweets</div>
                    <div type="div" style={{width:'11%'}} className="btn btn-light btn-sm tweets2">Tweets & replies</div>
                    <div type="div" style={{width:'10%'}} className="btn btn-light btn-sm media">Media</div>
                    <div type="div" style={{width:'9%'}} className="btn btn-light btn-sm likes">Likes</div>  
                </div>
                <div className="div-follow">
                    <h5>Who to follow</h5>
                </div>
            </div>
       </section>
   </section>
  
  );
}
export default Profile;