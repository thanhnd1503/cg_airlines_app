import React from 'react';

import Search from "./Search/Search";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Support from './Support/Support';
import Info from "./info/Info";
import Lounge from "./Lounge/Lounge";
import Subcribe from "./Subscibe/Subscibe";
import Members from "./Member/Menber";
import Navbar from './Navbar/Navbar';
import "../asset/css/main.css";

function DashBoard() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Search/>
    <Support></Support>
    <Info></Info>
    <Lounge></Lounge>
    <Members></Members>
    <Subcribe></Subcribe>
    <Footer/>
    </>
  )
}

export default DashBoard;