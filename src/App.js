import React from "react";
import logo from "./logo.svg";
import {Counter} from "./features/counter/Counter";
import "./../src/asset/css/main.css";
import Navbar from "./component/Navbar/Navbar";
import Search from "./component/Search/Search";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Support from "./component/Support/Support";
import Info from "./component/info/Info";
import Lounge from "./component/Lounge/Lounge";
import Subcribe from "./component/Subscibe/Subscibe";
import Members from "./component/Member/Menber";

function App() {
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
    );
}

export default App;
