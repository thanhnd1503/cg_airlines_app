import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import "./../src/asset/css/main.css";
import SignUpForm from './component/SignUpForm';
import ErrorPage from './component/errorPage';
import LoginForm from './component/LoginForm';
import DashBoard from './component/DashBoard';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<DashBoard/>}>
    </Route>
    <Route path='/login' element={<LoginForm/>}></Route>
    <Route path='/register' element={<SignUpForm/>}></Route></Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
