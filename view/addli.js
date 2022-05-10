import { liElemContact } from "./components/liElemContact.js";
import { qs } from "../helpers/dom/querySelectors.js";

const addli = contact => qs('ul').append(liElemContact(contact));

export {addli}