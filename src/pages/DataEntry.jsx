import React, { Fragment, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import {firebasedb} from "../config/firebase"
import PageName from '../components/PageName'
import {toast} from "react-toastify"
import Form from '../components/Form'
import { addDoc,serverTimestamp,collection } from 'firebase/firestore'
import contactService from '../services/contactService'


const DataEntry = () => {
    const initialState = {
        name: "",
        email: "",
        contact: "",

    }

    

    const [state,setState] = useState(initialState)
    const {name,email,contact} = state
    const navigate = useNavigate()

    const handleInputChange = e =>{
      setState({...state,[e.target.name]:e.target.value})

    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const {name,email,contact} = state
        if(!name || !email || !contact){
          toast.error("Fields are blank")
          return;
          }  

          try {
            await contactService.addContact(state)
            toast.success("The contact was added")
            navigate("/")
          } catch (error) {
            console.log(error)
          }
    }
  return (
    <Fragment>
            <PageName title="Add / Edit"/>
            <Form 
            state = {state} 
            handleSubmit = {handleSubmit} 
            handleInputChange = {handleInputChange}

            />
    </Fragment>
  
  )
}

export default DataEntry