import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUpForm from "./component/SignUpForm";
import ErrorPage from "./component/errorPage";
import LoginForm from "./component/LoginForm";
import DashBoard from "./component/DashBoard";
import {tokenLoader} from "../src/utility/author";
import PassengerInfomation from "./component/PassengerInfomation";
import Admin from "./component/adminPage/admin";
import PaymentMainBody from "./component/payment/paymentMainBody";
import ViewTicket from "./component/ticket/viewTicket";
import YourComponent from "./component/ticket/electronicTicket";
import TicketBooking from "./component/ticket/ticketBooking";
import HistoryTicket from "./component/ticket/historyTicket";
import  TripListContent from "../src/component/Search/SearchResult";
import  Trip from "../src/component/adminPage/tripAdmin/Trip";
import Template2 from "./component/template2";
import Invoice from "./component/invoice";
import PDFGenerator from './component/invoice';
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<DashBoard/>}
                        errorElement={<ErrorPage/>}
                        loader={{tokenLoader}}
                    ></Route>
                    <Route
                        path={`/search-result/:departure/:destination/:departureDate/`}
                        element={<TripListContent/>}
                    ></Route>
                    <Route path="/login" element={<LoginForm/>}></Route>

                    <Route path="/admin" element={<Admin/>}></Route>

                    <Route path="/payment" element={<PaymentMainBody/>}></Route>

                    <Route path="/register" element={<SignUpForm/>}></Route>
                    <Route path="/passengerInfo" element={<PassengerInfomation/>}></Route>

                    <Route
                        path="/viewTicket"
                        element={<ViewTicket/>}
                    ></Route>
                    <Route
                        path="/eTicket"
                        element={<YourComponent/>}
                    ></Route>
                    <Route
                        path="/historyTicket"
                        element={<HistoryTicket/>}
                    ></Route>
                    <Route
                        path={`/search-result/:departure/:destination/:departureDate/:ticketClass`}
                        element={<TicketBooking/>}
                    ></Route>

                    <Route
                        path="/tripAdmin"
                        element={<Trip/>}
                    ></Route>
                    <Route path="/demo" element={<Template2 />}></Route>
                    <Route path="/invoice" element={<Invoice />}></Route>
                </Routes>
            </BrowserRouter>
        </>)
}

export default App;