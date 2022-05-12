import React from 'react'
import '../feed.css';
import { FaChevronUp, FaCommentsDollar, FaHome, FaTwitter } from "react-icons/fa";
import { BiHomeCircle } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import fire from '../images/525821.jpg';
import dragunov from '../images/dragunov.jpg'
import tk2 from '../images/tk2.jpg'
import tk3 from '../images/tk3.jpg'
import tk4 from '../images/tk4.png'
import tk5 from '../images/tk5.jpg'
import tk6 from '../images/tk6.jpg'
import tk7 from '../images/tk7.jpg'
import tk8 from '../images/tk8.jpg'

export const Feed = () => {
  const posts = [
    {
      _id: 1,
      usename: 'Dragunov',
      image: dragunov,
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat earum autem aut sit ex est, ad distinctio pariatur minima sapiente illo ipsum accusamus voluptas voluptates nihil harum deleniti labore exercitationem aliquam nesciunt aspernatur expedita non. Illo vero incidunt tenetur harum exercitationem dolorum eius amet cum id, porro impedit maiores nulla.",
    },
    {
      _id: 2,
      username: 'Matrix',
      image: tk2,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nulla!",
    },
    {
      _id: 3,
      username: 'Steve',
      image: tk3,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officiis impedit aperiam reprehenderit, ut libero?",
    },
    {
      _id: 4,
      username: 'Sara',
      image: tk4,
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sit quos.",
    },
    {
      _id: 5,
      username: 'Nina',
      image: tk5,
      body: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      _id: 6,
      username: 'Howarang',
      image: tk6,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      _id: 7,
      username: 'Brayan',
      image: tk7,
      body: "Lorem ipsum dolor sit.",
    },
    {
      _id: 8,
      username: 'Kazuya',
      image: tk8,
      body: " Lorem ipsum dolor sit amet consectetur.",
    },
  ]
  return (
    <div className='feed-main-div'>
      <section className='first-section'>
        <div className="accessibilty-bar">
          <div>
            <FaTwitter className='icons' style={{ color: 'rgb(42, 182, 237)' }} />
          </div>

          <div style={{ display: "flex" }}>
            <BiHomeCircle className='icons' />
            <span style={{ paddingTop: "22px", paddingLeft: '10px', cursor: 'pointer' }}>Accueil</span>
          </div>
          <div style={{ display: "flex" }}>
            <HiOutlineUser className='icons' />
            <span style={{ paddingTop: "22px", paddingLeft: '10px', cursor: 'pointer' }}>Profil</span>
          </div>
          <button className='section1-btn'>Tweeter</button>
        </div>
      </section>

      <section className='second-section'>
        <div className='post-tweet'>
          <div className='post-tweet-child'>
            <span className='acc-spn'>Accueil</span>
            <FaChevronUp />
          </div>

          <div className="post-tweet-child1">
            <img src={fire} width="50px" height="50px" style={{ borderRadius: '25px' }} />
            <span>Quoi de neuf ?</span>
          </div>
          <div className="post-tweet-child2">
            <div>🌁 🔲 🎭 🎫 🙂 🎡</div>
            <button>Tweeter</button>
          </div>
        </div>

        <div className='other-tweets'>
          {
            posts.map((data, index) => {
              // console.log(data)
              return (
                <div className='tweet-style'>
                  <div style={{ display: 'flex' }}>
                    <img src={data.image} alt="character image" style={{ width: "50px", height: '50px', borderRadius: '25px', marginTop: '10px', marginLeft: "15px" }} />
                    <span className='span-style'>{data.username}</span>
                  </div>
                  <p className='style-paragraph'>{data.body}</p>
                </div>
              )
            })
          }
        </div>
      </section>

      <section className='third-section'>
        <div className='search-bar'>
          <FiSearch />
          <input type="search" placeholder='Recherche Twitter' />
        </div>
        
        <div className='recomanded-div'>
          <span>elemet</span>
          <span>elemet</span>
          <span>elemet</span>
          <span>elemet</span>
          <span>elemet</span>
        </div>
      </section>
    </div>
  )
}
