import {Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Stack, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {closeEditModal, editContact} from "../../store/slice/contactSlice.js";
import {useFormState} from "react-dom";



function EditContactModal() {
    const dispatch = useDispatch()
    const {openEditModal, contactToEdit} = useSelector((state) => state.contacts)

    const initialState = {...contactToEdit, error: ""}

    const formAction = (prevState, formData) => {
        const name = formData.get("name");
        const phone = formData.get("phone");
        const category = formData.get("category")

        if (!name || !phone) return {...prevState, error: "Form is empty! All fields are required!"}

        const updatedContact = {...contactToEdit, name, phone, category}

        dispatch(editContact(updatedContact));

        dispatch(closeEditModal())

    }

    const [state, action] = useFormState(formAction, initialState)
    return (
        <Dialog open={openEditModal} onClose={() => dispatch(closeEditModal())}>
            <form action={action}>
                <DialogTitle>
                    EDIT THIS CONTACT
                </DialogTitle>
                <DialogContent>

                    <Stack spacing={2} sx={{mt: 1}}>
                        <TextField label="Name" name="name" defaultValue={contactToEdit.name} required/>
                        <TextField label="Phone" name="phone" defaultValue={contactToEdit.phone} required/>
                        <TextField select label="Category" name="category" defaultValue={contactToEdit.category}>
                            <MenuItem value="Personal">Personal</MenuItem>
                            <MenuItem value="Work">Work</MenuItem>
                            <MenuItem value="Family">Family</MenuItem>
                        </TextField>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => dispatch(closeEditModal())} color="secondary">
                        Cancel
                    </Button>
                    <Button type="submit" color="success">
                        Save
                    </Button>
                    {state?.error && <span style={{color: "red"}}>{state.error}</span>}
                </DialogActions>
            </form>
        </Dialog>
    );
}

export default EditContactModal;