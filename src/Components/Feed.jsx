import React from 'react'
import '../feed.css';
import { FaChevronUp,FaCommentsDollar,FaHome,FaTwitter} from "react-icons/fa";
import fire from '../images/525821.jpg';
export const Feed = () => {
  const posts = [
   {
     _id:1,
      usename:'account owner name',
      image:'owner prfile pic',
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat earum autem aut sit ex est, ad distinctio pariatur minima sapiente illo ipsum accusamus voluptas voluptates nihil harum deleniti labore exercitationem aliquam nesciunt aspernatur expedita non. Illo vero incidunt tenetur harum exercitationem dolorum eius amet cum id, porro impedit maiores nulla.",
    },
   {
    _id:2,
      username:'account owner name 2',
      image:'owner prfile pic',
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nulla!",
    },
    {
    _id:3,
      username:'account owner name 3',
      image:'owner prfile pic',
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officiis impedit aperiam reprehenderit, ut libero?",
    },
   {
    _id:4,
      username:'account owner name 4',
      image:'owner prfile pic',
      body:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sit quos.",
    },
   {
    _id:5,
      username:'account owner name 5',
      image:'owner prfile pic',
      body: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      _id:6,
      username:'account owner name 6',
      image:'owner prfile pic',
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
   {
    _id:7,
      username:'account owner name 7',
      image:'owner prfile pic',
      body: "Lorem ipsum dolor sit.",
    },
   {
    _id:8,
      username:'account owner name 8',
      image:'owner prfile pic',
      body:" Lorem ipsum dolor sit amet consectetur.",
    },
  ]
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
            <div className='other-tweets'>
                {
                  posts.map((data,index)=>{
                    // console.log(data)
                    return(
                      <div >
                      <ul>
                        <li>{data.username}</li>
                      </ul>
                      </div>
                    )
                  })
                }
            </div>
        </section>
        <section className='third-section'>Third Section</section>

    </div>
  )
}
