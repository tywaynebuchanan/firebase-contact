import { firebasedb } from "../config/firebase";

import {collection,getDocs,getDoc,addDoc,updateDoc,deleteDoc,doc} from "firebase/firestore"

 const contactCollectionRef = collection(firebasedb,"contacts")

class contactDataService {
    addContact = (newcontact)=>{
        return addDoc(contactCollectionRef,newcontact)
    }

    updateContact = (id,updatedcontact) =>{
        const contactDoc = doc(firebasedb,"contacts",id)
        return updateDoc(contactDoc, updatedcontact)
    }

    deleteContact = (id) =>{
         const contactDoc = doc(firebasedb,"contacts",id)
        return deleteDoc(contactDoc)
    }

    getAllContacts = () =>{
        return getDocs(contactCollectionRef)
    }

    getContact = (id)=>{
        const contact = doc(firebasedb,"contacts",id)
        return getDocs(contact)
    }
}

export default new contactDataService()