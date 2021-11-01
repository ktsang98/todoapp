import home  from "../pages/index";
import directory from "../pages/directory";
import notFound from "../pages/notfound";


const routes = {
    "/": home,
    "/directory":directory,
    "/notfound": notFound
}


const Router =  function (pathname, params=null)   {

    const isValidRoute = Object.keys(routes).find(key=> key===pathname)
    console.log(isValidRoute)

    // loading and unloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
    if(isValidRoute === undefined){
        app.append(notFound())
    }
    else
    {
        app.appendChild(routes[window.location.pathname](params))
    }
    

}

export { Router}