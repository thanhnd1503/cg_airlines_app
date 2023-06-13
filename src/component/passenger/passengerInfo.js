import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap"






function PassengerInfo() {
    const [passengers, setPassengers] = useState([{}]);

    const handleAddPassenger = () => {
      setPassengers([...passengers, {}]);
    };
  
  return (
    <Form
    style={{
      border: "1px solid black",
      padding: "10px",
      marginTop: "40px",
    }}
  >
    {passengers.map((passenger, index) => (
      <div key={index} style={{ marginBottom: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <div style={{ textAlign: "left" }}>
            <h4 style={{ marginBottom: "5px" }}>
              <span>
                <span>Hành khách {index + 1}</span>
                <span>, người lớn</span>
              </span>
            </h4>
            <h6 style={{ marginBottom: "0", color: "red" }}>
              *Trường bắt buộc
            </h6>
          </div>
          <hr />
          <div style={{ marginTop: "10px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Form.Check
                type="radio"
                id={`male-${index}`}
                name={`traveler-gender-${index}`}
                label="Ông"
                value="male"
                style={{ marginRight: "5px" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Form.Check
                type="radio"
                id={`female-${index}`}
                name={`traveler-gender-${index}`}
                label="Bà"
                value="female"
                style={{ marginRight: "5px" }}
              />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div style={{ marginBottom: "10px" }}>
            <Form.Label
              style={{ fontSize: "20px" }}
              htmlFor={`traveler-firstName-${index}`}
            >
              Tên gọi bằng chữ cái Latinh{" "}
              <span style={{ color: "red", fontSize: "30px" }}>*</span>
            </Form.Label>
            <div className="col-5">
              <InputGroup size="lg">
                <Form.Control
                  id={`traveler-firstName-${index}`}
                  placeholder="Tên và tên đệm"
                  type="text"
                  style={{ width: "100%" }}
                  required
                />
              </InputGroup>
            </div>
          </div>
          <hr />
          <div className="col-5">
            <Form.Label
              style={{ fontSize: "20px" }}
              htmlFor={`traveler-lastName-${index}`}
            >
              Họ bằng chữ cái Latinh{" "}
              <span style={{ color: "red", fontSize: "30px" }}>*</span>
            </Form.Label>
            <div>
              <InputGroup size="lg">
                <Form.Control
                  id={`traveler-lastName-${index}`}
                  placeholder="Họ"
                  type="text"
                  style={{ width: "100%" }}
                  required
                />
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    ))}

    <button
      onClick={handleAddPassenger}
      style={{ marginLeft: "80%" }}
      className="button-88"
      type="button"
    >
      <span className="text">Thêm Hành Khách</span>
    </button>
  </Form>
  );
}

export default PassengerInfo;
