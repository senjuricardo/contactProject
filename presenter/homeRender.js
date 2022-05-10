import { getContacts } from "../store/ContactList.js";
import { renderUI } from "../view/renderUI.js";

const homeRender = function(){
    // Vai buscar contactos e rendariza na VIEW
    renderUI(getContacts());
}

export {homeRender};