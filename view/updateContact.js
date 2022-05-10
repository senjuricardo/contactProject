import { qs } from "../helpers/dom/querySelectors.js";
import { textLi } from "./components/textLi.js";

const updateContact = function(index, contactEdit){
const [contact] = contactEdit;
const ulElem = qs('ul')
const liElem = [...ulElem.children].at(index);
[...liElem.childrenNods].at(0).textContent = textLi(contact);

}

export {updateContact}