import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

function tripListContent() {

  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-4">Các chuyến bay</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item">
            <a href="index.html">Dashboard</a>
          </li>
          <li className="breadcrumb-item active">Danh sách chuyến bay</li>
        </ol>
        <div className="card mb-4">
          <div className="card-header d-flex justify-content-between">
            <span>
              <i className="fas fa-table mr-1"></i>
              Các chuyến bay
            </span>
            <span>
              <Link to={"/add-staff"} type="button" class="btn btn-primary">
                Thêm chuyến bay
              </Link>
            </span>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th> Từ  </th>
                    <th>Đến </th>
                    <th>Ngày khởi hành</th>

                    <th colSpan={2}>Action</th>
                  </tr>
                </thead>

                <tbody>
               
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default tripListContent;
