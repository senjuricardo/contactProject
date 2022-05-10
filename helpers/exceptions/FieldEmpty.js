class FieldEmpty extends Error{
    constructor(input){
        super(`${input.name} is empty`)
    }
}

export default FieldEmpty 