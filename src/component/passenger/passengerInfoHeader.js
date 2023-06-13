import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";

export const PassengerInfoHeader = () => {
  return (
    <Navbar expand="lg" bg="dark" inverse collapseOnSelect>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <img
              src="https://static.topcv.vn/company_logos/0ZT9refQobeAkpzsYWBdyaki10IlbFB4_1655288503____f48c9fc932b36c4eec44ec23d223fa18.png"
              alt="No avatar"
              style={{ height: "8vh", width: "5vw" }}
            />
          </div>
          <div>
            <Button variant="primary">
              <div style={{height:'5vh',width:'10vw'}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 256 256"
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
                <span>Hoạt Động Đặt Vé Của Tôi</span>
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};
