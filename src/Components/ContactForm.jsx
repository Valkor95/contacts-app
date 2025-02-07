import {useFormState, useFormStatus} from "react-dom";
import {useDispatch} from "react-redux";
import {addContact} from "../../store/slice/contactSlice.js";
import { v4 as uuidv4 } from "uuid";
import {Button, CircularProgress, MenuItem, Paper, Stack, TextField} from "@mui/material";

const initialState = {name: "", phone: "", category: "Personal", error: ""}

function ContactForm() {
    const dispatch = useDispatch();

    const formAction = async (prevState, formData) => {
        const name = formData.get("name");
        const phone = formData.get("phone");
        const category = formData.get("category")

        if (!name || !phone) return {...prevState, error: "Form is empty! All fields are required!"};

        dispatch(addContact({id: uuidv4(), name, phone, category}));
        return {...initialState};
    }

    const [state, action] = useFormState(formAction, initialState);
    const {isSubmitting, submitCount} = useFormStatus();

    return (
        <Paper sx={{p: 2, mb: 3}}>
            <form action={action}>
                <Stack spacing={2}>
                    <TextField label="Name" name="name" defaultValue={state.name} required/>
                    <TextField label="" name="phone" defaultValue={state.phone} required/>
                    <TextField select label="" name="category" defaultValue={state.category}>
                        <MenuItem value="Personal">Personal</MenuItem>
                        <MenuItem value="Work">Work</MenuItem>
                        <MenuItem value="Family">Family</MenuItem>
                    </TextField>
                    <Button type="submit" variant="contained" disabled={isSubmitting}>
                        {isSubmitting ? <CircularProgress size={24}/> : "Add new contact"}
                    </Button>
                    {submitCount > 0 && !isSubmitting && <span>Form successfully submitted!</span>}
                    {state.error && <span style={{color: "red"}}>{state.error}</span>}
                </Stack>
            </form>
        </Paper>
    );
}

export default ContactForm;