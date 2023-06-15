import { Breadcrumb, Layout } from "antd";

// import { Outlet } from "react-router-dom";
// import Navbar from "../Navbar/NavbarInvoice";
import moment from "moment";
const { Header } = Layout;
function ticketBooking() {
  const currentDate = moment().format("YYYY-MM-DD");
  return (
    <div>
      <Layout>\\</Layout>
      
      <main id="mainContainer">
        <div className="container ">
          <section className="section">
            <div className="row justify-content-between">
              <div className="col-4">KHỞI HÀNH: {currentDate}</div>
            </div>
            <div
              className="rounded-2 "
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 5 }}
              layout="horizontal"
              style={{
                width: "100%",
                height: "40%",
                margin: "auto",
                border: "1",
                background: "#E5E9F2",
              }}
            >
              <div class="productinfo text-center">
                <div className="d-sm-inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-airplane"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z" />
                  </svg>
                  <b>CG Arline</b> <br></br>
                  <b>CG123</b>
                </div>
                &emsp;&emsp;&emsp;&emsp;
                <div className="d-sm-inline-block">
                  <b>TP.Hồ Chí Minh</b> <br></br>
                  <b>06:00</b>
                </div>
                &emsp;-----------------------
                <img
                  src="https://www.vietjetair.com/static/media/icon_flight.c92d4c69.svg"
                  width={50}
                />
                -----------------------&emsp;
                <div className="d-sm-inline-block">
                  <b>TP.Hà Nội</b> <br></br>
                  <b>08:00</b>
                </div>
                &emsp;&emsp;&emsp;&emsp;
                <div className="d-sm-inline-block">
                  <b>Ghế</b> <br></br>
                  <b>A5</b>
                </div>
                &emsp;&emsp;&emsp;&emsp;
                <div className="d-sm-inline-block">
                  <b>Hành lý ký gửi không bao gồm</b> <br></br>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-bag-x-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6.854 8.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293 6.854 8.146z"
                    />
                  </svg>
                </div>
                <hr></hr>
                <div>
                  <h1 className="d-sm-inline-block" style={{}}>
                    Total:
                  </h1>{" "}
                  &emsp;
                  <h1 className="d-sm-inline-block">100$</h1>
                  <button type="button" className="btn btn-success">
                    Đặt trước
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default ticketBooking;
