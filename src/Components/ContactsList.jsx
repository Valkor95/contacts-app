import {useSelector} from "react-redux";
import {List, Typography} from "@mui/material";
import ContactItem from "./ContactItem.jsx";
import {useState} from "react";

function ContactsList() {
    const contacts = useSelector((state) => state.contacts.contacts)
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("All")

    const filteredContacts = contacts.filter((contact) => {
        const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                contact.phone.includes(searchTerm);
        const matchesCategory = category === "All" || contact.category === category;
        return matchesSearch && matchesCategory
    })

    return (
        <>
            <Typography variant="h2" gutterBottom>
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