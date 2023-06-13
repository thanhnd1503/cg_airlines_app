import React, {useEffect} from 'react'

// Imported icons ==========>
import {TiSocialFacebook} from 'react-icons/ti'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'

//Imported Images ===>
import Logo from '../../asset/img/logo.png'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  return (
    <div className='footer'>
      <div className="sectionContainer container grid">
        <div  className="gridOne grid">
          <div className="logoDiv">
            <img src={Logo} className='Logo'/>
          </div>
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="socialIcons flex">
            <TiSocialFacebook className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <FaPinterestP className='icon'/>
          </div>
        </div>

        <div  className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Flight Status</a>
          </li>
          <li>
            <a href="#">Check-In</a>
          </li>
          <li>
            <a href="#">Manage your booking</a>
          </li>
          </div>

          <div  className="footerLinks">
            <span className="linkTitle">Quick Guide</span>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">How to</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Baggage</a>
            </li>
            <li>
              <a href="#">Route Map</a>
            </li>
            <li>
              <a href="#">Our communities</a>
            </li>
          </div>

          <div  className="footerLinks">
            <span className="linkTitle">Queries</span>
            <li>
              <a href="#">Chauffuer</a>
            </li>
            <li>
              <a href="#">Our partners</a>
            </li>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Transportation</a>
            </li>
            <li>
              <a href="#">Programme Rules</a>
            </li>
          </div>
      </div>

      <div className="copyrightDiv flex">
        <p>Courtesy Design | Developed by Binh </p>

      </div>
      
    </div>
  )
}

export default Footer