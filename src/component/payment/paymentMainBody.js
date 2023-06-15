import React from "react";
import PaymentHeader from "./paymentHeader";
import PaymentNavbar from "./paymentNavbar";

import {
    Form,
    Row,
    Col,
    InputGroup,
    DropdownButton,
    Dropdown,
    Container,
    Alert,
    Card,
    Button,
  } from "react-bootstrap";

function PaymentMainBody() {
  return (<>
    <PaymentHeader/>
    <PaymentNavbar/>
  </>);
}

export default PaymentMainBody;
