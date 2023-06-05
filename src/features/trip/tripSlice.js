import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    findtrips,
    findtrip,
    createtrip,
    updatetrip,
    deletetrip,
} from "../../api/tripApi";

const initialState = {
    values: null,
    value: null,
    loading: false,
    error: null,
    success: false,
};

export const getTrips = createAsyncThunk("trip/list", async (term) => {
    const response = await findtrips();
    return response.data;
});

export const gettrip = createAsyncThunk("trip/detail", async (tripId) => {
    const response = await findtrip(tripId);
    return response.data;
});

export const addtrip = createAsyncThunk("trip/create", async (trip) => {
    const response = await createtrip(trip);
    return response.data;
});

export const edittrip = createAsyncThunk("trip/edit", async (trip) => {
    const response = await updatetrip(trip);
    return response.data;
});

export const removetrip = createAsyncThunk("trip/remove", async (tripId) => {
    const response = await deletetrip(tripId);
    return response.data;
});

export const tripSlice = createSlice({
    name: "trip",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setSuccess: (state, action) => {
            state.success = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            //Update states of get books action
            .addCase(getTrips.pending, (state) => {
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(getTrips.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(getTrips.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.values = action.payload;
                state.error = false;
            })

            //Update states of get book action
            .addCase(gettrip.pending, (state) => {
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(gettrip.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(gettrip.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.value = action.payload;
                state.error = false;
            })

            //Update states of add book action
            .addCase(addtrip.pending, (state) => {
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(addtrip.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(addtrip.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.value = action.payload;
                state.error = false;
            })

            //Update states of edit book action
            .addCase(edittrip.pending, (state) => {
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(edittrip.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(edittrip.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.value = action.payload;
                state.error = false;
            })

            //Update states of remove book action
            .addCase(removetrip.pending, (state) => {
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(removetrip.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(removetrip.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.value = action.payload;
                state.error = false;
            });
    },
});

export const { setLoading, setError, setSuccess } = tripSlice.actions;

export const selectLoading = (state) => state.trip.loading;
export const selectError = (state) => state.trip.error;
export const selectSuccess = (state) => state.trip.success;
export const selectTripList = (state) => state.trip.values;
export const selectTripDetail = (state) => state.trip.value;
export const selectTripAdded = (state) => state.trip.value;
export const selectTripEdited = (state) => state.trip.value;
export const selectTripRemoved = (state) => state.trip.value;

//Enhancement feature of trip slice
export const setLoadingTrueIfCalled = (isCalled) => (dispatch, getState) => {
    const currentValue = selectLoading(getState());
    if (currentValue === isCalled) {
        dispatch(setLoading(true));
    }
};

export default tripSlice.reducer;
