import directory from '../components/cards/directory'
import makeElement from './../utils/makeElement'
import {getStore} from './../redux/store'
import { todolist } from '../components/cards/todolist'
// Display Employee Data From The store 
 
const directoryPage = function(){
    const page = document.createElement('div') 
    const container = directory();
    const itemList = getStore()
    // Event Hanlder Function Remove Employee
    function onDeleteEmployee (e){
      const itemId =  e.currentTarget.dataset.key;
      // console.log(itemId)
      // Router('/delete', employeeId)
    }

    if(itemList.length !== 0){
      const elements =  itemList.map(emp=>{
            return todolist(emp) 
        })
      const ul = container.querySelector('#todo')
      elements.forEach(elm=>{
          elm.querySelector('#delete').addEventListener('click', onDeleteEmployee)
          ul.append(elm)
      })
      page.append(container)
    }
    
    
    return page
}

export default directoryPage