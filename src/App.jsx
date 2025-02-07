import './App.css'
import ContactsList from "./Components/ContactsList.jsx";
import {Container} from "@mui/material";

function App() {

  return (
    <>
        <Container sx={{mt:1}}>
            <ContactsList/>
        </Container>

    </>
  )
}

export default App
