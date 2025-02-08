import {useSelector} from "react-redux";
import {List, Paper, Stack, Typography} from "@mui/material";
import ContactItem from "./ContactItem.jsx";
import {useState} from "react";
import SearchBar from "./SearchBar.jsx";
import FilterByCategory from "./FilterByCategory.jsx";

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
        <Paper sx={{p: 2, mb: 2}}>
            <Typography variant="h2" gutterBottom>
                Contact list
            </Typography>

            <Stack spacing={2} sx={{mb: 2}}>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <FilterByCategory category={category} setCategory={setCategory}/>
            </Stack>
            {filteredContacts.length === 0 ? (
                <Typography variant="body1">No contacts found</Typography>
            ) : (
                <List>
                    {filteredContacts.map((contact) => (
                        <ContactItem key={contact.id} contact={contact}/>
                    ))}
                </List>
            )}
        </Paper>
    );
}

export default ContactsList;