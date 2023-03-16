import React, { Fragment, useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import PageName from '../components/PageName'
import {toast} from "react-toastify"
import UpdateForm from '../components/UpdateForm'
import contactService from '../services/contactService'


const Update = () => {
    const initialState = {
        name: "",
        email: "",
        contact: "",

    }

    const {id} = useParams()
    console.log(id)


    const handleEdit = async(id)=>{
        try {
             const contactSnap = await contactService.getContact(id)
             console.log(contactSnap.data())
             setState({
                name: contactSnap.data().name,
                email: contactSnap.data().email,
                contact: contactSnap.data().contact
             })
        } catch (error) {
            console.log(error)
        }
           
    }

    useEffect(()=>{
        if(id !== undefined && id !== "")
            {
               handleEdit()
            }
    },[id])

    const [state,setState] = useState(initialState)
    const {name,email,contact} = state
    const navigate = useNavigate()

    const handleInputChange = e =>{
      setState({...state,[e.target.name]:e.target.value})

    }
   
  return (
    <Fragment>
            <PageName title="Update"/>
            <UpdateForm 
            state = {state} 
            handleSubmit = {handleEdit} 
            handleInputChange = {handleInputChange}

            />
    </Fragment>
  
  )
}

export default Update