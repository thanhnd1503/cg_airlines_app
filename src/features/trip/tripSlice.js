import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        search: {
            currentUser: null,
            isFetching: false,
            error: false
        },
    },
    reducers: {
        searchStart: (state) => {
            state.search.isFetching = true;
        },
        searchSuccess: (state, action) => {
            state.search.isFetching = false;
            state.search.currentUser = action.payload;
            state.search.error = false
        },
        searchFail: (state) => {
            state.search.isFetching = false;
            state.search.error = true
        },

    },

})
export const {
    searchStart,
    searchSuccess,
    searchFail,

} = searchSlice.actions;

export default searchSlice.reducer;