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

    const roleDtoResponse = useSelector((state) => state.auth?.login?.currentUser?.userDtoResponse?.userRoleDtos[0]?.roleDtoResponse?.name);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [status, setStatus] = useState(false);
    const [statusAdmin, setStatusAdmin] = useState(false);

    useEffect(() => {
        console.log(isLogin);
        if (isLogin) {
            if (roleDtoResponse === "ROLE_ADMIN") {
                setStatusAdmin(true);
                setStatus(true);

            }
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
    const [transparent, setTransparent] = useState("navBarTwo flex");
    // const addBg = () => {
    //     if (window.scrollY >= 10) {
    //         setTransparent("navBarTwo ");
    //     } else {
    //         setTransparent("navBarTwo");
    //     }
    // };
    // window.addEventListener("scroll", addBg);

    return (
        <div className="navBar flex">
            <div className="navBarOne flex " style={{paddingRight:"5px"}}>
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
                        <Link to="#" onClick={handelLogout}>
                        <button type="button" class="btn btn-info" style={{marginRight: "10px"}}>
                            {" "}
                            Logout
                        </button>
                        </Link>
                        <Link to="/register" >
                        <button type="button" class="btn btn-info">
                            {" "}
                            Profile
                        </button>
                        </Link>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <Link to="/admin" hidden={!statusAdmin}>
                        <button type="button" class="btn btn-info">
                            {" "}
                            Admin Page
                        </button>
                        </Link>
                    </div>
                ) : (
                    <div className="none flex">
                        <Link to="/login">
                            <button type="button" class="btn btn-info" style={{marginRight: "10px"}}>
                                {" "}
                                Login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button type="button" class="btn btn-info">
                                {" "}
                                SignUp
                            </button>
                        </Link>
                    </div>
                )}
            </div>

            <div className={transparent} style={{paddingTop:"1px"}}>
                <div className="logoDiv">
                    <img src={Logo} className="Logo"/>
                </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className="listItem">
                            <Link to={"/"}>Home</Link>

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
