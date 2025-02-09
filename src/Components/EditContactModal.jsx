import {Dialog, DialogContent, DialogTitle, MenuItem, Stack, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {closeEditModal} from "../../store/slice/contactSlice.js";

function EditContactModal() {
    const dispatch = useDispatch()
    const {openEditModal, contactToEdit} = useSelector((state) => state.contacts)

    return (
        <Dialog open={openEditModal} onClose={() => dispatch(closeEditModal())}>
            <DialogTitle>
                EDIT THIS CONTACT
            </DialogTitle>
            <DialogContent>
                <form>
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
        </Dialog>
    );
}

export default EditContactModal;