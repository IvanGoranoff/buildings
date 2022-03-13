import React from 'react';

 const ReadOnlyRow = ({contact, handleEditClick, handleDeleteClick}) => {
  return (
    <tr>
    <td>{contact.iD}</td>
    <td>{contact.name}</td>
    <td>{contact.aria}</td>
    <td>{contact.location}</td>
    <td>{contact.img}</td>
    <td>
    <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
         Update
        </button> 
          <button type="button" onClick={()=>handleDeleteClick(contact.id)}>Delete</button>
           </td>
</tr> 
  )
}
 export default ReadOnlyRow;