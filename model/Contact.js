class Contact {
    #fullName;
    #phoneNumber;
    #email;

    constructor(fullName, phoneNumber, email){
        this.#fullName = fullName;
        this.#phoneNumber = phoneNumber;
        this.#email = email;
    }

    get fullName() {
        return this.#fullName;
    }

    get phoneNumber() {
        return this.#phoneNumber;
    }

    get email() {
        return this.#email;
    }

    set fullName(fullName){
        this.#fullName = fullName;
    }

    set phoneNumber(phoneNumber){
        this.#phoneNumber = phoneNumber;
    }

    set email(email){
        this.#email = email;
    }
}

export default Contact;