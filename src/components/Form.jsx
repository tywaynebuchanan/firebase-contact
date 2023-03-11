import React from 'react'

const Form = ({state,handleSubmit,handleInputChange}) => {
    const {name,email,contact} = state
  return (
    
    <div className="customContainer">
         <div className="container box p-6">
        <form onSubmit={handleSubmit}>
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
            <input 
            name = "name"
            className="input" 
            type="text" 
            placeholder="e.g Alex Smith"
            value = {name}
            onChange = {handleInputChange}
            />
        </div>
        </div>

    <div className="field">
        <label className="label">Email</label>
        <div className="control">
            <input 
            name = "email"
            className="input" 
            type="email" 
            placeholder="e.g. alexsmith@gmail.com"
            value = {email}
            onChange = {handleInputChange}
            />
        </div>
    </div>


    <div className="field">
        <label class="label">Phone Number</label>
        <div class="control">
            <input 
            name = "contact"
            class="input" 
            type="telephone" 
            placeholder="876-444-5533"
            value = {contact}
            onChange = {handleInputChange}
            />
        </div>
    </div>

    <div>
      <button className="button is-info" name = "submit" type="submit">Submit</button>
    </div>

    </form>
    </div>
    </div>
   
  )
}

export default Form