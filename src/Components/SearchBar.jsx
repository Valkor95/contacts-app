import {TextField} from "@mui/material";

function SearchBar({searchTerm, setSearchTerm}) {
    return (
        <TextField
            label="Search contacts..."
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
}

export default SearchBar;