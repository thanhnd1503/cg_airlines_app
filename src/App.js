// import "./../src/asset/css/main.css";
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUpForm from './component/SignUpForm';
import ErrorPage from './component/errorPage';
import LoginForm from './component/LoginForm';
import DashBoard from './component/DashBoard';
import {tokenLoader} from "../src/utility/author";
// <<<<<<< HEAD
// import TripListContent from "../src/component/Ticket/ticketBooking";
// =======
import TripListContent from "./component/Ticket/ticketBooking";
import PassengerInfomation from './component/PassengerInfomation';

// >>>>>>> 7acfda6722a12512a7800b7c2861e462f1a1ae77


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<DashBoard/>} errorElement={<ErrorPage/>} loader={{tokenLoader}}>
    </Route>
    <Route path={`/search-result/:departure/:destination/:departureDate/:ticketClass`}
                           element={<TripListContent/>}></Route>
{/*<<<<<<< HEAD*/}
{/*                    <Route path='/login' element={<LoginForm/>}></Route>*/}
{/*                    <Route path='/register' element={<SignUpForm/>}></Route></Routes>*/}
{/*            </BrowserRouter>*/}
{/*=======*/}
    <Route path='/login' element={<LoginForm/>}></Route>
    <Route path='/register' element={<SignUpForm/>}></Route>
    <Route path='/passengerInfo' element={<PassengerInfomation/>}></Route></Routes>
    </BrowserRouter>
{/*>>>>>>> 7acfda6722a12512a7800b7c2861e462f1a1ae77*/}

        </>
    );
}

export default App;
