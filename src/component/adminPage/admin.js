import React from "react";
import Sidebar from "./sidebar/Sidebar";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../asset/css/SearchResult.css';
import { current } from "@reduxjs/toolkit";
import NavBar from "../adminPage/navbar/Navbar"
export default function Admin() {
  
  return (
    <>
        <div>
        <NavBar></NavBar>
        
          <h1> Trang admin </h1>
          <Sidebar />
        </div>
    </>
  );
}
