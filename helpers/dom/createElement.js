const createElement = (element, text) => {
    const elemNew = document.createElement(element);
    elemNew.textContent = text;
    return elemNew;
} 

export {createElement};