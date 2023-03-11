import React, { Fragment } from 'react'

const List = ({contacts}) => {
  return (
    <Fragment>
        <div className="container box">

      {contacts.map((contact)=>(
          <div className="list" key = {contact.id}>
            <div className="list-item">

    
    <div className="list-item-content">
      <div className="list-item-title">{contact.name}</div>
      <div className="list-item-description">{contact.email}</div>
    </div>

    <div className="list-item-controls">
      <div className="buttons is-right">
        <button className="button">
          <span className="icon is-small">
            <i className="fas fa-edit"></i>
          </span>
          <span>Edit</span>
        </button>

        <button className="button">
          <span className="icon is-small">
            <i className="fas fa-ellipsis-h"></i>
          </span>
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