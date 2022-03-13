import React from 'react'

const EditableRow = ({editFormData,
   handleEditFormChange,
    handleCancelClick}) => {
  return (
   <tr>
        <td>
            <input type="number" required = "required" placeholder="Enter ID." name="iD"
          value= {editFormData.iD}
          onChange={ handleEditFormChange}
            
            ></input>
        </td>
        <td>
        <input type="text" minlength="number3" required = "required" placeholder="Enter name." name="name" 
         onChange={ handleEditFormChange}
         value= {editFormData.name}>

         </input>

        </td>
        <td>

        <input type="text" required = "required" placeholder="Enter aria." name="aria" 
          value= {editFormData.aria} 
         onChange={ handleEditFormChange}>           
         </input>
      
        </td>
        <td>
        <input type="text" placeholder="Enter location." name="location"  
         value= {editFormData.location}
        onChange={handleEditFormChange}></input>
        </td>
        <td>
        <input type="text" accept="image/png, image/jpeg" placeholder="Upload img." name="img" 
         value= {editFormData.img}
        onChange={handleEditFormChange}></input>
        </td>
        <td>
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancelClick}>Cancel</button>

        </td>
   </tr>
  )
}
 
export default EditableRow;