import React, {useEffect, useState, useRef} from "react";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import "../asset/css/style.css";
import "../asset/css/style.css.map";
import "../asset/SignUpForm.css";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import {
    faTimes,
    faCheck,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {signUpUser} from "../api/authAPI";

import {api} from "./axios";

const USERNAME_REGEX =
    /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
const EMAIL_REGEX =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const PASSWORD_REGEX =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;

const PHONE_REGEX =
    /^(?:\+84|0)(?:3[2-9]|5[2689]|7[06-9]|8[1-9]|9[0-4]|1[2-9])\d{7}$/;

export default function SignUpForm() {
    const userRef = useRef();
    const errRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const formRef = useRef();

    const errorUserNameRef = useRef();
    const errorEmailRef = useRef();
    const errorPhoneref = useRef();

    // const getClassNameEmail =() =>
    // {
    //   if(!email)
    //   {
    //     return "hide";
    //   }else{

    //   }
    // }

    const [userName, setUserName] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [showMatchPassword, setShowMatchPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [phone, setPhone] = useState("");
    const [validPhone, setValidPhone] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);

    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);
    const [pwdFocus, setpwdFocus] = useState(false);

    const [matchPwd, setmatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const [form, setForm] = useState({});

    const [messErrName, setMessErrName] = useState(false);

    const [messEmailErr, setMessEmailErr] = useState(false);

    const [messPhoneErr, setMessPhoneErr] = useState(false);

    // const handleBlur = (event) =>{
    //   if(event.target.name==="phone")
    //   {
    //     if(messPhoneErr)
    //     {
    //       errorPhoneref.current.className="invalid";
    //     }
    //   }
    // }

    const LOGIN_API = "http://localhost:8080/api";

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        api
            .get(`${LOGIN_API}/auth?account=${userName}`)
            .then((res) => setMessErrName(res.data))
            .catch((err) => {
                setMessErrName(err.response.data);
            });
    }, [userName, LOGIN_API]);

    useEffect(() => {
        api
            .get(`${LOGIN_API}/auth?account=${email}`)
            .then((res) => setMessEmailErr(res.data))
            .catch((err) => {
                setMessEmailErr(err.response.data);
            });
    }, [email, LOGIN_API]);

    useEffect(() => {
        api
            .get(`${LOGIN_API}/auth?account=${phone}`)
            .then((res) => setMessPhoneErr(res.data))
            .catch((err) => {
                setMessPhoneErr(err.response.data);
            });
    }, [phone, LOGIN_API]);

    const togglePasswordVisibility = () => {
        setpwdFocus(true);
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setMatchFocus(true);
        setShowMatchPassword(!showMatchPassword);
    };

    function handleChangeSignup(event) {
        handleValidateField(event);
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    }

    const handleValidateField = (event) => {
        switch (event.target.name) {
            case "username":
                if (!USERNAME_REGEX.test(event.target.value)) {
                    setValidName(false);
                } else {
                    setValidName(true);
                }
                break;
            case "email":
                if (!EMAIL_REGEX.test(event.target.value)) {
                    setValidEmail(false);
                } else {
                    setValidEmail(true);
                }
                break;
            case "phone":
                if (!PHONE_REGEX.test(event.target.value)) {
                    setValidPhone(false);
                } else {
                    setValidPhone(true);
                }
                break;
            case "password":
                if (!PASSWORD_REGEX.test(event.target.value)) {
                    setValidPassword(false);
                } else {
                    setValidPassword(true);
                }
                break;
            case "confirmPwd":
                if (!(password === event.target.value)) {
                    setValidMatch(false);
                } else {
                    setValidMatch(true);
                }
                break;

            default:
                return;
        }
    };

    const handleSubmit = () => {
        swal({
            title: "Are you sure?",
            text: "You want to register ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                submitFormHandler();

                swal("Register SuccessFully", {
                    icon: "success",
                });
            } else {
                swal("Register Failed");
            }
        });
    };
    let roles = [];

    const customer = {
        id: 2,
        name: "ROLE_CUSTOMER",
        desc: "Khách hàng",
    };
    roles.push(customer);

    const submitFormHandler = async () => {
        const data = {
            userName: userName,
            fullName: form.fullName || "No Name",
            email: email,
            password: form.password,
            phone: phone,
            roles,
        };
        await signUpUser(data, dispatch, navigate);
    };

    return (
        <>
            <div className="main body">

                <section className="signup">
                    <img src="images/signup-bg.jpg" alt=""/>
                    <div className="container">
                        <div className="signup-content">
                            <form
                                ref={formRef}
                                onSubmit={submitFormHandler}
                                id="signup-form"
                                className="signup-form"
                            >
                                <a className={"form-title"} href={"/"}>back</a>

                                <h2 className="form-title">Create account</h2>
                                <p
                                    ref={errRef}
                                    className={errMessage ? "errmsg" : "offscreen"}
                                    aria-live="assertive"
                                >
                                    {errMessage}
                                </p>
                                <div className="form-group">
                                    {messErrName && (
                                        <p
                                            className="error"
                                            style={{color: "red", backgroundColor: "whitesmoke"}}
                                        >
                                            This User Name already exists
                                        </p>
                                    )}
                                    <label htmlFor="username">
                                        <h3>
                                            Username:
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className={validName && !messErrName ? "valid" : "hide"}
                                            />
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                className={validName || !userName ? "hide" : "invalid"}
                                            />
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                className={!messErrName ? "hide" : "invalid"}
                                            />
                                        </h3>
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
                                        aria-invalid={validName ? "false" : "true"}
                                        aria-describedby="uidnote"
                                        onFocus={() => setUserFocus(true)}
                                        onBlur={() => setUserFocus(false)}
                                    />
                                    <p
                                        id="uidnote"
                                        className={
                                            userFocus && userName && !validName
                                                ? "instructions"
                                                : "offscreen"
                                        }
                                    >
                                        <FontAwesomeIcon icon={faInfoCircle} className="black"/>
                                        <span style={{color: "red"}}>
                      {" "}
                                            Must be at least 8 to 20 characters, without periods. _ at
                      the beginning of the middle name and at the end of the
                      name
                    </span>
                                    </p>
                                </div>
                                <div className="form-group">
                                    {messEmailErr && (
                                        <p
                                            className="error"
                                            style={{color: "red", backgroundColor: "whitesmoke"}}
                                        >
                                            This Email already exists
                                        </p>
                                    )}
                                    <label htmlFor="email">
                                        <h3>
                                            {" "}
                                            Email:
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className={
                                                    validEmail && !messEmailErr ? "valid" : "hide"
                                                }
                                            />
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                className={validEmail || !email ? "hide" : "invalid"}
                                            />
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                className={!messEmailErr ? "hide" : "invalid"}
                                            />
                                        </h3>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        id="email"
                                        name="email"
                                        ref={emailRef}
                                        autoComplete="off"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            handleChangeSignup(e);
                                        }}
                                        value={email}
                                        required
                                        aria-invalid={validEmail ? "false" : "true"}
                                        aria-describedby="emailnote"
                                        onFocus={() => setEmailFocus(true)}
                                        onBlur={() => setEmailFocus(false)}
                                    />
                                    <p
                                        id="emailnote"
                                        className={
                                            emailFocus && email && !validEmail
                                                ? "instructions"
                                                : "offscreen"
                                        }
                                    >
                                        <FontAwesomeIcon icon={faInfoCircle} className="black"/>
                                        <span style={{color: "red"}}> Invalid email address</span>
                                    </p>
                                </div>
                                <div className="form-group">
                                    {messPhoneErr && (
                                        <p
                                            className="error"
                                            style={{color: "red", backgroundColor: "whitesmoke"}}
                                        >
                                            This PhoneNumber already exists
                                        </p>
                                    )}
                                    <label htmlFor="phone">
                                        <h3>
                                            Phone:
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className={
                                                    validPhone && !messPhoneErr ? "valid" : "hide"
                                                }
                                            />
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                className={validPhone || !phone ? "hide" : "invalid"}
                                            />
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                className={!messPhoneErr ? "hide" : "invalid"}
                                            />
                                        </h3>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        id="phone"
                                        name="phone"
                                        ref={phoneRef}
                                        autoComplete="off"
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                            handleChangeSignup(e);
                                        }}
                                        value={phone}
                                        required
                                        aria-invalid={validPhone ? "false" : "true"}
                                        aria-describedby="phonenote"
                                        onFocus={() => setPhoneFocus(true)}
                                        onBlur={(e) => {
                                            setPhoneFocus(false);
                                        }}
                                        // handleBlur(e)}}
                                    />
                                    <p
                                        id="phonenote"
                                        className={
                                            phoneFocus && phone && !validPhone
                                                ? "instructions"
                                                : "offscreen"
                                        }
                                    >
                                        <FontAwesomeIcon icon={faInfoCircle} className="black"/>
                                        <span style={{color: "red"}}>
                      {" "}
                                            Invalid Phonenumber Format
                    </span>
                                    </p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <h3>
                                            {" "}
                                            Password:
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className={validPassword ? "valid" : "hide"}
                                            />
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                className={
                                                    validPassword || !password ? "hide" : "invalid"
                                                }
                                            />
                                        </h3>
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
                        aria-invalid={validPassword ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setpwdFocus(true)}
                        onBlur={() => {
                            setpwdFocus(false);
                            if (PASSWORD_REGEX.test(password)) {
                                const confirmPwdInput =
                                    document.getElementById("confirm_pwd");
                                confirmPwdInput.removeAttribute("disabled");
                            }
                        }}
                    />

                    <FontAwesomeIcon
                        style={{position: "absolute", marginRight: "16.5px"}}
                        fontSize={"20px"}
                        onClick={togglePasswordVisibility}
                        icon={showPassword ? faEyeSlash : faEye}
                    />
                  </span>

                                    <p
                                        id="pwdnote"
                                        className={
                                            pwdFocus && password && !validPassword
                                                ? "instructions"
                                                : "offscreen"
                                        }
                                    >
                                        <FontAwesomeIcon icon={faInfoCircle} className="black"/>
                                        <span style={{color: "red"}}>
                      Must have at least 8 characters, have uppercase letters,
                      lowercase letters, special characters
                    </span>
                                    </p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirm_pwd">
                                        <h3>
                                            {" "}
                                            Confirm Password:
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className={validMatch && matchPwd ? "valid" : "hide"}
                                            />
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                className={validMatch || !matchPwd ? "hide" : "invalid"}
                                            />
                                        </h3>
                                    </label>

                                    <span
                                        style={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            alignItems: "center",
                                        }}
                                    >
                    <input
                        type={showMatchPassword ? "text" : "password"}
                        id="confirm_pwd"
                        name="confirmPwd"
                        onChange={(e) => {
                            setmatchPwd(e.target.value);
                            handleChangeSignup(e);
                        }}
                        className="form-input"
                        value={matchPwd}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                        disabled
                    />
                    <FontAwesomeIcon
                        style={{position: "absolute", marginRight: "16.5px"}}
                        fontSize={"20px"}
                        onClick={toggleConfirmPasswordVisibility}
                        icon={showMatchPassword ? faEyeSlash : faEye}
                    />
                  </span>
                                    <p
                                        id="confirmnote"
                                        className={
                                            matchFocus && matchPwd && !validMatch
                                                ? "instructions"
                                                : "offscreen"
                                        }
                                    >
                                        <FontAwesomeIcon icon={faInfoCircle} className="black"/>
                                        <span style={{color: "red"}}>
                      Must match the first password input field.
                    </span>
                                    </p>
                                </div>
                                <br/>
                                <br/>
                                <div className="form-group">
                                    <input
                                        type="button"
                                        name="submit"
                                        id="submit"
                                        className="form-submit my-input"
                                        value="Sign up"
                                        disabled={
                                            !validName ||
                                            !validPassword ||
                                            !validMatch ||
                                            !validPhone ||
                                            !validEmail
                                                ? true
                                                : false
                                        }
                                        onClick={handleSubmit}
                                    />
                                </div>
                            </form>

                            <p className="loginhere">
                                Have already an account ?{" "}
                                <Link to="/login" className="loginhere-link">
                                    Login here
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
