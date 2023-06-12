import React, {useEffect} from 'react'

// Imported icons ==========>
import {TiSocialFacebook} from 'react-icons/ti'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'

//Imported Images ===>
import Logo from '../../../asset/img/logo.png'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 
  return (
    <div className='footer'>
      <div className="sectionContainer container grid">
        <div data-aos="fade-up" data-aos-duration="2500" className="gridOne grid">
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

        <div data-aos="fade-up" data-aos-duration="2500" className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="src/component/common/Footer/Footer#">Home</a>
          </li>
          <li>
            <a href="src/component/common/Footer/Footer#">Explore</a>
          </li>
          <li>
            <a href="src/component/common/Footer/Footer#">Travel</a>
          </li>
          <li>
            <a href="src/component/common/Footer/Footer#">Flight Status</a>
          </li>
          <li>
            <a href="src/component/common/Footer/Footer#">Check-In</a>
          </li>
          <li>
            <a href="src/component/common/Footer/Footer#">Manage your booking</a>
          </li>
          </div>

          <div data-aos="fade-up" data-aos-duration="2500" className="footerLinks">
            <span className="linkTitle">Quick Guide</span>
            <li>
              <a href="src/component/common/Footer/Footer#">FAQ</a>
            </li>
            <li>
              <a href="src/component/common/Footer/Footer#">How to</a>
            </li>
            <li>
              <a href="src/component/common/Footer/Footer#">Features</a>
            </li>
            <li>
              <a href="src/component/common/Footer/Footer#">Baggage</a>
            </li>
            <li>
              <a href="src/component/common/Footer/Footer#">Route Map</a>
            </li>
            <li>
              <a href="src/component/common/Footer/Footer#">Our communities</a>
            </li>
          </div>

          <div data-aos="fade-up" data-aos-duration="2500" className="footerLinks">
            <span className="linkTitle">Queries</span>
            <li>
              <a href="src/component/common/Footer/Footer#">Chauffuer</a>
            </li>
            <li>
              <a href="src/component/common/Footer/Footer#">Our partners</a>
            </li>
            <li>
              <a href="src/component/common/Footer/Footer#">Destination</a>
            </li>
            <li>
              <a href="src/component/common/Footer/Footer#">Careers</a>
            </li>
            <li>
              <a href="src/component/common/Footer/Footer#">Transportation</a>
            </li>
            <li>
              <a href="src/component/common/Footer/Footer#">Programme Rules</a>
            </li>
          </div>
      </div>

      <div className="copyrightDiv flex">
        <p>Courtesy Design | Developed by owl group </p>

      </div>
      
    </div>
  )
}

export default Footer