import React from 'react';
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Search from "./component/Search/Search";
import Support from "./component/Support/Support";
import Info from "./component/info/Info";
import Lounge from "./component/Lounge/Lounge";
import Footer from "./component/Footer/Footer";
import "../src/asset/css/main.css"
import Menmber from "./component/Member/Member";

const App = () => {
    return (

        <div>
            <Navbar></Navbar>
            <Home></Home>
            <Search></Search>
            <Support></Support>
            <Info></Info>
            <Lounge></Lounge>
            <Menmber></Menmber>
            <Support></Support>
            <Footer></Footer>
        </div>
    );
};

export default App;