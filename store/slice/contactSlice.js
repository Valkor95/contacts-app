import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
};

const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        editContact: (state, action) => {
            const {id, name, phone, category} = action.payload;
            const index = state.contacts.findIndex((c) => c.id === id);
            if(index !== -1){
                state.contacts[index] = {...state.contacts[index], name, phone, category}
            }
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter((c) => c.id !== action.payload);
        },
    },
});

export const {addContact, editContact, deleteContact} = contactSlice.actions;
export default contactSlice.reducer;