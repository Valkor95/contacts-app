import {Dialog, DialogContent, DialogTitle} from "@mui/material";
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

            </DialogContent>
        </Dialog>
    );
}

export default EditContactModal;