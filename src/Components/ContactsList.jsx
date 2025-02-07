import {useSelector} from "react-redux";
import {List, Typography} from "@mui/material";
import ContactItem from "./ContactItem.jsx";

function ContactsList() {
    const contacts = useSelector((state) => state.contacts.contacts)

    return (
        <>
            <Typography variant="h5" gutterBottom>
                Contact list
            </Typography>
            {contacts.length === 0 ? (
                <Typography variant="body1">No contacts</Typography>
            ) : (
                <List>
                    {contacts.map((contact) => (
                        <ContactItem key={contact.id} contact={contact}/>
                    ))}
                </List>
            )}
        </>
    );
}

export default ContactsList;