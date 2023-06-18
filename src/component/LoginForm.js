import React, {useEffect, useState, useRef} from "react";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import "../asset/css/style.css";
import "../asset/SignUpForm.css";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import {
    faTimes,
    faCheck,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {loginUser} from "../api/authAPI";

export default function LoginForm() {
    const response = useSelector((state) => state.auth.login?.error);

    const userRef = useRef();
    const errRef = useRef();
    const formRef = useRef();
    const [userName, setUserName] = useState("");
    const [userFocus, setUserFocus] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [password, setPassword] = useState("");
    const [pwdFocus, setpwdFocus] = useState(false);

    const [form, setForm] = useState({});

    const [errorMess, setErrorMess] = useState("");
    useEffect(() => {
        setErrorMess(response);
    }, [response]);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    const togglePasswordVisibility = () => {
        setpwdFocus(true);
        setShowPassword(!showPassword);
    };


    function handleChangeSignup(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "You want to login ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                swal({
                    icon: "success",
                    title: "Login Successfully",
                });
                setTimeout(() => {
                    swal.close();
                }, 1300);
                const data = {
                    account: form.username,
                    password: form.password,
                };
                await loginUser(data, dispatch, navigate);
            } else {
                swal("Login Failed");
            }
        });
    };

    return (
        <>

            <div className="body main">
                <section className="signup">
                    <img src="../asset/images/signup-bg.jpg" alt=""/>
                    <div className="container">
                        <div className="signup-content">
                            <Link to={"/"}>
                            <button type="button" class="btn btn-info">
                                back</button></Link>
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                id="signup-form"
                                className="signup-form"
                            >
                                <h2 className="form-title">Sign in</h2>
                                <div className="form-group">
                                    <label htmlFor="username">
                                        <h3>Username:</h3>
                                    </label>
                                    <input
                                        type="text"
                                        ref={userRef}
                                        className="form-input"
                                        id="username"
                                        name="username"
                                        autoComplete="off"
                                        onChange={(e) => {
                                            setUserName(e.target.value);
                                            handleChangeSignup(e);
                                        }}
                                        value={userName}
                                        required
                                        onFocus={() => setUserFocus(true)}
                                        onBlur={() => setUserFocus(false)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <h3> Password:</h3>
                                    </label>

                                    <span
                                        style={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            alignItems: "center",
                                        }}
                                    >
                      <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          name="password"
                          className="form-input"
                          onChange={(e) => {
                              setPassword(e.target.value);
                              handleChangeSignup(e);
                          }}
                          value={password}
                          required
                          onFocus={() => setpwdFocus(true)}
                          onBlur={() => {
                              setpwdFocus(false);
                          }}
                      />

                      <FontAwesomeIcon
                          style={{position: "absolute", marginRight: "16.5px"}}
                          fontSize={"20px"}
                          onClick={togglePasswordVisibility}
                          icon={showPassword ? faEyeSlash : faEye}
                      />
                    </span>
                                </div>
                                <br/>
                                <br/>
                                <div className="form-group">
                                    <input
                                        type="submit"
                                        name="submit"
                                        id="submit"
                                        className="form-submit my-input"
                                        value="Sign in"
                                    />
                                </div>
                            </form>

                            <p className="loginhere">
                                Don't have any account ?{" "}
                                <Link to="/register" className="loginhere-link">
                                    Sign up here
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}
