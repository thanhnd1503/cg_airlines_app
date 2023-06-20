import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../asset/css/ticket.css";
import videohoa from "../../asset/img/imager_3_69813_700.jpg";
import "../../asset/css/eticket.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { searchTicketPassenger } from "../../api/passengerInfoAPI";





const ViewTicket = () => {
  const { ticketId } = useParams();
  const [tickeT, setTicket] = useState({});
  const isLogin = useSelector((state) => state.auth?.login?.currentUser);
  const dispatch = useDispatch();

  const ticket = useSelector(state=>state.ticket.ticket?.currentTicket);
 



  useEffect(() => {
    const savePassenger = async () => {
      await searchTicketPassenger(isLogin.token,ticketId,dispatch);
    };
  
    savePassenger();
  }, []);

  useEffect(()=>{
    setTicket(ticket);
  },[ticket]);

  console.log(tickeT);


  
  


  return (
    <body>
      <div style={{ display: "flex" }}>
        <div className="ticket">
          <div id="banner">
            <div id="topbanner"></div>
            <span id="mainbanner">
              <img src="https://lukw4l.de/utils/media/assets/flightticket/plane_logo.png" />
              CG Airlines
            </span>
            <span id="tearoffbanner">
              <img src="https://lukw4l.de/utils/media/assets/flightticket/plane_logo.png" />
              CG Airlines
            </span>
          </div>
          <div id="barcode">XYZASDASDXYZ</div>
          <div id="data">
            <div id="maindata">
              <div className="box">
                <span className="header">Passenger Name</span>
                <span className="body">{ticket.orders?.passengers[0].lastName + " " + ticket.orders?.passengers[0].firstName}</span>
              </div>
              <div className="box">
                <span className="header">Flight Number</span>
                <span className="body">{ticket.flight?.flightNumber}</span>
              </div>
              <div className="box">
                <span className="header">From</span>
                <span className="body">{ticket.flight?.departure}</span>
              </div>
              <div className="box">
                <span className="header">Date</span>
                <span className="body">{ticket.flight?.departureDate}</span>
              </div>
              <div className="box">
                <span className="header">To</span>
                <span className="body">{ticket.flight?.destination}</span>
              </div>

              <div className="box ">
                <span className="header">Boarding Time</span>
                <span className="body">{ticket.flight?.departureTime}</span>
              </div>
              <div className="box">
                <span className="header"></span>
                <span className="body"></span>
              </div>

              <div id="tearoffdata">
                <div className="box">
                  <span className="header">Passenger Name</span>
                  <span className="body">{ticket.orders?.passengers[0].lastName + " " + ticket.orders?.passengers[0].firstName}</span>
                </div>
                <div className="box">
                  <span className="header">Flight Number</span>
                  <span className="body">{ticket.flight?.flightNumber}</span>
                </div>
                <div className="box">
                  <span className="header">Date</span>
                  <span className="body">{ticket.flight?.departureDate}</span>
                </div>
                <div className="box seat">
                  <span className="header">Seat</span>
                  <span className="body">
                    <b>{ticket.orders?.seats[0].seatNumber}</b>
                  </span>
                </div>
              </div>
            </div>

            <div id="holes">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="button" style={{ margin: "auto" }}>
          <button type="button" class="btn btn-primary mr-5">
            <Link to={"/invoice"}>Back</Link>
          </button>
          <div className="text-warning">WellCome to Ticket Booking</div>
          <button type="button" class="btn btn-success">
            Ok
          </button>
        </div>
      </div>
    </body>
  );
};

export default ViewTicket;
