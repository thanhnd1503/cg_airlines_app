import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpForm from './component/SignUpForm';
import ErrorPage from './component/errorPage';
import LoginForm from './component/LoginForm';
import DashBoard from './component/DashBoard';
import { tokenLoader } from "../src/utility/author";
import TripListContent from "./component/ticket/ticketBooking";
import PassengerInfomation from './component/PassengerInfomation';
import PaymentMainBody from './component/payment/paymentMainBody';
import ViewTicket from './component/ticket/ViewTicket';
import YourComponent from './component/ticket/ElectronicTicket';
import HistoryTicket from './component/ticket/HistoryTicket';
import Template2 from './component/template2';
import PDFGenerator from './component/invoice';
import Invoice from './component/invoice';
import TicketBooking from './component/ticket/ticketBooking';
import Admin from './component/adminPage/admin';
import Trip from './component/adminPage/tripAdmin/Trip';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<DashBoard />}
          errorElement={<ErrorPage />}
          loader={{ tokenLoader }}
        ></Route>
        <Route
          path={`/search-result/:departure/:destination/:departureDate`}
          element={<TripListContent />}
        ></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/payment" element={<PaymentMainBody />}></Route>
        <Route path="/register" element={<SignUpForm />}></Route>
        <Route path="/passengerInfo/:flightNumber" element={<PassengerInfomation />} />
        <Route path="/viewTicket/:ticketId" element={<ViewTicket />}></Route>
        <Route path="/eTicket" element={<YourComponent />}></Route>
        <Route path="/historyTicket" element={<HistoryTicket />}></Route>
        <Route
          path={`/search-result/:departure/:destination/:departureDate/:ticketClass`}
          element={<TicketBooking />}
        ></Route>
        <Route path="/demo" element={<Template2 />}></Route>
        <Route path="/invoice" element={<Invoice />}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/tripAdmin" element={<Trip/>}></Route>
        <Route path="/seatManager" element={<Template2/>}></Route>
        <Route path="/historyTicket" element={<HistoryTicket/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;