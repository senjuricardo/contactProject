import Contact from "../model/Contact.js"

const contacts = [
    new Contact('Bruno', 9234455, 'geral@email.com'),
    new Contact('Bruna', 9134455, 'geral1@email.com'),
    new Contact('Bruno', 9234455, 'geral2@email.com')
];

const getContacts = () => contacts;

const getContact = (id, stop= false) => (stop) ? contacts.slice(id, id+1) : contacts.slice(id) ;

const delContact = id => {
    contacts.splice(id,1);
    console.log(contacts);
}

const addContact = (name, phone, email) => contacts.push(new Contact(name.value, phone.value, email.value))

const updContact = (index, name, phone, email, ) => {
    const contact = contacts.at(index)
    contact.fullName= name.value
    contact.phoneNumber= phone.value
    contact.email= email.value
}

export {getContacts, delContact, addContact, getContact, updContact};