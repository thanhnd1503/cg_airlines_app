import React, {useState} from 'react'
import {Link, Route, Switch} from 'react-router-dom';

// Imported Icons
import {SiConsul} from 'react-icons/si'

import {CgMenuGridO} from 'react-icons/cg'

//Imported Images ===>
import Logo from '../../../asset/img/logo.png'
import DashBoard from "../../DashBoard";

const Navbar = () => {
    //code statement toggle the navbar in and out.
    const [active, setActive] = useState('navBarMenu')
    const showNavBar = () => {
        setActive('navBarMenu showNavBar')
    }
    const removeNavBar = () => {
        setActive('navBarMenu')
    }

    //code statement to add a background color to the header.
    const [transparent, setTransparent] = useState('navBarTwo')
    const addBg = () => {
        if (window.scrollY >= 10) {
            setTransparent('navBarTwo activeHeader')
        } else {
            setTransparent('navBarTwo')
        }
    }
    window.addEventListener('scroll', addBg)


    return (<div className='navBar flex'>
            <div className="navBarOne flex">
                <div></div>
                <div className='atb '>
                    <span> Sign In</span>
                    <span> Register</span>
                </div>
            </div>

            <div className={transparent}>
                <div className="logoDiv">
                </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li  className="listItem">
                            <Link to="/">Home</Link>
                        </li>
                        <li onClick={removeNavBar} className="listItem">About</li>
                        <li onClick={removeNavBar} className="listItem">Offers</li>
                        <li onClick={removeNavBar} className="listItem">Seats</li>
                        <li onClick={removeNavBar} className="listItem">Destinations</li>
                    </ul>

                    <button onClick={removeNavBar} className='btn btnOne flex'>
                        Contact
                    </button>
                </div>

                <button className='btnTwo btn'>
                    Contact
                </button>

                <div onClick={showNavBar} className="toggleIcon">
                    <CgMenuGridO className='icon'/>
                </div>
            </div>


        </div>
    )
}

export default Navbar