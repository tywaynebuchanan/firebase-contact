import React, { Fragment,useEffect,useState } from 'react'
import { useNavigate,Link ,useParams} from 'react-router-dom'
import contactService from '../services/contactService'
import {toast} from "react-toastify"

const List = ({contacts,getContacts}) => {

const handleDelete = async(id)=>{
  console.log(id)
  try {
    await contactService.deleteContact(id)
    toast.success("The contact was deleted")
    getContacts()
  } catch (error) {
    console.log(error)
  }

}

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
        <div className="container box">

      {Object.keys(contacts).map((id,index)=>(
          <div className="list" key = {id}>
            <div className="list-item">

    
    <div className="list-item-content">
      <div className="list-item-title">{contacts[id].name}</div>
      <div className="list-item-description">{contacts[id].email}</div>
    </div>

    <div className="list-item-controls">
      <div className="buttons is-right">
        <Link to ={`/update/${contacts[id].id}`} className="button">
          <span className="icon is-small">
            <i className="fas fa-edit"></i>
          </span>
          <span>Edit</span>
        </Link>

         <button onClick = {(e)=>handleDelete(contacts[id].id)}className="button is-danger">
          <span className="icon is-small">
            <i className="fas fa-edit"></i>
          </span>
          <span>Delete</span>
        </button>
      </div>
    </div>
  </div>

<hr/>
        </div>
      ))}

      
        </div>
    </Fragment>
    
  )
}

export default List