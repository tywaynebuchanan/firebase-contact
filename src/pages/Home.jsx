import React, { Fragment,useEffect,useState } from 'react'
import List from '../components/List'
import PageName from '../components/PageName'
import { collection, getDocs } from 'firebase/firestore'
import { firebasedb } from '../config/firebase'

const Home = () => {
    const contactCollectionRef = collection(firebasedb,"contacts")
     const [contacts,setContacts] = useState([])
     const [show,setShow] = useState(false)

  const getContacts = async ()=>{
    const data = await getDocs(contactCollectionRef)
      setContacts(data.docs.map((doc)=>({...doc.data(),id: doc.id }))) 
  }
  
  useEffect(()=>{
  getContacts()
},[])

console.log(contacts)
  return (
    <Fragment>
        <PageName title="Home"/>
        <List contacts={contacts}/>
    </Fragment>
    
  )
}

export default Home