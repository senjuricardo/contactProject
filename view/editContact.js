import { qs } from "../helpers/dom/querySelectors.js"

const editContact = function(contact, index){
    const form = qs('form');
    form._editing = index;
    const inputArray = [...form.children].filter(element => element.type == 'text')
    const [inputName, inputPhone, inputEmail] =inputArray;
    inputName.value = contact.fullName
    inputPhone.value = contact.phoneNumber
    inputEmail.value = contact.email
}

export {editContact}