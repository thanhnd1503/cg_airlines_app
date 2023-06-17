import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../asset/css/ticket.css";
import videohoa from "../../asset/img/imager_3_69813_700.jpg";
import "../../asset/css/eticket.css";

const ViewTicket = () => {
  return (
    <body>
      <div style={{display:"flex"}}>

        <div className="ticket" >
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
                <span className="body">Mr. Lorem Ipsum</span>
              </div>
              <div className="box">
                <span className="header">Flight Number</span>
                <span className="body">LUKW4L 3345</span>
              </div>
              <div className="box">
                <span className="header">From</span>
                <span className="body">CGN (Germany)</span>
              </div>
              <div className="box">
                <span className="header">Date</span>
                <span className="body">11 AUG 2021</span>
              </div>
              <div className="box">
                <span className="header">To</span>
                <span className="body">SYD (Australia)</span>
              </div>

              <div className="box"></div>
              <div className="box">
                <span className="header">Gate</span>
                <span className="body">B-10</span>
              </div>

              <div className="box boarding">
                <span className="header">Boarding Time</span>
                <span className="body">12:00</span>
              </div>
              <div className="box">
                <span className="header"></span>
                <span className="body"></span>
              </div>

              <div id="tearoffdata">
                <div className="box">
                  <span className="header">Passenger Name</span>
                  <span className="body">Mr. Lorem Ipsum</span>
                </div>
                <div className="box">
                  <span className="header">Flight Number</span>
                  <span className="body">LUKW4L 3345</span>
                </div>
                <div className="box">
                  <span className="header">Date</span>
                  <span className="body">11 AUG 2021</span>
                </div>
                <div className="box">
                  <span className="header">Gate</span>
                  <span className="body">B-10</span>
                </div>
                <div className="box seat">
                  <span className="header">Seat</span>
                  <span className="body">
                    <b>23F</b>
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
        <div className="button" style={{margin:"auto"}}>
          <button type="button" class="btn btn-primary mr-5">
            Back
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
