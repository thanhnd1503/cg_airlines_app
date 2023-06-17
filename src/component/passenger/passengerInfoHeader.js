import React from "react";
import { Button, Container, Navbar,Nav } from "react-bootstrap";

export const PassengerInfoHeader = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
      <Container style={{ padding: "0 1rem", maxWidth: "100%" }}>
        <Navbar.Brand>
          <img
            src="https://static.topcv.vn/company_logos/0ZT9refQobeAkpzsYWBdyaki10IlbFB4_1655288503____f48c9fc932b36c4eec44ec23d223fa18.png"
            alt="Logo"
            style={{ height: "4vh", width: "auto", marginRight: "1rem" }}
          />
          Codegym Airline
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Button variant="primary">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    style={{ marginRight: "0.5rem" }}
                  >
                    <rect width="200" height="200" fill="none"></rect>
                    <circle
                      cx="128"
                      cy="128"
                      r="96"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    ></circle>
                    <circle
                      cx="128"
                      cy="120"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    ></circle>
                    <path
                      d="M63.8,199.4a72,72,0,0,1,128.4,0"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    ></path>
                  </svg>
                  <span style={{ fontSize: "0.9rem" }}>
                    Hoạt Động Đặt Vé Của Tôi
                  </span>
                </div>
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
