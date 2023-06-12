import {
    searchStart,
    searchFail,
    searchSuccess
} from "../features/trip/tripSlice";
import axios from "axios";


export const SearchTrip = async (form, dispatch, navigate) => {
    const Search_API = "http://localhost:8080/api";
    dispatch(searchStart());

    console.log(1)
    try {
        console.log(2)
        const res = await axios.post(`${Search_API}/users/search`, form);
        dispatch(searchSuccess(res.data.content));
        setTimeout(() => {
            navigate(`/search-result/${form.departure}/${form.destination}/${form.departureDate}/${form.ticketClass}`)
        }, 1000);
    } catch (err) {
        dispatch(searchFail());
        throw err;
    }
}

