import { createElement } from "../../helpers/dom/createElement.js";
import { textLi } from "./textLi.js";
import { button } from "./widgets/button.js";
import { delContact } from "../events/delContact.js";
import { editContact } from "../events/editContact.js";

const liElemContact = function (contact,index){
    const liElm = createElement('li', textLi(contact));
    //liElm.id = index;
    liElm.append(button('Edit', 'click', editContact ));
    liElm.append(button('Apagar', 'click', delContact));
    return liElm;
}

export {liElemContact};