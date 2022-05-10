

const cleanInputs = form => [...form.children].filter(input => (input.type== 'text') ? input.value = '' : '')



export {cleanInputs}