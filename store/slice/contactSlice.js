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
            const contact = state.contacts.find((c) => c.id === id);
            if(contact){
                contact.name = name;
                contact.phone = phone;
                contact.category = category;
            }
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter((c) => c.id !== action.payload);
        },
    },
});

export const {addContact, editContact, deleteContact} = contactSlice.actions;
export default contactSlice.reducer;