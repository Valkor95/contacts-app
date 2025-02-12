import React from 'react';
import {Snackbar} from "@mui/material";

function MySnackBar({successEdit, setSuccessClose}) {
    return (
        <Snackbar
            open={successEdit}
            autoHideDuration={3000}
            onClose={setSuccessClose}
            message="Contact updated successfully!"
            anchorOrigin={{vertical: "bottom", horizontal: "right"}}
        />
    );
}

export default MySnackBar;