const addEvent = (element, eventOne, func, values) => element.addEventListener(eventOne, (e)=> func(e,values));

export {addEvent};