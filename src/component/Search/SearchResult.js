import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectTripList} from "../../features/trip/tripSlice";

const SearchResult = () => {
    const {origin, destination} = useParams();
    const tripList = useSelector(selectTripList);

    // Filter the tripList based on origin and destination

    const filteredTrips = tripList.filter(
        trip => trip.origin === origin && trip.destination === destination
    );

    return (
        <div className="search-result">
            <h2>Search Results</h2>
            {filteredTrips.length > 0 ? (
                <ul>
                    {filteredTrips.map(trip => (
                        <li key={trip.id}>
                            {/* Render the details of each trip */}
                            <p>{trip.origin} to {trip.destination}</p>
                            <p>Date: {trip.flightDate}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};

export default SearchResult;
