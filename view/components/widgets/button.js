import { createElement } from "../../../helpers/dom/createElement.js";
import { addEvent } from "../../../helpers/dom/addEvent.js";

const button = function(text, event, funct, values){
    const buttonElem = createElement('button', text);
    addEvent(buttonElem, event, funct, values);
    return buttonElem;
}

export {button};