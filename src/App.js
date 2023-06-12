import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SignUpForm from './component/SignUpForm';
import ErrorPage from './component/errorPage';
import LoginForm from './component/LoginForm';
import DashBoard from './component/DashBoard';
import { tokenLoader } from "../src/utility/author";
import PassengerInfomation from './component/PassengerInfomation';




function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<DashBoard/>} errorElement={<ErrorPage/>} loader={{tokenLoader}}>
    </Route>
    <Route path='/login' element={<LoginForm/>}></Route>
    <Route path='/register' element={<SignUpForm/>}></Route>
    <Route path='/passengerInfo' element={<PassengerInfomation/>}></Route></Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
