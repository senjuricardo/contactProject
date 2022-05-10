import { homeDelContact } from "../../presenter/homeDelContact.js";

const delContact = function(e){
    const ulElem= e.target.closest('ul')
    const liElem= e.target.closest('li')
    const elements = [...ulElem.children];
    const index = elements.findIndex(li => li == liElem);
    ulElem.removeChild(liElem);
    homeDelContact(index);
}


export {delContact};