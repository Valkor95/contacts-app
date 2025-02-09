import {Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Stack, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {closeEditModal, editContact} from "../../store/slice/contactSlice.js";
import {useFormState} from "react-dom";
import {green} from "@mui/material/colors";



function EditContactModal() {
    const dispatch = useDispatch()
    const {openEditModal, contactToEdit} = useSelector((state) => state.contacts)
    const successEdit = false;
    const initialState = {...contactToEdit, error: ""}

    const formAction = (prevState, formData) => {
        const name = formData.get("name");
        const phone = formData.get("phone");
        const category = formData.get("category")

        if (!name || !phone) return {...prevState, error: "Form is empty! All fields are required!"}

        dispatch(editContact({...contactToEdit, name, phone, category}));
        successEdit = true;

        setTimeout(function (){
            dispatch(closeEditModal())
        }, 5000)
    }

    const [state, action] = useFormState(formAction, initialState)
    return (
        <Dialog open={openEditModal} onClose={() => dispatch(closeEditModal())}>
            <DialogTitle>
                EDIT THIS CONTACT
            </DialogTitle>
            <DialogContent>
                <form action={action}>
                    <Stack spacing={2} sx={{mt: 1}}>
                        <TextField label="Name" name="name" defaultValue={contactToEdit.name} required/>
                        <TextField label="Phone" name="phone" defaultValue={contactToEdit.phone} required/>
                        <TextField select label="Category" name="category" defaultValue={contactToEdit.category}>
                            <MenuItem value="Personal">Personal</MenuItem>
                            <MenuItem value="Work">Work</MenuItem>
                            <MenuItem value="Family">Family</MenuItem>
                        </TextField>
                    </Stack>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => dispatch(closeEditModal())} color="secondary">
                    Cancel
                </Button>
                <Button type="submit" color="success">
                    Save
                </Button>
                {successEdit && <span style={{color: "green"}}>Edit is completed!</span>}
                {state.error && <span style={{color: "red"}}>{state.error}</span>}
            </DialogActions>
        </Dialog>
    );
}

export default EditContactModal;