import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Select from 'react-select';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useDispatch} from 'react-redux';
import {SearchTrip} from '../../api/tripApi';

const Search = () => {
    const [departure, setDeparture] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [ticketClass, setTicketClass] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        Aos.init({duration: 20});
    }, []);

    function handleOriginChange(selectedOption) {
        setDeparture(selectedOption.value);
    }

    function handleDestinationChange(selectedOption) {
        setDestination(selectedOption.value);
    }

    function handleTicketClassChange(selectedOption) {
        setTicketClass(selectedOption.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const form = {
                departure,
                destination,
                departureDate,
                ticketClass,
            };

            await SearchTrip(form, dispatch, navigate);
        } catch (err) {
            console.error('Search failed:', err);
        }
    }

    const originOptions = [
        {value: 'HN', label: 'Hanoi'},
        {value: 'HCM', label: 'Ho Chi Minh City'},
        // Add more origin options as needed
    ];

    const destinationOptions = [
        {value: 'HN', label: 'Hanoi'},
        {value: 'HCM', label: 'Ho Chi Minh City'},
        // Add more destination options as needed
    ];
    const ticketClassOption = [
        {value: 'thương gia', label: 'thương gia'},
        {value: 'Bình dân', label: 'Bình dân'},

    ]
    return (
        <div className="search container section activeHeader">
            <div data-aos="fade-up" data-aos-duration="2500" className="sectionContainer grid">
                <form onSubmit={handleSubmit}>
                    <div data-aos="fade-up" data-aos-duration="2500" className="searchInputs flex">
                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <HiOutlineLocationMarker className="icon"/>
                            </div>
                            <div className="texts">
                                <h4>Origin</h4>
                                <Select
                                    placeholder="Select place"
                                    value={originOptions.find((option) => option.value === departure)}
                                    options={originOptions}
                                    onChange={handleOriginChange}
                                />
                            </div>
                        </div>

                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <HiOutlineLocationMarker className="icon"/>
                            </div>
                            <div className="texts">
                                <h4>Destination</h4>
                                <Select
                                    placeholder="Select destination"
                                    value={destinationOptions.find((option) => option.value === destination)}
                                    options={destinationOptions}
                                    onChange={handleDestinationChange}
                                />
                            </div>
                        </div>

                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <HiOutlineLocationMarker className="icon"/>
                            </div>
                            <div className="texts">
                                <h4>Date</h4>
                                <input type="date" value={departureDate}
                                       onChange={(e) => setDepartureDate(e.target.value)}/>
                            </div>
                        </div>
                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <HiOutlineLocationMarker className="icon"/>
                            </div>
                            <div className="texts">
                                <h4>Class</h4>
                                <Select
                                    type="text"
                                    value={ticketClassOption.find((option) => option.value === ticketClass)}
                                    options={ticketClassOption}
                                    onChange={handleTicketClassChange}/>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className={`btn btnBlock flex `}>
                            Search Flight
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Search;
