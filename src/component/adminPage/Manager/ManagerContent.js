import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,

} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
function ManagerContent() {
    const userName = useSelector((state) => state.auth?.login?.currentUser?.userDtoResponse.fullName);
    const userEmail = useSelector((state) => state.auth?.login?.currentUser?.userDtoResponse.email);
    const userRole = useSelector((state) => state.auth?.login?.currentUser?.userDtoResponse?.userRoleDtos[0]?.roleDtoResponse?.desc);

    console.log(userName)
    return (
        <main>
            <div className="container-fluid">
                <section style={{ backgroundColor: '#eee' }}>
                    <MDBContainer className="py-5">
                        <MDBRow>
                            <MDBCol>
                                <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                                    <MDBBreadcrumbItem>
                                        <a href='#'>Home</a>
                                    </MDBBreadcrumbItem>
                                    <MDBBreadcrumbItem>
                                        <a href="#"> tiền sử </a>
                                    </MDBBreadcrumbItem>
                                    <MDBBreadcrumbItem active> cá nhân </MDBBreadcrumbItem>
                                </MDBBreadcrumb>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol lg="4">
                                <MDBCard className="mb-4">
                                    <MDBCardBody className="text-center">
                                        <MDBCardImage
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                            alt="avatar"
                                            className="rounded-circle"
                                            style={{ width: '150px' }}
                                            fluid />
                                        <p className="text-muted mb-1">Full Stack Developer</p>
                                        <p className="text-muted mb-4">Quanh quẩn Việt Nam</p>
                                        <div className="d-flex justify-content-center mb-2">

                                        </div>
                                    </MDBCardBody>
                                </MDBCard>

                                <MDBCard className="mb-4 mb-lg-0">
                                    <MDBCardBody className="p-0">
                                        <MDBListGroup flush className="rounded-3">
                                            <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                <MDBIcon fas icon="globe fa-lg text-warning" />
                                                <MDBCardText>chưa có </MDBCardText>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                                                <MDBCardText><a href={"https://github.com/thanhnd1503"}>github.com</a> </MDBCardText>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                                                <MDBCardText>chưa có</MDBCardText>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                                                <MDBCardText>chưa có</MDBCardText>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                                                <MDBCardText>chưa có</MDBCardText>
                                            </MDBListGroupItem>
                                        </MDBListGroup>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol lg="8">
                                <MDBCard className="mb-4">
                                    <MDBCardBody>
                                        <MDBRow>
                                            <MDBCol sm="3">
                                                <MDBCardText>Tên</MDBCardText>
                                            </MDBCol>
                                            <MDBCol sm="9">
                                                <MDBCardText className="text-muted">{userName}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>

                                        <hr />
                                        <MDBRow>
                                            <MDBCol sm="3">
                                                <MDBCardText>Chức vụ</MDBCardText>
                                            </MDBCol>
                                            <MDBCol sm="9">
                                                <MDBCardText className="text-muted">{userRole}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                            <MDBCol sm="3">
                                                <MDBCardText>Email</MDBCardText>
                                            </MDBCol>
                                            <MDBCol sm="9">
                                                <MDBCardText className="text-muted">{userEmail}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                            <MDBCol sm="3">
                                                <MDBCardText> Điện Thoại </MDBCardText>
                                            </MDBCol>
                                            <MDBCol sm="9">
                                                <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                            <MDBCol sm="3">
                                                <MDBCardText>Address</MDBCardText>
                                            </MDBCol>
                                            <MDBCol sm="9">
                                                <MDBCardText className="text-muted"> Việt Nam</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCardBody>
                                </MDBCard>

                                <MDBRow>
                                    <MDBCol md="6">
                                        <MDBCard className="mb-4 mb-md-0">
                                            <MDBCardBody>
                                                <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                                                <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                                                <MDBProgress className="rounded">
                                                    <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                                </MDBProgress>

                                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                                                <MDBProgress className="rounded">
                                                    <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                                                </MDBProgress>

                                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                                                <MDBProgress className="rounded">
                                                    <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                                                </MDBProgress>

                                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                                                <MDBProgress className="rounded">
                                                    <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                                </MDBProgress>

                                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                                                <MDBProgress className="rounded">
                                                    <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                                                </MDBProgress>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol md="6">
                                        <MDBCard className="mb-4 mb-md-0">
                                            <MDBCardBody>
                                                <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                                                <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                                                <MDBProgress className="rounded">
                                                    <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                                </MDBProgress>

                                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                                                <MDBProgress className="rounded">
                                                    <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                                                </MDBProgress>

                                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                                                <MDBProgress className="rounded">
                                                    <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                                                </MDBProgress>

                                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                                                <MDBProgress className="rounded">
                                                    <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                                </MDBProgress>

                                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                                                <MDBProgress className="rounded">
                                                    <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                                                </MDBProgress>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
            </div>
        </main>
    );
}

export default ManagerContent;
