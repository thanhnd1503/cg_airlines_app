import React from 'react';
import {useParams} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";

const TripListContent = () => {
    const {origin, destination} = useParams();

    // Use the origin and destination values in your component logic

    return (

        <div>
            <Navbar></Navbar>
            <div className='lounge container section'>
                <h2></h2>
                <p>Origin: {origin}</p>
                <p>Destination: {destination}</p>
            </div>
            {/* Render other content based on the origin and destination */}
            <Footer></Footer>
        </div>
    );
};

export default TripListContent;
