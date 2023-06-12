import React, {useEffect, useState} from "react";


// Imported Icons
import {SiConsul} from "react-icons/si";
import {BsPhoneVibrate} from "react-icons/bs";
import {AiOutlineGlobal} from "react-icons/ai";
import {CgMenuGridO} from "react-icons/cg";
import {Link, useNavigate} from "react-router-dom";

//Imported Images ===>
import Logo from "../../asset/img/logo.png";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../api/authAPI";

const Navbar = () => {
    const isLogin = useSelector((state) => state.auth?.login?.currentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(isLogin);

    const [status, setStatus] = useState(false);

    useEffect(() => {
        if (isLogin) {
            setStatus(true);
            return;
        }
        setStatus(false);
    }, [isLogin]);

    const handelLogout = async (event) => {
        await logout(dispatch, navigate);
    }


    //code statement toggle the navbar in and out.
    const [active, setActive] = useState("navBarMenu");
    const showNavBar = () => {
        setActive("navBarMenu showNavBar");
    };
    const removeNavBar = () => {
        setActive("navBarMenu");
    };

    //code statement to add a background color to the header.
    const [transparent, setTransparent] = useState("navBarTwo");
    const addBg = () => {
        if (window.scrollY >= 10) {
            setTransparent("navBarTwo activeHeader");
        } else {
            setTransparent("navBarTwo");
        }
    };
    window.addEventListener("scroll", addBg);

    return (
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                    <SiConsul className="icon"/>
                </div>
                <div className="atb flex">
                    <li className="flex">
                        <BsPhoneVibrate className="icon"/> Support
                    </li>
                    <li className="flex">
                        <AiOutlineGlobal className="icon"/> Languages
                    </li>
                </div>
                {status ? (

                    <div className="none flex">
            <span style={{marginRight: "10px"}}>
              {" "}
                <Link to="#" onClick={handelLogout}>Logout</Link>
            </span>
                        <span>
              {" "}
                            <Link to="/register">Profile</Link>
            </span>
                    </div>
                ) : (
                    <div className="none flex">
            <span style={{marginRight: "10px"}}>
              {" "}
                <Link to="/login">Login</Link>
            </span>
                        <span>
              {" "}
                            <Link to="/register">SignUp</Link>
            </span>
                    </div>
                )}
            </div>

            <div className={transparent}>
                <div className="logoDiv">
                    <img src={Logo} className="Logo"/>
                </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className="listItem">
                            Home
                        </li>
                        <li onClick={removeNavBar} className="listItem">
                            About
                        </li>
                        <li onClick={removeNavBar} className="listItem">
                            Offers
                        </li>
                        <li onClick={removeNavBar} className="listItem">
                            Seats
                        </li>
                        <li onClick={removeNavBar} className="listItem">
                            Destinations
                        </li>
                    </ul>

                    <button onClick={removeNavBar} className="btn btnOne flex">
                        Contact
                    </button>
                </div>

                <button className="btnTwo btn">Contact</button>

                <div onClick={showNavBar} className="toggleIcon">
                    <CgMenuGridO className="icon"/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
