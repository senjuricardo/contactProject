import { updContact , getContact} from "../store/ContactList.js"
import { updateContact } from "../view/updateContact.js"

const homeUpdateContact = function(index, name, phone, email){
updContact(index, name, phone, email)

const [contac] = getContact(index, true)

updateContact(index, contac) ;

}

export {homeUpdateContact}