import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Select from 'react-select';
import {useDispatch} from 'react-redux';
import {SearchTrip} from '../../api/tripApi';

const Search = () => {
    const selectStyles = {
        control: (provided) => ({
            ...provided,
            width: '200px',
            height: '55px',
            borderRadius: '8px',
            border: "1px solid black",
            backgroundColor: 'rgb(255 255 255)',

        }),
    };

    const [departure, setDeparture] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [ticketClass, setTicketClass] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

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
            window.scrollTo({
                top: 0,
                behavior: 'auto',
            });
        } catch (err) {
            console.error('Search failed:', err);
        }
    }

    const originOptions = [
        {value: 'HN', label: 'Hanoi'},
        {value: 'HCM', label: 'Ho Chi Minh City'},
        {value: 'Binh Dinh', label: 'Binh Dinh'},
        // Add more origin options as needed
    ];

    const destinationOptions = [
        {value: 'HN', label: 'Hanoi'},
        {value: 'HCM', label: 'Ho Chi Minh City'},
        {value: 'TSN', label: 'TSN'},
        // Add more destination options as needed
    ];

    const ticketClassOptions = [
        {value: 'thương gia', label: 'thương gia'},
        {value: 'Bình dân', label: 'Bình dân'},
    ];

    return (
        <div className="search container section activeHeader">
            <div className="sectionContainer grid">
                <form onSubmit={handleSubmit}>
                    <div className="searchInputs flex">
                        <div className="selectContainer">
                            <div className="iconDiv"></div>
                            <div className="texts">
                                <h4>Từ</h4>
                                <Select
                                    placeholder={" từ "}
                                    components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                                    value={originOptions.find((option) => option.value === departure)}
                                    options={originOptions.filter((option) => option.value !== departure)}
                                    onChange={handleOriginChange}
                                    styles={selectStyles}

                                />
                            </div>
                        </div>

                        <div className="selectContainer">
                            <div className="iconDiv"></div>
                            <div className="texts">
                                <h4>Đến</h4>
                                <Select
                                    components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                                    placeholder="đến"
                                    value={destinationOptions.find((option) => option.value === destination)}
                                    options={destinationOptions.filter((option) => option.value !== departure)}
                                    onChange={handleDestinationChange}
                                    styles={selectStyles}

                                />
                            </div>
                        </div>

                        <div className="selectContainer">
                            <div className="iconDiv"></div>
                            <div className="texts">
                                <h4>Ngày đi</h4>
                                <input
                                    type="date"
                                    value={departureDate}
                                    onChange={(e) => setDepartureDate(e.target.value)}
                                    style={selectStyles.control()}
                                />
                            </div>
                        </div>

                        <div className="selectContainer">
                            <div className="iconDiv"></div>
                            <div className="texts">
                                <h4>Loại ghế</h4>
                                <Select
                                    placeholder="Loại ghế"
                                    styles={selectStyles}
                                    components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                                    type="text"
                                    value={ticketClassOptions.find((option) => option.value === ticketClass)}
                                    options={ticketClassOptions}
                                    onChange={handleTicketClassChange}

                                />
                            </div>
                        </div>

                        <button
                            disabled={!departure || !destination || !departureDate || !ticketClass}
                            type="submit"
                            className="btn btnBlock flex"
                            style={{marginTop: '75px'}}

                        >
                            Search Flight
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Search;
