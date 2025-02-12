import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    Stack,
    TextField
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {closeEditModal, editContact} from "../../store/slice/contactSlice.js";
import {useFormState} from "react-dom";
import {useState} from "react";



function EditContactModal() {
    const dispatch = useDispatch()
    const {openEditModal, contactToEdit} = useSelector((state) => state.contacts)
    const [loading, setLoading] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const initialState = {...contactToEdit, error: ""}

    const formAction = (prevState, formData) => {
        const name = formData.get("name");
        const phone = formData.get("phone");
        const category = formData.get("category")

        if (!name || !phone) return {...prevState, error: "Form is empty! All fields are required!"}

        const updatedContact = {...contactToEdit, name, phone, category}

        setLoading(true);
        dispatch(editContact(updatedContact));

        setTimeout(() => {
            setSnackbarOpen(true)
            dispatch(closeEditModal())
        }, 2000)

        return updatedContact
    }

    const [state, action] = useFormState(formAction, initialState)

    return (
        <Dialog open={openEditModal} onClose={() => dispatch(closeEditModal())}>
            <DialogContent sx={{minHeight: 200, minWidth: 200, display: "flex", alignItems: "center", justifyContent: "center"}}>
            { loading ? (<CircularProgress size={70} sx={{color: "green"}}/>) :
                (<form action={action} style={{width: "100%"}}>
                <DialogTitle textAlign="center">
                    EDIT THIS CONTACT
                </DialogTitle>

                    <Stack spacing={2} sx={{mt: 1}}>
                        <TextField label="Name" name="name" defaultValue={contactToEdit.name} required/>
                        <TextField label="Phone" name="phone" defaultValue={contactToEdit.phone} required/>
                        <TextField select label="Category" name="category" defaultValue={contactToEdit.category}>
                            <MenuItem value="Personal">Personal</MenuItem>
                            <MenuItem value="Work">Work</MenuItem>
                            <MenuItem value="Family">Family</MenuItem>
                        </TextField>
                    </Stack>

                <DialogActions sx={{ mt: 2 }}>
                    <Button onClick={() => dispatch(closeEditModal())} color="secondary">
                        Cancel
                    </Button>
                    <Button type="submit" color="success">
                       Save
                    </Button>
                    {state?.error && <span style={{color: "red", display: "block", textAlign: "center" }}>{state.error}</span>}
                </DialogActions>
            </form>)}
            </DialogContent>
        </Dialog>
    );
}

export default EditContactModal;