import React from 'react'
import '../feed.css';
import { FaChevronUp,FaHome,FaTwitter} from "react-icons/fa";
import fire from '../images/525821.jpg';
export const Feed = () => {
  return (
    <div className='feed-main-div'>
        <section className='first-section'>
          <div className="accessibilty-bar">
          <FaTwitter/>
          <FaHome/>
          </div>
        </section>
        <section className='second-section'>
            <div className='post-tweet'>
                <div className='post-tweet-child'>
                    <span className='acc-spn'>Accueil</span>
                    <FaChevronUp/>
                </div>

                <div className="post-tweet-child1">
                    <img src={fire} width="50px" height="50px" style={{borderRadius:'25px'}}/>
                    <span>Quoi de neuf ?</span>
                </div>
                <div className="post-tweet-child2">
                  <div>🌁 🔲 🎭 🎫 🙂 🎡</div>
                  <button>Tweeter</button>
                </div>
            </div>
        </section>
        <section className='third-section'>what</section>

    </div>
  )
}
