import { addContact, getContact } from "../store/ContactList.js"
import { addli } from "../view/addli.js";


const homeAddContact = function(name, phone, email){
    const contactIndex = addContact(name, phone, email);
    const [contactInfo] = getContact(contactIndex-1);
    addli(contactInfo);
}

export {homeAddContact}