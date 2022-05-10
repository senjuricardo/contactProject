import { qs } from "../helpers/dom/querySelectors.js";
import { textLi } from "./components/textLi.js";

const updateContact = function(index, contact){
//const [contact] = contactEdit;
console.log(contact)
const ulElem = qs('ul')
const liElem = [...ulElem.children].at(index);
console.dir(liElem);
[...liElem.childNodes].at(0).textContent = textLi(contact);

}

export {updateContact}