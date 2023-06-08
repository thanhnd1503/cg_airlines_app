import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

const SearchResult = () => {
    const {departure, destination, departureDate, ticketClass} = useParams();
    const tripListState = useSelector((state) => state.search.search?.currentUser);
    const [tripList, setTripList] = useState(false);

    useEffect(() => {
        if (tripListState !== undefined && tripListState != null) {
            setTripList(tripListState);
        } else {
            setTripList([]);
        }
    }, [tripListState]);


    return (
        <div>
            <h2><Link to={`/`}>home page</Link>
            </h2>
            <h2>Search Results</h2>
            {tripListState && tripListState.length > 0 ? (
                <table>
                    <thead>
                    <tr>
                        <th>departure</th>
                        <th>destination</th>
                        <th>departure date</th>
                        <th>ticket lass</th>
                        <th>ticket price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tripListState.map((trip) => (
                        <tr key={trip.id}>
                            <td>{trip.departure}</td>
                            <td>{trip.destination}</td>
                            <td>{trip.departureTime}</td>
                            <td>{trip.ticketClass}</td>
                            <td>{trip.ticketPrice}</td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};

export default SearchResult;
