import React, { useState,createContext, useContext, useEffect } from 'react'
import '../feed.css';
import { FaChevronUp, FaCommentsDollar, FaHome, FaTwitter } from "react-icons/fa";
import { BiHomeCircle, BiPoll } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi";
import { FiSearch, FiShare, FiMoreHorizontal } from "react-icons/fi";
import { GoComment } from "react-icons/go";
import { AiOutlineRetweet, AiOutlinePicture } from "react-icons/ai";
import { IoIosHeartEmpty,IoIosLink,IoIosHeart } from "react-icons/io";
import { MdOutlineGif, MdOutlineVerified, MdVerified,MdOutlineEmail,MdOutlineBookmarkAdd } from "react-icons/md";
import { VscSmiley, VscVerified } from "react-icons/vsc";
import { BsCalendar4, BsStars } from "react-icons/bs";
import { TiChartAreaOutline, TiLocationOutline,TiPencil } from "react-icons/ti";
import fire from '../images/525821.jpg';
import dragunov from '../images/dragunov.jpg'
import tk2 from '../images/tk2.jpg'
import tk3 from '../images/tk3.jpg'
import tk4 from '../images/tk4.png'
import tk5 from '../images/tk5.jpg'
import tk6 from '../images/tk6.jpg'
import tk7 from '../images/tk7.jpg'
import tk8 from '../images/tk8.jpg'
import Reply from './Reply';
import Retweet from './Retweet';
import ShareBox from './ShareBox';
import { NewContext } from '../App';
// import { VisibilityContext } from './Login';
export const DisplayContext = createContext()
export const Feed = () => {
  const [filled,setFilled] = useState('hidden')
  const [text, setText] = useState('')
  const [propsName,setName] = useState('')
  const [body,setBody] = useState('');
  const [pic,setPic] = useState('')
  const [scroll,setScroll] = useState('')
  const [retweet,setRetweet] = useState('hidden')
  let   [counter,setCounter] = useState(0);
  const [repPop,setRepPop] = useState('hidden');
  const [share,setShare] = useState('hidden');
  const [tweet,setTweet] = useState('');
  const [newValue,setNewVal] = useState('');
  const [names,setNames] = useState([]);
  const [image,setImage] = useState('');
  const [postId,setPostId] = useState('');
  const [explorVU,setExVU] = useState('visible');
  console.log(newValue)
  const {mainVal,explore,setExplore} = useContext(NewContext)
  console.log(mainVal)
  let handler = [mainVal];

  localStorage.setItem('postIdT', JSON.stringify(postId));

  const changer=(e)=>{
    setTweet(e.target.value)
    console.log(tweet)
  }
  const sendDisplay = {
    share:share,
    setShare:setShare,
    repPop:repPop,
    setRepPop:setRepPop,
    setScroll:setScroll,
    retweet:retweet,
    setRetweet:setRetweet,
    setNewVal:setNewVal
  }
  // console.log(mainVal)
  const [posts, setPosts] = useState([
    {
      _id: 1,
      username: 'Dragunov',
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
      username: 'SteveTheBoxer',
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
  ])

  useEffect(()=>{
  //  localStorage.setItem('names', JSON.stringify(handler))
   const names1 = JSON.parse(localStorage.getItem('names'))
   if(names1){
     setNames(names1)
   }
   console.log(names1,'I AM NAMES ')
    posts.map((user)=>{
      // console.log(user)
      if(names1 === user.username){
        setImage(user.image)
        console.log(image)
      }
    })
    
  },[])

  const setLike = (index) => {
    const list = [...posts]
    list[index].liked = !list[index].liked 
    setPosts(list)
  } 

  const Tweet = (e)=>{
    e.preventDefault();
    const myHeaders = new Headers({"Content-type":"application/json"})
    fetch('http://localhost:3002/tweeted', {
      method:'POST',
      headers:myHeaders,
      body:JSON.stringify({
        body:tweet
      })
    }).then(response=>response.json())
        .then(json=>{
          console.log(json.postIdT)
          setPostId(json.postIdT)
        })
  }

  return (
    <div className='feed-main-div' >
     
      <section className='first-section'>
        <div className="accessibilty-bar">
          <div>
            <FaTwitter className='icons' style={{ color: 'rgb(42, 182, 237)' }} />
          </div>

          <div style={{ display: "flex" }}>
            <BiHomeCircle className='icons' />
            <span style={{ paddingTop: "22px", paddingLeft: '10px', cursor:'pointer', fontSize: '23px' }}>Accueil</span>
          </div>
          <div style={{ display: "flex" }}>
            <HiOutlineUser className='icons' />
            <span style={{ paddingTop: "22px", paddingLeft: '10px', cursor:'pointer', fontSize: '23px' }}>Profil</span>
          </div>
          <button className='section1-btn'>Tweeter</button>
        </div>
      </section>

      <section className='second-section'>
        <nav className='post-tweet-child'>
          <span className='acc-spn'>Accueil</span>
          <BsStars style={{ fontSize: '23px' }} />
        </nav>
        <div className='post-tweet'>
          <div className="post-tweet-child1">
            <img src={image} width="60px" height="60px" style={{ borderRadius: '30px' }} />
            <textarea name="tweet" cols="80" className="textArea" placeholder='Quoi de neuf' onChange={changer}> </textarea>
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
            <button onClick={Tweet}>Tweeter</button>
          </div>
        </div>

        <div className='other-tweets'>
          {
            posts.map((data, index) => {
              const name = data.username[0];
              const converted = name.toLowerCase()
              const random = Math.ceil(Math.random() * 100)
              console.log(random)
              return (
                <div className='tweet-style' key={data._id} onClick={()=>{setCounter(2)}}>
                  <div style={{ display: 'flex' }}>
                    <img src={data.image} alt="character image" style={{ width: "60px", height: '60px', borderRadius: '35px', marginTop: '15px', marginLeft: "15px" }} />
                    <span className='span-style'>{data.username}</span>
                    <MdVerified style={{ marginTop: '14px', fontSize: '23px', marginLeft: "3px", color: 'rgb(33, 148, 231)' }} />
                    <p style={{ marginLeft: '7px' }}>@{converted + data.username.slice(1) + random}</p>
                    <FiMoreHorizontal className='more-icon' />
                  </div>
                  <p className='style-paragraph'>{data.body}</p>
                  <div className='user-reaction'>
                    <GoComment className='page-icons comment-icon' onClick={()=>{
                      setRepPop('visible');
                      setBody(data.body);
                      setName(data.username);
                      setPic(data.image)
                      setScroll('hidden')
                    }}/>
                    < AiOutlineRetweet className='page-icons retweet-icon' onClick={()=>{
                      setRetweet('visible')
                    }}/>
                    { data.liked ? 
                       < IoIosHeart className='page-icons like-icon' onClick={() => setLike(index)}/>
                      :< IoIosHeartEmpty className='page-icons like-icon' onClick={() => setLike(index)}/>
                    }

                    < FiShare className='page-icons share-icon' onClick={()=>{
                      setShare('visible')
                    }}/>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>

      <section className='third-section'>
        <div className='search-bar'>
          <FiSearch className='search-icon' />
          <input type="search" placeholder='Recherche Twitter' />
        </div>

        <div className='recomanded-div'>
          <h3 style={{ marginLeft: "-150px" }}>Trends for you</h3>
          <div className='trend-div'>
            <p className='trend-subject'><small>Hip Hop</small></p>
            <FiMoreHorizontal className='trends-icon' />
            <p className='trend'>21-Savage</p>
            <p className='trend-subject'><small>21million tweets</small></p>
          </div>

          <div className='trend-div'>
            <p className='trend-subject'><small>Sports-Football</small></p>
            <FiMoreHorizontal className='trends-icon' />
            <p className='trend'>Lionel Messi</p>
            <p className='trend-subject'><small>1.3 million tweets</small></p>
          </div>

          <div className='trend-div'>
            <p className='trend-subject'><small>Comedy</small></p>
            <FiMoreHorizontal className='trends-icon' />
            <p className='trend'>Key & Peel</p>
            <p className='trend-subject'><small>332k tweets</small></p>
          </div>

          <div className='trend-div'>
            <p className='trend-subject'><small>Events-Entertainment</small></p>
            <FiMoreHorizontal className='trends-icon' />
            <p className='trend'>Gorillaz at stade de france</p>
            <p className='trend-subject'><small>3 million tweets</small></p>
          </div>

          <div className='trend-div'>
            <p className='trend-subject'><small>Cyber</small></p>
            <FiMoreHorizontal className='trends-icon' />
            <p className='trend'>Ransomeware Attacks</p>
            <p className='trend-subject'><small>22k tweets</small></p>
          </div>

        </div>
      </section>
      <DisplayContext.Provider value={sendDisplay}>
        
        <Reply name={propsName} text={body} image={pic}/>
        <Retweet/>
        <ShareBox/>
      </DisplayContext.Provider> 
     
    </div>
  )
}
