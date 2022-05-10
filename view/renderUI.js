import { addEvent } from "../helpers/dom/addEvent.js";
import { qs } from "../helpers/dom/querySelectors.js";
import { liElemContact } from "./components/liElemContact.js";
import { submitForm } from "./events/submitForm.js";

const renderUI = function(contacts){
    addEvent(qs('form'), 'submit', submitForm)
    const ulElem = qs('ul');
    contacts.forEach((contact, index) => ulElem.append(liElemContact(contact, index)));
}

export {renderUI};
