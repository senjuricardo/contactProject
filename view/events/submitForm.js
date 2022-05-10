import { qs } from "../../helpers/dom/querySelectors.js";
import { homeAddContact } from "../../presenter/homeAddContact.js";
import { FieldRequired } from "../../validators/view/FieldRequired.js";
import { cleanInputs } from "./cleaninputs.js";
import { homeUpdateContact } from "../../presenter/homeUpdateContact.js";
//import { homeEditContact } from "../../presenter/homeEditContact.js";

const submitForm = function(e){
e.preventDefault();
const inputArray = [...e.target.children].filter(element => element.type == 'text')
const [inputName, inputPhone, inputEmail] =inputArray;
try{
    inputArray.forEach(input => FieldRequired.exec(input))
    const form = qs('form')
    if (qs('form').hasOwnProperty('_editing')){
         homeUpdateContact(form._editing, inputName, inputPhone, inputEmail);
         delete form._editing
    }
    else{
         homeAddContact (inputName, inputPhone, inputEmail)
    }
    
   cleanInputs(form)
   
  
} catch(e){
    console.error(e)
}

}

export {submitForm}