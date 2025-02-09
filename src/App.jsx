import './App.css'
import ContactsList from "./Components/ContactsList.jsx";
import {Container} from "@mui/material";
import ContactForm from "./Components/ContactForm.jsx";
import {useSelector} from "react-redux";
import EditContactModal from "./Components/EditContactModal.jsx";

function App() {
    const openEditModal = useSelector((state) => state.contacts.openEditModal)

  return (
    <>
        <Container sx={{mt:1}}>
            <ContactsList/>
            <ContactForm/>
        </Container>
        {openEditModal && <EditContactModal/>}
    </>
  )
}

export default App
