import makeElement from './../../utils/makeElement'

const directory = function (){
    const template = `
    <aside id="directory" class="directory">
    <header class="items-header">
        <h2>Items</h2>
    </header>
    <ul id="todo" class="todo">
    
    </ul>
    <button class="ui-button"><a href="/errorPage" class="ui-newPage" data-path="/errorPage">Add Item</a></button>
    <footer>

    </footer>
</aside>
    `

    return makeElement(template)
}

export default directory

