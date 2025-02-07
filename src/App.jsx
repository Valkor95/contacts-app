import './App.css'
import ContactsList from "./Components/ContactsList.jsx";
import {Container} from "@mui/material";
import ContactForm from "./Components/ContactForm.jsx";

function App() {

  return (
    <>
        <Container sx={{mt:1}}>
            <ContactsList/>
            <ContactForm/>
        </Container>

    </>
  )
}

export default App
