import {MenuItem, TextField} from "@mui/material";

function FilterByCategory({category, setCategory}) {
    return (
        <TextField select label="Filter by category" fullWidth value={category} onChange={(e) => setCategory(e.target.value)}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Personal">Personal</MenuItem>
            <MenuItem value="Work">Work</MenuItem>
            <MenuItem value="Family">Family</MenuItem>
        </TextField>
    );
}

export default FilterByCategory;