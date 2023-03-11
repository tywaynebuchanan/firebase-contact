import React, { Fragment,useEffect } from 'react'
import PageName from '../components/PageName'



const View = () => {
  const contactCollectionRef = collection(firebasedb,"contacts")

useEffect(()=>{

  const getContacts = async()=>{
    const data = await getDocs(contactCollectionRef)
    console.log(data)
  }
  getContacts()
},[])

  return (
    <Fragment>
        <PageName title="View"/>
    </Fragment>
    
  )
}

export default View