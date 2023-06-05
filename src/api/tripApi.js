import axios from "axios";

const CG_trip_API = "https://646dc5f59c677e23218a6208.mockapi.io";

export const findtrips = async () => {
    let result = null;
    try {
        result = await axios.get(`${CG_trip_API}/trip`);
    } catch (e) {
        console.log("Find trips API error: " + e);
    }
    return result;
};

export const findtrip = async (tripId) => {
    let result = null;
    try {
        result = await axios.get(`${CG_trip_API}/trip/${tripId}`);
    } catch (e) {
        console.log("Find trip API error: " + e);
    }
    return result;
};

export const createtrip = async (trip) => {
    let result = null;
    try {
        result = await axios.post(`${CG_trip_API}/trip`, trip);
    } catch (e) {
        console.log("Find trip API error: " + e);
    }
    return result;
};

export const updatetrip = async (trip) => {
    let result = null;
    try {
        result = await axios.put(`${CG_trip_API}/trip/${trip.id}`, trip);
    } catch (e) {
        console.log("Update trip API error: " + e);
    }
    return result;
};

export const deletetrip = async (tripId) => {
    let result = null;
    try {
        result = await axios.delete(`${CG_trip_API}/trip/${tripId}`);
    } catch (e) {
        console.log("Delete trip API error: " + e);
    }
    return result;
};
