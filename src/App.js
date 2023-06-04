import React from 'react';
import SignUpForm from './component/SignUpForm';
import {createBrowserRouter,  RouterProvider} from "react-router-dom";
import ErrorPage from './component/errorPage';
import LoginForm from './component/LoginForm';

function App() {

  const router = createBrowserRouter([
    {path:'/register',element:<SignUpForm/>},
    {path:'/login',element:<LoginForm/>},
    {path:'/homePage',element:<ErrorPage/>}
    
  ])
  return (
    <RouterProvider router={router} />
);

}

export default App;
