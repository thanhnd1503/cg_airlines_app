
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/slice/authSlice";

import searchReducer from "../features/trip/tripSlice";
import ticketReducer from "../features/ticket/ticketSlice"
import passengerReducer from "../features/passenger/passengerSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    auth: authReducer,
    search: searchReducer,
    ticket: ticketReducer,
    passenger:passengerReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

});
export let persistor = persistStore(store);
