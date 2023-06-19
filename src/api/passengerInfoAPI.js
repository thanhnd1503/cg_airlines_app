
import axios from "axios";
import {savePassengerFail,savePassengerStart,savePassengerSuccess} from "../features/passenger/passengerSlice";
import { searchTicketSuccess,searchTicketFail,searchTicketStart } from "../features/ticket/ticketSlice";


export const savePassenger = async (form, dispatch, navigate,token,userId) => {
    const API = "http://localhost:8080/api";
    dispatch(savePassengerStart());
    try {
        const res = await axios.post(`${API}/users/${userId}/book`,form,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        dispatch(savePassengerSuccess(res.data));
        setTimeout(() => {
            navigate("/invoice")
        }, 1000);
    } catch (err) {
        dispatch(savePassengerFail());
        throw err;
    }
}


export const searchTicketPassenger = async (token,ticketId,dispatch) => {
    const API = "http://localhost:8080/api";
    dispatch(searchTicketStart());
    try {
        const res = await axios.get(`${API}/users/ticket/${ticketId}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        dispatch(searchTicketSuccess(res.data));
    } catch (err) {
        dispatch(searchTicketFail());
        throw err;
    }
}


