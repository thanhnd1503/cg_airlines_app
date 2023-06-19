import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import htmlToPdfmake from "html-to-pdfmake";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { PassengerInfoHeader } from "./passenger/passengerInfoHeader";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Invoice = () => {
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPhone, setUserPhone] = useState(null);
  const [ticketList, setTicketList] = useState([{}]);
  const [passengerList, setPassengerList] = useState([{}]);
  const [totalPrice,setTotalPrice]=useState(null);


  const currentUser = useSelector(
    (state) => state.auth?.login?.currentUser?.userDtoResponse
  );

  const isLogin = useSelector(
    (state) => state.auth?.login?.currentUser
  );
  const tickets = useSelector((state) => state.passenger.passenger.currentPassenger?.tickets);
  const passengers = useSelector((state) => state.passenger.passenger.currentPassenger?.passengers);
  const totalprice = useSelector((state) => state.passenger.passenger.currentPassenger?.totalPrice);





  useEffect(() => {
    setUserName(currentUser.fullName);
    setUserEmail(currentUser.email);
    setUserPhone(currentUser.phone);
  }, [currentUser]);

  useEffect(() => {
    setTicketList(tickets);
  }, [tickets]);

  useEffect(() => {
    setPassengerList(passengers);
  }, [passengers]);

  useEffect(() => {
    setTotalPrice(totalprice);
  }, [totalprice]);

  const printDocument = () => {
    const doc = new jsPDF();
  
    // Get HTML
    const pdfTable = document.getElementById("divToPrint");
    // HTML to PDF format
    const html = htmlToPdfmake(pdfTable.innerHTML);
  
    const documentDefinition = { content: html };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  
    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    pdfDocGenerator.getBlob((blob) => {
      // Create a FormData object
      const formData = new FormData();
      formData.append('file', blob, 'invoice.pdf');
  
      // Save the PDF file
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'invoice.pdf';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
  
      // Send the FormData object to the backend
      axios.post("http://localhost:8080/api/users/sendMail", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          // Handle the response from the backend
          console.log(response.data);
        })
        .catch(error => {
          // Handle any errors
          console.error(error);
        });
    });
  };

  return (
    <>
      <PassengerInfoHeader />
      <div className="App container mt-5">
        <button
          className="btn btn-primary"
          style={{ marginLeft: "35rem" }}
          onClick={printDocument}
        >
          Export To PDF
        </button>
        <div id="divToPrint" className="m-3">
          <div class="row d-flex justify-content-center">
            <div class="col-md-8">
              <div class="card">
                <div class="d-flex flex-row p-2">
                  <div class="d-flex flex-column">
                    {" "}
                    <span class="font-weight-bold">
                      Flight Booking Invoice
                    </span>{" "}
                  </div>
                </div>

                <hr />
                <div class="table-responsive p-2">
                  <table class="table table-borderless">
                    <tbody>
                      <tr class="add">
                        <td>To</td>
                        <td>From</td>
                      </tr>
                      <tr class="content">
                        <td class="font-weight-bold">
                          FullName: {userName} <br />
                          Email: {userEmail} <br />
                          {userPhone}
                        </td>
                        <td class="font-weight-bold">
                          Codegym Airline Service <br />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr />
                <div class="products p-2">
                  <table class="table border-dark">
                    <tbody>
                      <tr class="add">
                        <td><p style={{fontWeight:'bolder'}}>Ticket Number</p></td>
                        <td><p style={{fontWeight:'bolder'}}>Booking Date</p></td>
                        <td><p style={{fontWeight:'bolder'}}>Ticket Price</p></td>
                      </tr>
                      {ticketList.map((ticket) => (
                        <tr key={ticket.id} class="content">
                          <td><Link to={`/viewTicket/${ticket.ticketNumber}`}>{ticket.ticketNumber}</Link></td>
                          <td>{ticket.bookingDate}</td>
                          <td>{ticket.ticketPrice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <hr/>
                <div class="products p-2">
                <table class="table border-dark">
                  <tbody>
                    <tr class="add">
                      <td><p style={{fontWeight:'bolder'}}>First Name</p></td>
                      <td><p style={{fontWeight:'bolder'}}>Last Name</p></td>
                      <td><p style={{fontWeight:'bolder'}}>Luggage</p></td>
                      <td><p style={{fontWeight:'bolder'}}>Gender</p></td>
                    </tr>
                    {passengerList.map((passenger) => (
                      <tr key={passenger.id} class="content">
                        <td>{passenger.firstName}</td>
                        <td>{passenger.lastName}</td>
                        <td>{passenger.isLuggage===true ? "Yes":"No"}</td>
                        <td>{passenger.gender===true ? "Male":"Female"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
                <hr />
                <div class="products p-2">
                  <table class="table table-borderless ">
                    <tbody>
                      <tr class="add">
                        <td className="text-center"><p style={{fontWeight:'bolder',fontSize:'2rem'}}>Total</p></td>
                      </tr>
                      <tr class="content">
                        <td className="text-center" ><p style={{fontWeight:'bolder',fontSize:'2rem'}}>{totalPrice}</p></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
