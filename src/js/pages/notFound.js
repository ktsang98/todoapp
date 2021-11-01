import makeElement from './../utils/makeElement'
import link from './../components/ui/link'

const notFound = function(){
    const page = document.createElement('div')
    const goBack = link("Go Back", '/directory')
    const template = `
    <header class="ui-header">    
    <h1>Page Not Found</h1>    
    <p>404 page not found</p>    
    </header>    
    `;
    const pageHeader = makeElement(template)
    pageHeader.append(goBack)
    page.append(pageHeader)

    return page
}

export default notFound