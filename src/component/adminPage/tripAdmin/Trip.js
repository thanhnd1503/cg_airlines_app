import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from "../../adminPage/navbar/Navbar"
import "../../../asset/css/admin.css"
import TripList from "./TripList";
export default function Trip() {
    return (
        <>
            <NavBar></NavBar>
            <div id="layoutSidenav">
                <Sidebar />
                <TripList/>
            </div>
        </>
    );
}
