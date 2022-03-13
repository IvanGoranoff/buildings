import React, { useState, Fragment } from "react";
import {nanoid} from 'nanoid';
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import Footer from './footer';


const App = () => { 
 
const [contacts, setContacts] = useState(data);
const [addFormData, setAddFormData] = useState({
  iD:"",
  name:"",
  aria:"",
  location:"",
  img:"",
});
  const [editFormData, setEditFormData] = useState({
    iD:"",
    name:"",
    aria:"",
    location:"",
    img:"",
  });
  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();


    const newContact = {
      id: nanoid(),
      iD: addFormData.iD,
      name: addFormData.name,
      aria: addFormData.aria,
      location: addFormData.location,
      img: addFormData.img,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      iD: editFormData.iD,
      name:editFormData.name,
      aria: editFormData.aria,
      location: editFormData.location,
      img: editFormData.img,
    };

    
  const newContacts = [...contacts];

  const index = contacts.findIndex((contact) => contact.id === editContactId);


  newContacts[index] = editedContact;

  setContacts(newContacts);
  setEditContactId(null);

};
    const handleEditClick = (event, contact) =>{
      event.preventDefault();
      setEditContactId(contact.id);


      const formValues = {
        iD: contact.iD,
        name: contact.name,
        aria: contact.aria,
        location: contact.location,
        img: contact.img,
      };
      setEditFormData(formValues);
    };
 
const handleCancelClick = () => {
  setEditContactId(null);
};
    
const handleDeleteClick = (contactId) =>{
  const newContacts = [...contacts];

  const index = contacts.findIndex((contact)=> contact.id === contactId);

  newContacts.splice(index, 1);

  setContacts(newContacts)
};

  return ( 
  <div className='app-container'>
<form  onSubmit={handleEditFormSubmit}>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Area</th>
        <th>Location</th>
        <th>Image</th>
        <th>Actions</th> 
      </tr>
    </thead>
    <tbody>
      {contacts.map((contact)=>(
        <Fragment> 
          {editContactId === contact.id ? (  
          <EditableRow 
          editFormData={editFormData} 
          handleEditFormChange={handleEditFormChange} 
          handleCancelClick={handleCancelClick}
          />)   : ( 
   
 
        <ReadOnlyRow
        contact={contact}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
         />
          
 
      )}
        </Fragment>
     
      
      ))}
    </tbody> 
  </table>
  </form>
        <h2>Add Building</h2>
      
        <form onSubmit={handleAddFormSubmit}>
          <input type="number" name="iD" required="required" placeholder="Enter ID." onChange={handleAddFormChange} />
          <input type="text" name="name"  minlength="3"  required="required" placeholder="Enter name."onChange={handleAddFormChange} />
          <input type="text" name="aria" required="required" placeholder="Enter aria." onChange={handleAddFormChange}/>
          <input type="text" name="location" placeholder="Enter location."onChange={handleAddFormChange} />
          <input type="file" accept="image/png, image/jpeg" name="img" placeholder="Enter img." onChange={handleAddFormChange}/>
      
       <button id="addB" type="submit">Add building</button>
    
  
         
        </form>
        <Footer/>
  </div>
  );
};

export default App;
