import React, { Fragment, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import {firebasedb} from "../config/firebase"
import PageName from '../components/PageName'
import {toast} from "react-toastify"
import Form from '../components/Form'
import { addDoc,serverTimestamp,collection } from 'firebase/firestore'

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
        console.log(state)
        if(!name || !email || !contact){
          toast.error("Fields are blank")
        }else{
          await addDoc(collection(firebasedb,"contacts"),{
            name: state.name,
            email: state.email,
            contact: state.contact

          })
           toast.success("Data is entered")
          navigate("/")
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