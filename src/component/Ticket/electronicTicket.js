import React from "react";
import "../../asset/css/eticket.css";
const YourComponent = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="alert custom-alert-color" role="alert">
          <div
            className="text-center"
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              {" "}
              <h3
                style={{
                  textAlign: "center",
                  padding: "0",
                  fontFamily: "Roboto Slab ",
                  fontWeight: "bolder",
                  fontSize: "5vw",
                }}
              >
                Electronic Ticket
              </h3>
            </div>
          </div>
          <table
            className="table align-middle tableColor"
            style={{ margin: "0 auto" }}
          >
            <thead>
              <tr>
                <th scope="col" style={{ paddingRight: "60px" }}>
                  Mã đặt chỗ(Số vé)
                </th>
                <th scope="col" style={{ paddingRight: "60px" }}>
                  1.Thông tin đặt chỗ
                </th>
                <th scope="col" style={{ paddingRight: "60px" }}>
                  2.Thông tin hành khách
                </th>
                <th scope="col" style={{ paddingRight: "60px" }}>
                  3.Thông tin chuyến bay
                </th>
              </tr>
            </thead>
            <tbody className="BodyColor">
              <tr>
                <td style={{ paddingRight: "60px" }}>
                  <p className="font-weight-bold">
                    <h5> Số vé:</h5>
                    <p>V8HRF9</p>
                  </p>
                </td>
                <td style={{ paddingRight: "60px" }}>
                  <h5>Trạng thái đặt chỗ:</h5>
                  <p>ĐÃ ĐẶT CHỖ</p>
                </td>
                <td style={{ paddingRight: "60px" }}>
                  <h5>Tên hành khách:</h5>
                  <p>NGUYEN THANH HOAI</p>
                </td>
                <td style={{ paddingRight: "60px" }}>
                  <h5>Chuyến bay:</h5>
                  <p>VJ163</p>
                </td>
              </tr>
              <tr className="align-bottom">
                <td></td>
                <td style={{ paddingRight: "60px" }}>
                  <h5>Ngày đặt:</h5>
                  <p>04/12/2022</p>
                </td>
                <td style={{ paddingRight: "60px" }}>
                  <h5>Số ghế:</h5> <p>VJ163</p>
                </td>
                <td style={{ paddingRight: "60px" }}>
                  <h5>Ngày:</h5>
                  <p>29/12/2022</p>
                </td>
              </tr>
              <tr>
                <td></td>
                <td style={{ paddingRight: "60px" }}>
                  <h5>Tên:</h5> <p>THANH HOAI NGUYEN</p>
                </td>
                <td></td>
                <td style={{ paddingRight: "60px" }}>
                  <h5>Loại vé:</h5>
                  <p>Eco</p>
                </td>
              </tr>
              <tr className="align-bottom">
                <td></td>
                <td style={{ paddingRight: "60px" }}>
                  <h5> Email:</h5>
                  <p>HUYANH@GMAIL</p>
                </td>
                <td></td>
                <td style={{ paddingRight: "60px" }}>
                  <h5>Khởi hành:</h5>
                  <p>Hà Nội</p> <p>Time:9 gioi 00</p>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <h5> Điểm đến:</h5>
                  <p>Hồ Chí Minh</p> <p>Time:11 gioi 30</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default YourComponent;
