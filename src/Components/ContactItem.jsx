import {useDispatch} from "react-redux";
import {Button, Card, CardContent, Stack, Typography} from "@mui/material";

function ContactItem({contact}) {
    const dispatch = useDispatch()

    return (
        <Card sx={{mb: 2, p: 1}}>
            <CardContent>
                <Typography></Typography>
                <Typography></Typography>
                <Typography></Typography>
                <Stack>
                    <Button>

                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default ContactItem;