import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
    openEditModal: false,
    contactToEdit: null,
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
        openEditModal: (state, action) => {
            state.openEditModal = true;
            state.contactToEdit = action.payload;
        },
        closeEditModal: (state) => {
            state.openEditModal = false;
            state.contactToEdit = null;
        }
    },
});

export const {addContact, editContact, deleteContact, openEditModal, closeEditModal} = contactSlice.actions;
export default contactSlice.reducer;