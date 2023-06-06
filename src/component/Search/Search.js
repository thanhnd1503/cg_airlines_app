import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Select from 'react-select';
import {getTrips, selectSuccess, selectTripList, setSuccess} from '../../features/trip/tripSlice';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Search = () => {
    const [trips, setTrips] = useState({origin: '', destination: ''});
    const dispatch = useDispatch();
    const tripList = useSelector(selectTripList);
    const success = useSelector(selectSuccess);

    const getTripList = async () => {
        if (!success) {
            dispatch(getTrips());
        } else {
            setTrips(tripList);
            dispatch(setSuccess(true));
        }
    };

    useEffect(() => {
        getTripList();
    }, [success]);

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    const handleOriginChange = (selectedOption) => {
        setTrips({...trips, origin: selectedOption.value});
    };

    const handleDestinationChange = (selectedOption) => {
        setTrips({...trips, destination: selectedOption.value});
    };

    return (
        <div className='search container section'>
            <div data-aos='fade-up' data-aos-duration='2500' className='sectionContainer grid'>
                <div className='btns flex'>
                    <div className='singleBtn'>
                        <span>Economy</span>
                    </div>
                    <div className='singleBtn active'>
                        <span>Business Class</span>
                    </div>
                    <div className='singleBtn'>
                        <span>Fast Class</span>
                    </div>
                </div>
                <form>
                    <div data-aos='fade-up' data-aos-duration='2500' className='searchInputs flex'>
                        <div className='singleInput flex'>
                            <div className='iconDiv'>
                                <HiOutlineLocationMarker className='icon'/>
                            </div>
                            <div className='texts'>
                                <h4>Origin</h4>
                                <Select
                                    placeholder='Select place'
                                    options={tripList && tripList.map((trip) => ({
                                        label: trip.origin,
                                        value: trip.origin
                                    }))}
                                    onChange={handleOriginChange}
                                />
                            </div>
                        </div>

                        <div className='singleInput flex'>
                            <div className='iconDiv'>
                                <HiOutlineLocationMarker className='icon'/>
                            </div>
                            <div className='texts'>
                                <h4>Destination</h4>
                                <Select
                                    placeholder='Select destination'
                                    options={tripList && tripList.map((trip) => ({
                                        label: trip.destination,
                                        value: trip.destination
                                    }))}
                                    onChange={handleDestinationChange}
                                />
                            </div>
                        </div>

                        <Link
                            to={`/search-result/${trips.origin}/${trips.destination}`}
                            className={`btn btnBlock flex ${!trips.origin || !trips.destination ? 'disabled' : ''}`}
                            disabled={!trips.origin || !trips.destination}
                        >
                            Search Flight
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Search;
