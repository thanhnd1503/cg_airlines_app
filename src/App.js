// import "./../src/asset/css/main.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpForm from "./component/SignUpForm";
import ErrorPage from "./component/errorPage";
import LoginForm from "./component/LoginForm";
import DashBoard from "./component/DashBoard";
import { tokenLoader } from "../src/utility/author";
import ViewTicket from "./component/Ticket/viewTicket";
import Eticket from "./component/Ticket/electronicTicket";
import TicketBooking from "./component/Ticket/ticketBooking";

import TripListContent from "./component/Ticket/ticketBooking";
import PassengerInfomation from "./component/PassengerInfomation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<DashBoard />}
            errorElement={<ErrorPage />}
            loader={{ tokenLoader }}
          ></Route>
          <Route
            path={`/search-result/:departure/:destination/:departureDate/:ticketClass`}
            element={<TripListContent />}
          ></Route>

          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<SignUpForm />}></Route>
          <Route
            path="/passengerInfo"
            element={<PassengerInfomation />}
          ></Route>
          <Route path="/viewTicket" element={<ViewTicket />}></Route>
          <Route path="/eTicket" element={<Eticket />}></Route>
          <Route path="/ticketBooking" element={<TicketBooking/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
