import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { SearchTrip } from "../../api/tripApi";
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import "react-datepicker/dist/react-datepicker.css";

const Search = () => {
  const isLogin = useSelector((state) => state.auth?.login?.currentUser);
  const selectStyles = {
    control: (provided) => ({
      ...provided,
      width: "300px",
      height: "54px",
      borderRadius: "4px",
      border: "1px solid #e6e6e6",
      backgroundColor: "#fff",
      boxShadow: "none",
      fontSize: "14px",
      fontWeight: "normal",
      color: "#333",
      paddingLeft: "16px",

    }),
  };

  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [ticketClass, setTicketClass] = useState("");
  const currentDate = new Date().toISOString().split("T")[0];
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

      await SearchTrip(form, dispatch, navigate, isLogin.token);
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    } catch (err) {
      console.error("Search failed:", err);
    }
  }


  const originOptions = [
    { value: "Hà Nội", label: "Hà Nội" },
    { value: "Hồ Chí Minh", label: "Hồ Chí Minh" },
    { value: "Bình Định", label: "Bình Định" },
    { value: "Cần Đước", label: "Cần Đước" },
    { value: "An Giang", label: "An Giang" },

    // Add more origin options as needed
  ];

  const destinationOptions = [
    { value: "Hà Nội", label: "Hà Nội" },
    { value: "Hồ Chí Minh", label: "Hồ Chí Minh" },
    { value: "Bình Định", label: "Bình Định" },
    { value: "Cần Đước", label: "Cần Đước" },
    { value: "An Giang", label: "An Giang" },
    // Add more destination options as needed
  ];

  const ticketClassOptions = [
    { value: "thương gia", label: "thương gia" },
    { value: "Bình dân", label: "Bình dân" },
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
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                    ClearIndicator:()=>null
                  }}
                  value={originOptions.find(
                    (option) => option.value === departure
                  )}
                  options={originOptions.filter(
                    (option) => option.value !== departure
                  )}
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
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                    ClearIndicator:()=>null
                  }}
                  placeholder="đến"
                  value={destinationOptions.find(
                    (option) => option.value === destination
                  )}
                  options={destinationOptions.filter(
                    (option) => option.value !== departure
                  )}
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
                  min={currentDate}
                />

              </div>
            </div>
            <button
              disabled={
                !departure || !destination || !departureDate 
              }
              type="submit"
              className="btn btn-primary"
              style={{
                marginTop: "68px",
                width: "8rem",
                height: "3rem",
                justifyContent: "center",
                display: "flex",
                padding: "0",
                alignContent: "center",
                marginLeft:"30px"
              }}
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
