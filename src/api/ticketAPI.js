
import axios from "axios";
import {searchTicketFail,searchTicketStart,searchTicketSuccess} from "../features/ticket/ticketSlice";
import Swal from 'sweetalert2'

export const searchTicket = async (ticket, dispatch, navigate,token) => {
    const SearchTicket_API = "http://localhost:8080/api";
    dispatch(searchTicketStart());
    try {
        const res = await axios.get(`${SearchTicket_API}/users/${ticket}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        dispatch(searchTicketSuccess(res.data));
        let timerInterval
        Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
        setTimeout(() => {
            navigate("/passengerInfo")
        }, 2000);
    } catch (err) {
        dispatch(searchTicketFail());
        throw err;
    }
}

