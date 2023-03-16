import React, { Fragment,useEffect,useState } from 'react'
import List from '../components/List'
import PageName from '../components/PageName'
import { collection, getDocs } from 'firebase/firestore'
import { firebasedb } from '../config/firebase'
import contactService from '../services/contactService'
import Loading from '../components/Loading'

const Home = () => {
     const [contacts,setContacts] = useState([])
     const [loading,setLoading] = useState(false)

  const getContacts = async ()=>{
    try {
      setLoading(true)
      const data = await contactService.getAllContacts()
      setContacts(data.docs.map((doc)=>({...doc.data(),id: doc.id }))) 
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
    
  }
  
  useEffect(()=>{
  getContacts()
},[])

console.log(contacts)
  return (
    <Fragment>
        <PageName title="Home"/>
        {loading ? <Loading/> : <List contacts={contacts} getContacts = {getContacts}/>}
        
    </Fragment>
    
  )
}

export default Home