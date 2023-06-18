import React from "react";
import Sidebar from "./sidebar/Sidebar";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../asset/css/SearchResult.css';
import NavBar from "../adminPage/navbar/Navbar"
import "../../asset/css/admin.css"
import TripList from "./tripAdmin/TripList";
import Manager from "./Manager/Manager";
export default function Admin() {
  return (
    <>
        <NavBar></NavBar>
        <div id="layoutSidenav">
        <Sidebar />
        <Manager/>
          </div>
    </>
  );
}
