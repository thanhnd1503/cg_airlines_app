import {
    searchStart,
    searchFail,
    searchSuccess
} from "../features/trip/tripSlice";
import axios from "axios";


export const SearchTrip = async (form, dispatch, navigate,token) => {
    const Search_API = "http://localhost:8080/api";
    dispatch(searchStart());

    try {
        const res = await axios.post(`${Search_API}/users/search`, form,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        dispatch(searchSuccess(res.data.content));

        setTimeout(() => {
            navigate(`/search-result/${form.departure}/${form.destination}/${form.departureDate}`)
        }, 1000);
    } catch (err) {
        dispatch(searchFail());
        throw err;
    }
}

