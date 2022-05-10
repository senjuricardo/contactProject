import { delContact } from "../store/ContactList.js";

const homeDelContact = function (id){
    delContact(id);
} 

export {homeDelContact};