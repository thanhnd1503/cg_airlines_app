import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUpForm from './component/SignUpForm';
import ErrorPage from './component/errorPage';
import LoginForm from './component/LoginForm';
import DashBoard from './component/DashBoard';
import {tokenLoader} from "../src/utility/author";
import TripListContent from "./component/ticket/ticketBooking";
import PassengerInfomation from './component/PassengerInfomation';
import Template2 from './component/template2';
import PDFGenerator from './component/invoice';
import Invoice from './component/invoice';





function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<DashBoard/>} errorElement={<ErrorPage/>} loader={{tokenLoader}}>
    </Route>
    <Route path={`/search-result/:departure/:destination/:departureDate/:ticketClass`}
                           element={<TripListContent/>}></Route>
    <Route path='/login' element={<LoginForm/>}></Route>
    <Route path='/register' element={<SignUpForm/>}></Route>
    <Route path='/demo' element={<Template2/>}></Route>
    <Route path='/invoice' element={<Invoice/>}></Route>
    <Route path='/passengerInfo' element={<PassengerInfomation/>}></Route></Routes>
    </BrowserRouter>

        </>
    );
}

export default App;
