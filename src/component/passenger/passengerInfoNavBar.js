import React from "react";
import { ProgressBar, Row, Col, Container, ListGroup } from "react-bootstrap";

const passengerInfobody = () => {
  return (
    <>
      <div className="css-1jiugt3 ehcv3fx0">
        <div className="etiContentWrapper css-1whz27j">
          <ListGroup horizontal className="list-group list-group-horizontal">
            <ListGroup.Item
              data-testid="visited-step"
              className="list-group-item"
              style={{ width: "100%", margin: "auto" }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                }}
                className="css-njso2s e16wyud90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="none"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <polyline
                    points="216 72 104 184 48 128"
                    fill="none"
                    stroke="#007bff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></polyline>
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
                className="css-1kp6rr0 e16wyud91"
              >
                Lựa Chọn Chuyến Bay
              </span>
            </ListGroup.Item>
            <ListGroup.Item
              aria-current="step"
              data-testid="current-step"
              className="list-group-item"
              style={{ width: "100%", backgroundColor: "cyan" }}
            >
              <div style={{fontSize:'20px'}} className="css-1dbr2l5 e16wyud90">2</div>
              <span
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
                className="css-rjx6z6 e16wyud91"
              >
                Thông tin về khách du lịch
              </span>
            </ListGroup.Item>
            <ListGroup.Item
              data-testid="not-visited-step"
              className="list-group-item"
              style={{ width: "100%" }}
            >
              <div style={{fontSize:'20px'}} className="css-6yjmic e16wyud90">3</div>
              <span
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
                className="css-1411tp2 e16wyud91"
              >
                Thanh toán
              </span>
            </ListGroup.Item>
          </ListGroup>
          <div className="css-1kzftsw ehcv3fx2"></div>
        </div>
      </div>
      <ProgressBar now={60} />
    </>
  );
};

export default passengerInfobody;
