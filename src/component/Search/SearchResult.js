import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../asset/css/SearchResult.css";
import { Card } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import { searchTicket } from "../../api/ticketAPI";

const SearchResult = () => {
  const searchTicketProgress = useSelector(
    (state) => state.ticket.ticket.currentTicket
  );
  const isLoading = useSelector((state) => state.ticket.ticket.isFetching);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth?.login?.currentUser);
  const { departure, destination, departureDate, ticketClass } = useParams();
  const tripListState = useSelector(
    (state) => state.search.search?.currentUser
  );
  const [tripList, setTripList] = useState([]);


  useEffect(() => {
    if (tripListState !== undefined && tripListState !== null) {
      setTripList(tripListState);
    } else {
      setTripList([]);
    }
  }, [tripListState]);

  const handleClickEvent = (event) => {
    const flightNum = event.target.value;
    navigate(`/passengerInfo/${flightNum}`);
  };

  return (
    <>
      {isLogin ? (
        <div className="lounge container section">
          <div className="search-result-page">
            {tripList.length > 0 ? (
              <div className="search-result-container">
                {tripList.map((trip) => (
                  <div className="search-result-wrapper">
                    <Card className="search-result-card">
                      <Card.Header>
                        <div className="d-flex justify-content-between">
                          <div><strong>{trip.flightNumber}</strong></div>

                          <div>
                            <div> Ghế thương gia :{trip.quantityFirst} </div>
                            <div> Ghế phổ thông :{trip.quantitySecond} </div>
                          </div>
                        </div>
                      </Card.Header>
                      <Card.Body>
                        <Card.Text>
                          <table>
                            <tbody>
                              <tr>
                                <td className="search-result-title"> Từ </td>
                                <td className="search-result-title"> </td>
                                <td className="search-result-title"> Đến</td>
                                <td className="search-result-title">
                                  {" "}
                                  Thời gian khởi han
                                </td>
                              </tr>
                              <tr>
                                <td className="search-result-cell">
                                  {trip.departure}
                                </td>
                                <td>
                                  <span className="plane">
                                    <svg
                                      className="plane-icon"
                                      clipRule="evenodd"
                                      fillRule="evenodd"
                                      height="85"
                                      width="65"
                                      imageRendering="optimizeQuality"
                                      shapeRendering="geometricPrecision"
                                      textRendering="geometricPrecision"
                                      viewBox="0 0 500 500"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g stroke="blue">
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
                                          fill="blue"
                                          strokeLinejoin="round"
                                          strokeWidth="10"
                                        />
                                      </g>
                                    </svg>
                                  </span>
                                </td>
                                <td className="search-result-cell">
                                  {trip.destination}
                                </td>
                                <td className="search-result-cell">
                                  {trip.departureTime}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </Card.Text>
                        <div className="booking-button-wrapper">
                      <button
                        onClick={e=>handleClickEvent(e)}
                        value={trip.flightNumber}
                        className="booking-button"
                      >
                        đặt trước
                      </button>
                    </div>
                      </Card.Body>
                    </Card>
                   
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <p>
                  Không tìm thấy chuyến bay bạn tìm. Bấm{" "}
                  <Link to="/">vào đây</Link> để trở về trang chủ.
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        navigate("/login")
      )}
    </>
  );
};

export default SearchResult;
