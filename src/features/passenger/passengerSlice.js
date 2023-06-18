import {createSlice} from "@reduxjs/toolkit";

const passengerSlice = createSlice({
    name: "passenger",
    initialState: {
        passenger: {
            currentPassenger: null,
            isFetching: false,
            error: false,
            success:false,
        },
       
    },
    reducers: {
        savePassengerStart: (state) => {
            state.passenger.isFetching = true;
        },
        savePassengerSuccess: (state, action) => {
            state.passenger.isFetching = false;
            state.passenger.currentPassenger = action.payload;
            state.passenger.error = false;
            state.passenger.success= true;
        },
        savePassengerFail: (state) => {
            state.passenger.isFetching = false;
            state.passenger.error = true;
            state.passenger.success =false;
        },

    

    },

})
export const {
    savePassengerStart,
    savePassengerSuccess,
    savePassengerFail,

} = passengerSlice.actions;

export default passengerSlice.reducer;