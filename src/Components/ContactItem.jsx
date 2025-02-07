import {useDispatch} from "react-redux";
import {Button, Card, CardContent, Stack, Typography} from "@mui/material";
import {deleteContact} from "../../store/slice/contactSlice.js";

// eslint-disable-next-line react/prop-types
function ContactItem({contact}) {
    const dispatch = useDispatch()

    return (
        <Card sx={{mb: 2, p: 1}}>
            <CardContent>
                <Typography variant="h6">{contact.name}</Typography>
                <Typography variant="body1">Phone: {contact.phone}</Typography>
                <Typography variant="body2" color="text.secondary">Category: {contact.category}</Typography>
                <Stack direction="row" spacing={1} sx={{mt:1}}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => dispatch(deleteContact(contact.id))}
                    >
                        Delete
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default ContactItem;