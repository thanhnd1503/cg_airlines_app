import {createSlice} from "@reduxjs/toolkit";

const ticketSlice = createSlice({
    name: "ticket",
    initialState: {
        ticket: {
            currentTicket: null,
            isFetching: false,
            error: false,
            success:false,
        },
    },
    reducers: {
        searchTicketStart: (state) => {
            state.ticket.isFetching = true;
        },
        searchTicketSuccess: (state, action) => {
            state.ticket.isFetching = false;
            state.ticket.currentTicket = action.payload;
            state.ticket.error = false;
            state.ticket.success= true;
        },
        searchTicketFail: (state) => {
            state.ticket.isFetching = false;
            state.ticket.error = true;
            state.ticket.success =false;
        },

    },

})
export const {
    searchTicketFail,
    searchTicketStart,
    searchTicketSuccess

} = ticketSlice.actions;

export default ticketSlice.reducer;