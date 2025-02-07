import {configureStore} from "@reduxjs/toolkit";
import contactsReducer from "./slice/contactSlice.js"
export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
})