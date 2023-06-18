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
import {useSelector} from "react-redux";

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
          className="col-12"
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
                      />
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
      </div>
    </>
  );
}

export default PassengerMainBody;
