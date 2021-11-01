import makeElement from './../utils/makeElement'
import link from './../components/ui/link'
import button from '../components/ui/button/'


const indexPage = function(){
    const page = document.createElement('div')
    const todoListLink = link("Todo Items", '/directory')
    const template = `
    <header class="ui-header">    
    <h1>Kristy Tsang's To Do List</h1>
    <p>The foolproof ways of a procrastinator</p>    
    </header>    
    `;
    const pageHeader = makeElement(template)
    pageHeader.append(todoListLink)
    page.append(pageHeader)
    

    return page
}

export default indexPage