import React, { useState } from "react";
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
import PassengerInfo from "./passengerInfo";

const EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const PHONE_REGEX =
  /^(?:\+84|0)(?:3[2-9]|5[2689]|7[06-9]|8[1-9]|9[0-4]|1[2-9])\d{7}$/;

function PassengerMainBody() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(true);
  const [form, setForm] = useState({});

  const handleChangeField = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setPhone(event.target.value);
    }
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleBlurField = (event) => {
    if (
      event.target.name === "email" &&
      !EMAIL_REGEX.test(event.target.value)
    ) {
      setValidEmail(false);
      setEmail("");
      setForm({ ...form, [event.target.name]: "" });
      console.log(validEmail);
    } else if (
      event.target.name === "phone" &&
      !PHONE_REGEX.test(event.target.value)
    ) {
      setValidPhone(false);
      setPhone("");
      setForm({ ...form, [event.target.name]: "" });
    }
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }} className="body">
        <Container
          className="col-7"
          style={{ marginTop: "20px", marginLeft: "3rem" }}
        >
          <Container
            style={{
              border: "1px solid black",
              width: "100%",
              padding: "3%",
              marginLeft: "30px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <div style={{ border: "1px solid black" }}>
              <h2>
                <span style={{ fontFamily: " Verdana, sans-serif" }}>
                  <h2>Thông tin về khách du lịch</h2>
                </span>
              </h2>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h4 style={{ padding: "0", marginTop: "10px" }}>
                  <span>Thông tin liên hệ cho tất cả hành khách</span>
                </h4>
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="var(--_1xar4q1o)"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm-2,48a12,12,0,1,1-12,12A12,12,0,0,1,126,72Zm10,112h-8a8,8,0,0,1-8-8V128a8,8,0,0,1,0-16h8a8,8,0,0,1,8,8v48a8,8,0,0,1,0,16Z"></path>
                  </svg>
                </button>
              </div>
              <hr />
              <Form>
                <Row style={{ padding: "3%" }}>
                  <Col className="col-6">
                    <label style={{ fontSize: "20px" }} for="traveler-email">
                      Địa chỉ email{" "}
                      <span style={{ color: "red", fontSize: "30px" }}>*</span>
                    </label>
                    <InputGroup size="lg">
                      <Form.Control
                        id="traveler-email"
                        name="email"
                        onChange={(e) => handleChangeField(e)}
                        onBlur={(e) => handleBlurField(e)}
                        required
                      />
                    </InputGroup>
                    <br></br>
                    {!validEmail ? (
                      <Alert key={"danger"} variant={"danger"}>
                        Invalid Email Address
                      </Alert>
                    ) : (
                      ""
                    )}
                  </Col>

                  <Col className="col-6">
                    <label style={{ fontSize: "20px" }} for="traveler-phone">
                      Số điện thoại di động{" "}
                      <span style={{ color: "red", fontSize: "30px" }}>*</span>
                    </label>
                    <InputGroup className="mb-3" size="lg">
                      <DropdownButton
                        variant="outline-secondary"
                        title="+84"
                        id="input-group-dropdown-1"
                      >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">
                          Something else here
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                      </DropdownButton>
                      <Form.Control
                        id="traveler-phone"
                        aria-label="Text input with dropdown button"
                        onChange={(e) => handleChangeField(e)}
                        onBlur={(e) => handleBlurField(e)}
                        name="phone"
                        required
                      />
                    </InputGroup>
                    {!validPhone ? (
                      <Alert
                        style={{ marginTop: "24px" }}
                        key={"danger"}
                        variant={"danger"}
                      >
                        Invalid Phone Number
                      </Alert>
                    ) : (
                      ""
                    )}
                  </Col>
                </Row>
              </Form>
            </div>
            <PassengerInfo />
            <Form
              style={{
                border: "1px solid black",
                padding: "10px",
                marginTop: "40px",
              }}
            >
              <div>
                <span>
                  <h3>Chọn hành lý</h3>
                </span>
                <hr />
                <div>
                  <div>
                    <div>
                      <h3>
                        <span>Vật dụng cá nhân</span>
                      </h3>
                    </div>
                  </div>
                  <div>
                    <div>
                      Một chiếc túi nhỏ phải để vừa ở dưới ghế trước mặt quý vị.
                    </div>
                    <div>
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        pointer-events="all"
                        aria-hidden="true"
                        class="etiIllustration css-yqzw8o"
                        role="presentation"
                        data-testid="personalItem-illustration"
                      >
                        <path
                          d="M29.4896 2C27.4451 2.00006 14.1562 34.7273 14.1562 34.7273H45.8451C45.8451 34.7273 31.534 1.99994 29.4896 2Z"
                          stroke="#163868"
                          stroke-width="3.06667"
                        ></path>
                        <rect
                          x="8.53125"
                          y="34.2148"
                          width="42.9333"
                          height="25.7851"
                          rx="2.04444"
                          fill="#83B4E2"
                        ></rect>
                        <path
                          d="M7 33.2842C7 32.1551 7.91533 31.2397 9.04444 31.2397H50.9556C52.0847 31.2397 53 32.1551 53 33.2842V48.5341C53 49.6633 52.0847 50.5786 50.9556 50.5786H9.04444C7.91533 50.5786 7 49.6633 7 48.5341V33.2842Z"
                          fill="#2668A6"
                        ></path>
                        <rect
                          width="11.9008"
                          height="3.06667"
                          rx="1.08526"
                          transform="matrix(0.00317638 0.999995 -0.999996 0.00298974 19.7773 44.6221)"
                          fill="#163868"
                        ></rect>
                        <rect
                          width="11.9008"
                          height="3.06667"
                          rx="1.08526"
                          transform="matrix(0.00317638 0.999995 -0.999996 0.00298974 42.2656 44.6279)"
                          fill="#163868"
                        ></rect>
                      </svg>
                      <hr></hr>
                      <div>
                        <span
                          style={{
                            borderRadius: "30%",
                            border: "3px solid green",
                            background: "lightgreen",
                          }}
                        >
                          Đã bao gồm
                        </span>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
                <div class="travelerDetailsSection css-1kj7bt">
                  <div>
                    <div>
                      <h3>
                        <span>Hành lý xách tay</span>
                      </h3>
                    </div>
                  </div>
                  <div>
                    <div>Ba lô hoặc túi xách được để ở ngăn phía trên đầu.</div>
                    <div>
                      <svg
                        width="60"
                        height="70"
                        viewBox="0 0 60 70"
                        fill="none"
                        pointer-events="all"
                        aria-hidden="true"
                        class="etiIllustration css-yqzw8o"
                        role="presentation"
                        data-testid="cabinBaggagePerTraveler-illustration"
                      >
                        <path
                          d="M20.9805 25.3047V4.72112C20.9805 3.21829 19.7622 2 18.2594 2H13.1547C11.6519 2 10.4336 3.21828 10.4336 4.72111V25.3047"
                          stroke="#163868"
                          stroke-width="2"
                        ></path>
                        <ellipse
                          cx="21.3375"
                          cy="66.6171"
                          rx="2.04258"
                          ry="2.12909"
                          fill="#163868"
                        ></ellipse>
                        <ellipse
                          cx="9.525"
                          cy="66.6174"
                          rx="2.04258"
                          ry="2.12909"
                          fill="#163868"
                        ></ellipse>
                        <rect
                          x="2"
                          y="24.2112"
                          width="27"
                          height="42.2122"
                          rx="3.17464"
                          fill="#83B4E2"
                        ></rect>
                        <rect
                          x="6.21777"
                          y="29.6082"
                          width="1.0125"
                          height="33.418"
                          rx="0.50625"
                          fill="#2B75BB"
                        ></rect>
                        <rect
                          x="19.3809"
                          y="29.6082"
                          width="1.0125"
                          height="33.418"
                          rx="0.50625"
                          fill="#2B75BB"
                        ></rect>
                        <rect
                          x="23.7656"
                          y="29.6082"
                          width="1.0125"
                          height="33.418"
                          rx="0.50625"
                          fill="#2B75BB"
                        ></rect>
                        <rect
                          x="14.9922"
                          y="29.6082"
                          width="1.0125"
                          height="33.418"
                          rx="0.50625"
                          fill="#2B75BB"
                        ></rect>
                        <rect
                          x="10.6094"
                          y="29.6082"
                          width="1.0125"
                          height="33.418"
                          rx="0.50625"
                          fill="#2B75BB"
                        ></rect>
                        <path
                          d="M40.8232 31.231C40.3556 31.2741 39.9429 31.3173 39.6466 31.3497C39.784 30.7214 40.2057 30.0611 40.8463 29.5134C41.6305 28.8429 42.6956 28.3847 43.8196 28.3847C44.9436 28.3847 46.0087 28.8429 46.7929 29.5134C47.4335 30.0611 47.8552 30.7214 47.9926 31.3497C47.6963 31.3173 47.2836 31.2741 46.816 31.231C45.8818 31.1448 44.7153 31.0573 43.8196 31.0573C42.9239 31.0573 41.7574 31.1448 40.8232 31.231Z"
                          stroke="#163868"
                          stroke-width="0.769481"
                        ></path>
                        <path
                          d="M57.488 56.7478C57.488 56.7478 54.9976 38.3666 54.6051 36.8588C54.3139 35.7399 53.6951 35.0571 53.0263 34.2022C53.0263 34.2022 51.9281 33.161 50.867 32.4789C49.8058 31.7968 48.2623 31.2583 48.2623 31.2583H39.3779C39.3779 31.2583 38.0233 31.9041 37.1387 32.4789C36.2541 33.0537 34.9737 34.2022 34.9737 34.2022C34.2314 35.023 33.694 35.7097 33.3949 36.8588C33.0024 38.3666 30.512 56.7478 30.512 56.7478C30.512 56.7478 30.2556 58.4684 30.1688 59.548C30.146 59.8317 30.1148 60.078 30.0854 60.3099C30.0192 60.832 29.9623 61.2809 30.0315 61.9175C30.1277 62.8029 30.2572 63.3522 30.6493 64.1433C30.918 64.6856 30.9469 64.7227 31.2859 65.1566L31.3357 65.2204C31.6244 65.5903 32.0336 66.0411 32.3653 66.3692C32.8964 66.8946 33.2812 67.0972 33.9305 67.4391L33.944 67.4462C34.9605 67.9814 35.6941 68.105 36.6921 68.2732L36.6921 68.2732L36.6925 68.2733C36.8862 68.306 37.0899 68.3403 37.3075 68.3796C39.7583 68.8227 43.5982 68.6842 44 68.6682C44.4018 68.6842 48.2417 68.8227 50.6925 68.3796C50.9101 68.3403 51.1137 68.306 51.3073 68.2733L51.3079 68.2732H51.3079C52.3059 68.105 53.0395 67.9814 54.056 67.4462L54.0695 67.4391C54.7188 67.0972 55.1036 66.8946 55.6347 66.3692C55.9664 66.0411 56.3756 65.5903 56.6643 65.2204L56.7141 65.1566C57.0531 64.7227 57.082 64.6856 57.3507 64.1433C57.7428 63.3522 57.8723 62.8029 57.9685 61.9175C58.0377 61.2809 57.9808 60.832 57.9146 60.3099L57.9146 60.3098C57.8852 60.078 57.854 59.8316 57.8312 59.548C57.7444 58.4684 57.488 56.7478 57.488 56.7478Z"
                          fill="#2B75BB"
                        ></path>
                        <rect
                          x="35.9718"
                          y="36.4071"
                          width="15.9227"
                          height="31.2039"
                          rx="3.37085"
                          fill="#163868"
                          stroke="#83B4E2"
                          stroke-width="0.963101"
                        ></rect>
                        <rect
                          x="40.1572"
                          y="39.3718"
                          width="7.68783"
                          height="2.87206"
                          rx="0.481551"
                          fill="#83B4E2"
                        ></rect>
                        <rect
                          x="37.1396"
                          y="54.0198"
                          width="13.591"
                          height="1.14882"
                          rx="0.574412"
                          fill="#83B4E2"
                        ></rect>
                        <path
                          d="M37.1705 29.2165C36.7339 29.2165 34.6486 30.2792 34.2709 30.7536C33.8932 31.228 34.5857 34.5298 34.5857 34.5298C34.5857 34.5298 35.9998 33.1131 36.7258 32.6038C37.3942 32.1349 38.8543 31.4331 38.8543 31.4331C38.8543 31.4331 37.6071 29.2165 37.1705 29.2165Z"
                          fill="#163868"
                          stroke="#163868"
                          stroke-width="0.321034"
                        ></path>
                        <path
                          d="M50.765 29.1763C51.2016 29.1763 53.2869 30.2389 53.6646 30.7133C54.0423 31.1877 53.3499 34.4896 53.3499 34.4896C53.3499 34.4896 51.9358 33.0728 51.2097 32.5635C50.5414 32.0947 48.9194 31.4421 48.9194 31.4421C48.9194 31.4421 50.3285 29.1763 50.765 29.1763Z"
                          fill="#163868"
                          stroke="#163868"
                          stroke-width="0.321034"
                        ></path>
                      </svg>
                      <hr />
                      <div
                        data-offer-rate="625"
                        class="_1yoskx0 sc6ej93 _1yoskx2 css-zcxndt"
                      >
                        <span
                          data-testid="includedBaggage-status"
                          class="_1x19viu5 _1x19viu0 css-sn9raf"
                          style={{
                            borderRadius: "30%",
                            border: "3px solid green",
                            background: "lightgreen",
                          }}
                        >
                          Đã bao gồm
                        </span>
                        <span
                          style={{ marginLeft: "20%" }}
                          data-testid="includedBaggage-description"
                        >
                          1 x 7 kg
                        </span>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <h3>
                        <span>Hành lý ký gửi</span>
                      </h3>
                    </div>
                  </div>
                  <div>
                    <div style={{ marginBottom: "10px" }}>
                      Vali hoặc túi khác mà quý vị muốn ký gửi.&nbsp;
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <svg
                        width="60"
                        height="102"
                        viewBox="0 0 60 102"
                        fill="none"
                        pointerEvents="all"
                        aria-hidden="true"
                        role="presentation"
                        data-testid="checkInBaggage-illustration"
                        style={{ marginRight: "10px" }}
                      >
                        <path
                          d="M39.3314 37.35V8.37975C39.3314 5.4086 36.854 3 33.798 3H25.5314C22.4754 3 19.998 5.40859 19.998 8.37975V37.35"
                          stroke="#163868"
                          strokeWidth="3.17593"
                        ></path>
                        <ellipse
                          cx="18.1418"
                          cy="97.8625"
                          rx="3.22778"
                          ry="3.13819"
                          fill="#163868"
                        ></ellipse>
                        <ellipse
                          cx="40.2707"
                          cy="97.8625"
                          rx="3.22778"
                          ry="3.13819"
                          fill="#163868"
                        ></ellipse>
                        <rect
                          x="2"
                          y="16.7722"
                          width="56"
                          height="81.6623"
                          rx="7.77795"
                          fill="#2B75BB"
                        ></rect>
                        <rect
                          x="12.001"
                          y="27.7578"
                          width="36"
                          height="3.24081"
                          rx="1.62041"
                          fill="#83B4E2"
                        ></rect>
                        <rect
                          x="8.8976"
                          y="39.6723"
                          width="42.2067"
                          height="46.8153"
                          rx="4.93684"
                          fill="#163868"
                          stroke="#83B4E2"
                          strokeWidth="1.79325"
                        ></rect>
                      </svg>
                      <div>
                        <fieldset
                          data-testid="checkInBaggage-radiogroup-0"
                          aria-invalid="false"
                          role="radiogroup"
                        >
                          <label
                            htmlFor="custom-option-checkInBaggage-content-false-0"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <input
                              id="custom-option-checkInBaggage-content-false-0"
                              name="checkInBaggage"
                              type="radio"
                              value="false"
                              style={{ marginRight: "5px" }}
                            />
                            <div>
                              <bdi style={{ marginBottom: "5px" }}>
                                Không bao gồm hành lý ký gửi
                              </bdi>
                            </div>
                          </label>
                          <label
                            htmlFor="custom-option-checkInBaggage-content-true-0"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <input
                              id="custom-option-checkInBaggage-content-true-0"
                              name="checkInBaggage"
                              type="radio"
                              value="true"
                              style={{ marginRight: "5px" }}
                            />
                            <div>
                              <bdi style={{ marginBottom: "5px" }}>
                                1 x 20 kg
                              </bdi>
                            </div>
                            <div style={{ marginLeft: "100px" }}>
                              <strong data-testid="toggleChoice-checkInBaggage-content-true-0-price">
                                ‪208.208&nbsp;₫‬
                              </strong>
                              <span data-testid="per-bound-label">/chân</span>
                            </div>
                          </label>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div style={{ height: "150px" }}></div>
              </div>
            </Form>
          </Container>
        </Container>
        <Container
          className="col-4"
          style={{
            borderTop: "0.5px solid black",
            marginTop: "20px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
          <div>
            <div class="_1h4lbz458 _1h4lbz461 _1h4lbz471 _1h4lbz46 css-z2syr1">
              <div class="css-1oy4rvw e1rcqxh00">
                <div
                  class="_1tlyzmp0 _1tlyzmp4"
                  data-testid="travelerDetails-cart"
                >
                  <div class="_1tlyzmpa _1tlyzmpe">
                    <h2 data-testid="cart-title" class="_1sbt9h52 _1sbt9h50">
                      <span style={{ fontFamily: " Verdana, sans-serif" }}>
                        Đơn Hàng Của Bạn
                      </span>
                    </h2>
                  </div>
                  <hr style={{ marginTop: "30px" }} />
                  <Container className="custom-container">
                    <Row className="trip-card">
                      <Col md={6}>
                        <div className="trip-info-item">
                          <h3 className="trip-info-title">Khởi hành</h3>
                          <div className="trip-info-date">
                            Thứ 3 13 thg 6 2023
                          </div>
                          <div className="trip-info-time">
                            <h3 className="trip-info-subtitle">
                              22:20 - 00:30
                            </h3>
                            (2h 10min)
                          </div>
                          <div className="trip-info-location">
                            SGN Thành phố Hồ Chí Minh - HAN Hà Nội
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="trip-info-item">
                          <h3 className="trip-info-title">Trở lại</h3>
                          <div className="trip-info-date">
                            Thứ 2 19 thg 6 2023
                          </div>
                          <div className="trip-info-time">
                            <h3 className="trip-info-subtitle">
                              23:45 - 01:55
                            </h3>
                            (2h 10min)
                          </div>
                          <div className="trip-info-location">
                            HAN Hà Nội - SGN Thành phố Hồ Chí Minh
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr style={{ marginTop: "30px" }} />
                    <Row className="justify-content-center">
                      <Col md={4}>
                        <button className="button-88" type="button">
                          Chi tiết lữ hành
                        </button>
                      </Col>
                    </Row>
                  </Container>
                  <Container>
                    <hr style={{ marginTop: "30px" }} />
                    <Row className="baggage-section">
                      <Col>
                        <h3 className="baggage-section-title">Túi</h3>
                        <h4 className="baggage-section-subtitle">
                          <span>
                            <div className="baggage-icon">
                              <svg
                                viewBox="0 0 20 20"
                                fill="none"
                                pointerEvents="all"
                                aria-hidden="true"
                                className="etiIcon"
                                role="presentation"
                                style={{ height: "20px", width: "20px" }}
                              >
                                <path
                                  d="M13.667 10H6.333c-.184 0-.333.174-.333.389v6.222c0 .215.15.389.333.389h7.334c.184 0 .333-.174.333-.389V10.39c0-.215-.15-.389-.333-.389z"
                                  stroke="#000"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M6 13h8m-6 0v1"
                                  stroke="#262626"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M12 13v1m1-4v-.295C13 9.335 10.576 2 10.2 2h-.4C9.424 2 7 9.336 7 9.705V10"
                                  stroke="#000"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <span>Vật dụng cá nhân</span>
                          </span>
                        </h4>
                        <div className="baggage-section-row">
                          <span>
                            Đã bao gồm vật dụng cá nhân cho tất cả hành khách
                          </span>
                        </div>
                        <h4 className="baggage-section-subtitle">
                          <span>
                            <div className="baggage-icon">
                              <svg
                                viewBox="0 0 32 32"
                                fill="none"
                                pointerEvents="all"
                                aria-hidden="true"
                                className="etiIcon"
                                role="presentation"
                                style={{ height: "20px", width: "20px" }}
                              >
                                <path
                                  d="M12.8 25.944h-2.667c-.294 0-.533-.322-.533-.72V13.72c0-.397.239-.719.533-.719h11.734c.294 0 .533.322.533.72v11.505c0 .397-.239.719-.533.719H19.2m-6.4 0V27.4m0-1.456h6.4m0 0V27.4m0-14.6V3.912c0-.189-.135-.37-.375-.503-.24-.134-.566-.209-.905-.209h-3.84c-.34 0-.665.075-.905.209-.24.133-.375.314-.375.503V12.8"
                                  stroke="#000"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <span>Hành lý xách tay</span>
                          </span>
                        </h4>
                        <div className="baggage-section-row">
                          <span>Đã bao gồm 1x7 kg cho tất cả hành khách</span>
                        </div>
                        <h4 className="baggage-section-subtitle">
                          <span>
                            <div className="baggage-icon">
                              <svg
                                viewBox="0 0 32 32"
                                fill="none"
                                pointerEvents="all"
                                aria-hidden="true"
                                className="etiIcon"
                                role="presentation"
                                style={{ height: "20px", width: "20px" }}
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M11.055 4.856A2.75 2.75 0 0113 4.05h6a2.75 2.75 0 012.75 2.75v1.621l-1.729 1.729H5.733a.205.205 0 00-.142.053.118.118 0 00-.041.086V24.51c0 .024.008.05.033.077L4.522 25.65a1.598 1.598 0 01-.472-1.138V10.289c0-.94.789-1.64 1.683-1.64h4.517V6.8c0-.73.29-1.429.805-1.944zm-1.78 21.697V27a.75.75 0 001.5 0v-.85h10.447V27a.75.75 0 101.5 0v-.85h3.545c.894 0 1.683-.7 1.683-1.64V10.289c0-.663-.394-1.207-.94-1.47l-1.332 1.332h.589c.062 0 .111.023.142.053.031.03.041.06.041.086v14.22c0 .026-.01.056-.04.085a.205.205 0 01-.143.054H11.178l-1.903 1.903zM20.25 6.8v1.85h-8.5V6.8A1.25 1.25 0 0113 5.55h6a1.25 1.25 0 011.25 1.25z"
                                  fill="#000"
                                ></path>
                                <path
                                  d="M5.47 26.469a.75.75 0 001.06 1.06l-1.06-1.06zm21.06-18.94a.75.75 0 00-1.06-1.06l1.06 1.06zm-20 20l20-20-1.06-1.06-20 20 1.06 1.06z"
                                  fill="#000"
                                ></path>
                              </svg>
                            </div>
                            <span>Hành lý ký gửi</span>
                          </span>
                        </h4>
                        <div className="baggage-section-row">
                          <span>Không chọn hành lý</span>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <hr style={{ marginTop: "30px" }} />
                  <Container>
                    <Row className="_1tlyzmpa _1tlyzmpe">
                      <Col className="jc7y7r0 sc6ej93">
                        <h3 className="_1sbt9h53 _1sbt9h50">
                          <span></span>
                        </h3>
                        <div className="cart-section">
                          <div className="cart-section-content">
                            <div className="cart-section-row">
                              <h4 className="_1sbt9h54 _1sbt9h50">
                                <span>Hành khách 1, người lớn</span>
                                &nbsp; &nbsp; ‪2.991.871&nbsp;₫‬
                              </h4>
                            </div>
                            <div className="cart-section-row">
                              <span>Giá mỗi người lớn</span>
                              <span className="cart-section-price">
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                ‪1.742.623&nbsp;₫‬
                              </span>
                            </div>
                            <div className="cart-section-row">
                              <span
                                className="ljym10"
                                role="button"
                                tabIndex="0"
                                data-testid="traveler-0-taxesAndFees-button"
                              >
                                Thuế và phí
                              </span>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              <span
                                style={{ marginLeft: "3px" }}
                                data-testid="cart-travelers-ADT-vat"
                                className="cart-section-price"
                              >
                                ‪1.249.248&nbsp;₫‬
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-testid="cart-extra-products"
                          className="cart-section"
                        >
                          <div className="cart-section-content">
                            <div className="cart-section-row">
                              <h4 className="_1sbt9h54 _1sbt9h50">
                                <span>Các dịch vụ bổ sung</span>
                              </h4>
                              <span
                                data-testid="extra-products-totalPrice"
                                className="cart-section-price"
                              >
                                ‪0&nbsp;₫‬
                              </span>
                            </div>
                            <div
                              data-testid="cart-product-mobileTravelPlan"
                              className="cart-section-row"
                            >
                              <span>Cập nhật chuyến bay qua SMS</span>
                              <span
                                data-testid="cart-product-mobileTravelPlan-price"
                                className="cart-section-price"
                              >
                                ‪0&nbsp;₫‬
                              </span>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <Container>
                    <Row className="_1tlyzmpa _1tlyzmpe">
                      <Col
                        data-testid="travelerDetails-cart-priceSummary"
                        className="price-summary"
                      >
                        <h3 className="_1sbt9h53 _1sbt9h50 css-l57rop">
                          <span>Tổng số tiền</span>
                        </h3>
                        <div className="price-section">
                          <span>Tổng phụ</span>
                          <span
                            style={{ marginLeft: "5px" }}
                            data-testid="travelerDetails-cart-priceSummary-subtotalPrice"
                            className="price-value"
                          >
                            ‪2.991.871&nbsp;₫‬
                          </span>
                        </div>
                        <div className="price-section">
                          <span
                            className="ljym10"
                            role="button"
                            tabIndex="0"
                            data-testid="travelerDetails-cart-priceSummary-fees-tooltip-link"
                          >
                            Tùy chọn thanh toán
                          </span>
                        </div>
                        <div className="price-section">
                          <h4 className="_1sbt9h54 _1sbt9h50">
                            <span>Số tiền phải trả</span>
                          </h4>
                          <span
                            className="notranslate price-value"
                            data-testid="travelerDetails-cart-priceSummary-totalPrice"
                          >
                            <strong>‪2.991.871&nbsp;₫‬</strong>
                          </span>
                        </div>
                        <br></br>
                        <Card className="text-center" style={{ border: "0" }}>
                          <button
                            style={{ margin: "auto", padding: "5%" }}
                            className="button-88"
                          >
                            Go To Checkout Page
                          </button>
                        </Card>
                        <br></br>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default PassengerMainBody;
