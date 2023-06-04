import { api } from "../component/axios";
import {
    loginFail,
    loginStart,
    loginSuccess,
    registerFail,
    registerStart,
    registerSuccess,
    logoutStart,
    logoutSuccess,
    logoutFail,
} from "../features/slice/authSlice";




export const signUpUser = async (data, dispatch, navigate) => {
    const LOGIN_API="http://localhost:8080/api";
    dispatch(registerStart());
    try {
        const res = await api.post(`${LOGIN_API}/auth/register`, data);
        dispatch(registerSuccess());
        setTimeout(() => {
            navigate("/login")
        }, 1000);
        return res.data;

    } catch (err) {
        dispatch(registerFail(err.response.data));
    }
}


export const loginUser = async (form, dispatch, navigate) => {
    const LOGIN_API = "http://localhost:8080/api";
    dispatch(loginStart());
    try {
        const res = await api.post(`${LOGIN_API}/auth/login`, form);
        dispatch(loginSuccess(res.data));
        setTimeout(() => {
            navigate("/");
        }, 1000);

    } catch (err) {
        dispatch(loginFail());
    }
}

export const logout = async (dispatch,navigate) =>{
    dispatch(logoutStart());
    try{
        localStorage.removeItem('persist:root')
        dispatch(logoutSuccess());
        navigate("/")
    }catch (err){
        dispatch(logoutFail());
    }
}
