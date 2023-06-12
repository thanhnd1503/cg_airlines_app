import React from "react";
import { PassengerInfoHeader } from "./passenger/passengerInfoHeader";
import PassengerInfobody from "./passenger/passengerInfoNavBar";
import PassengerMainBody from "./passenger/passengerMainBody";
import "../asset/css/passenger.css"


function PassengerInfomation() {
  return (
    <>
      <PassengerInfoHeader></PassengerInfoHeader>
      <PassengerInfobody></PassengerInfobody>
      <PassengerMainBody></PassengerMainBody>
    </>
  );
}

export default PassengerInfomation;
