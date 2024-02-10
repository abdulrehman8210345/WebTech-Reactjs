import React from 'react'
import image from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillFacebook,AiFillInstagram,AiFillYoutube} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home'id='home'>
        <main>
        <h1> WebTech...</h1>
        <p>Become a web Developer by making websites</p>
        </main>
    </div>
    <div className="home2">
      <img src={image} alt="webtech" />
      <div>
        <p>
        A front-end developer builds the front-end portion of websites and web applications—the part users see and interact with. A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app.
        </p>
      </div>
    </div>
    <div className="home3" id='about'>
     <div>
      <h1>About us</h1>
      <p>At Webtech Web Development, we're a passionate team of front-end web developers dedicated to crafting stunning and user-friendly online experiences. With a keen eye for design and an arsenal of cutting-edge tools and technologies, we transform visions into responsive and visually captivating websites. Our mission is to elevate your digital presence, one pixel at a time. Let's bring your web dreams to life.
</p>
     </div>
    </div>
    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay:"1s",
            }}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{
            animationDelay:"2s",
            }}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
          <div style={{
            animationDelay:"3s",
            }}>
            <AiFillFacebook/>
            <p>Facebook</p>
          </div>
          <div style={{
            animationDelay:"4s",
            }}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
        </article>
      </div>
      
    </div>
    </>
  )
}

export default Home

