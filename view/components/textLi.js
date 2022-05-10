const textLi = function (contact) {
    const {fullName, phoneNumber, email} = contact;
    return `Name: ${fullName}, PhoneNumber: ${phoneNumber}, Email: ${email}`;
}

export {textLi};