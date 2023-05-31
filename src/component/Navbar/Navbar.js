import React from 'react';
import {SiConsul} from "react-icons/si";
import {BsPhoneVibrate} from "react-icons/bs";
import {AiFillAccountBook, AiOutlineGlobal} from "react-icons/ai";

const Navbar = () => {
    return (
        <div className={"navBar flex"}>
            <div className={"navBarOne flex"}>
                <div>
                    <SiConsul></SiConsul>

                </div>
                <div className={"flex"}>
                    <li className={"flex"}><BsPhoneVibrate/>Support</li>
                    <li className={"flex"}><AiOutlineGlobal/>Languages</li>
                </div>
                <div className={"atb flex"}>
                    <span>Sign in</span>

                </div>
            </div>
        </div>

    );
};

export default Navbar;