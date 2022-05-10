import { getContact } from "../store/ContactList.js"
import { editContact } from "../view/editContact.js";


const homeEditContact = function(index){
    const [contact] = getContact(index, true);
editContact(contact, index);

}

export {homeEditContact}