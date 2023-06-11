import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import '../../asset/css/SearchResult.css';
import {Card} from 'react-bootstrap';
import Navbar from "../Navbar/Navbar";

const SearchResult = () => {
    const {departure, destination, departureDate, ticketClass} = useParams();
    const tripListState = useSelector((state) => state.search.search?.currentUser);
    const [tripList, setTripList] = useState([]);

    useEffect(() => {
        if (tripListState !== undefined && tripListState !== null) {
            setTripList(tripListState);
        } else {
            setTripList([]);
        }
    }, [tripListState]);

    return (
        <>
            <div className="lounge container section">
                <div className="search-result-page">
                    {tripList.length > 0 ? (
                        <div className="search-result-container">
                            {tripList.map((trip) => (
                                <div key={trip.id} className="search-result-wrapper">
                                    <Card className="search-result-card">
                                        <Card.Header>Airline Name</Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <td className="search-result-title">departure</td>
                                                        <td className="search-result-title"></td>
                                                        <td className="search-result-title">destination</td>
                                                        <td className="search-result-title">time depart</td>
                                                        <td className="search-result-title">seat class</td>
                                                        <td className="search-result-title">Price</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="search-result-cell">{trip.departure}</td>
                                                        <td>
                                                                <span className="plane">
                                                                    <svg
                                                                        className="plane-icon"
                                                                        clipRule="evenodd"
                                                                        fillRule="evenodd"
                                                                        height="50"
                                                                        width="50"
                                                                        imageRendering="optimizeQuality"
                                                                        shapeRendering="geometricPrecision"
                                                                        textRendering="geometricPrecision"
                                                                        viewBox="0 0 500 500"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <g stroke="#222">
                                                                            <line
                                                                                fill="none"
                                                                                strokeLinecap="round"
                                                                                strokeWidth="30"
                                                                                x1="300"
                                                                                x2="55"
                                                                                y1="390"
                                                                                y2="390"
                                                                            />
                                                                            <path
                                                                                d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
                                                                                fill="#222"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth="10"
                                                                            />
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                        </td>
                                                        <td className="search-result-cell">{trip.destination}</td>
                                                        <td className="search-result-cell">{trip.departureTime}</td>
                                                        <td className="search-result-cell">{trip.ticketClass}</td>
                                                        <td className="search-result-cell">{trip.ticketPrice}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <div className="booking-button-wrapper">
                                        <Link to={`/booking-ticket/${trip.id}`}
                                              className="booking-button">Booking</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default SearchResult;
