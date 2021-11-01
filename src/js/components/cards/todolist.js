import makeElement from "../../utils/makeElement"

const todolist = function ({id,category,title,isComplete,startDate,startTime}) {
    const template =   `
     <li class="${category}" data-key="${id}">
     <p>${category}</p> 
     <p>${title}</p> 
     <p>Status: ${isComplete}</p> 
     <p>Due: ${startDate} @ ${startTime}</p> 
     <p>
     <button data-key="${id}" id="edit">edit</button>
     <button  data-key="${id}" id="delete">delete</button>
     </p>
     </li>
    `
    return makeElement(template)
}

export {todolist}