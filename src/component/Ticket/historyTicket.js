import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../asset/css/ticket.css";

function historyTicket() {
  return (
    <>
      <div>
        <div className="text-center">
          <h2>Air ticket history list</h2>
          <form className="row g-3 ms-auto"></form>
          <div className="col-auto">
            <input
              type="text"
              className="form-control ms-auto"
              placeholder="Search Data Flight Date"
            />
          </div>
        </div>
        <table className="table table-bordered border-primary table-responsive">
          <thead>
            <tr>
              <th scope="col">Flight Date</th>
              <th scope="col">ID</th>
              <th scope="col">Status</th>
              <th scope="col">ViewTicket</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className="BodyColor">
            <td  style={{ paddingRight: "60px" }}>
            <p className="font-weight-bold">
              <p>17-06-2023</p>
            </p>
            </td>
            
            <td  style={{ paddingRight: "60px" }}>
            <p className="font-weight-bold">
              <p>ID</p>
            </p>
            </td>
            <td  style={{ paddingRight: "60px" }}>
            <p className="font-weight-bold">
              <p>Status(đã bay/ chưa bay)</p>
            </p>
            </td>

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
         <td> <div id="data">
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
          </div></td>
        </div>
      </div>
      <td></td>
            
          </tbody>
        </table>
      </div>
    </>
  );
}

export default historyTicket;
