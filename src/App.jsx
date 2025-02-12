import './App.css'
import ContactsList from "./Components/ContactsList.jsx";
import {Container} from "@mui/material";
import ContactForm from "./Components/ContactForm.jsx";
import {useSelector} from "react-redux";
import EditContactModal from "./Components/EditContactModal.jsx";
import {useState} from "react";
import MySnackBar from "./Components/MySnackBar.jsx";

function App() {
    const [successEdit, setSuccessEdit] = useState(false)
    const openEditModal = useSelector((state) => state.contacts.openEditModal)

  return (
    <>
        <Container sx={{mt:1}}>
            <ContactsList/>
            <ContactForm/>
        </Container>
        {openEditModal && <EditContactModal setSuccessEdit={setSuccessEdit}/>}
        {!openEditModal && successEdit && <MySnackBar successEdit={successEdit} setSuccessClose={setSuccessEdit}/>}
    </>
  )
}

export default App
