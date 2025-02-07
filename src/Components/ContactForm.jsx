import {useFormState, useFormStatus} from "react-dom";
import {useDispatch} from "react-redux";
import {addContact} from "../../store/slice/contactSlice.js";
import { v4 as uuidv4 } from "uuid";

const initialState = {name: "", phone: "", category: "Personal"}

function ContactForm() {
    const dispatch = useDispatch();

    const formAction = async (prevstate, formData) => {
        const name = formData.get("name");
        const phone = formData.get("phone");
        const category = formData.get("category")

        if (!name || !phone) return prevstate;
        dispatch(addContact({id: uuidv4(), name, phone, category}));
        return initialState;
    }

    const [state, action] = useFormState(formAction, initialState);
    const {isSubmitting, submitCount} = useFormStatus();

    return (
        <div>

        </div>
    );
}

export default ContactForm;