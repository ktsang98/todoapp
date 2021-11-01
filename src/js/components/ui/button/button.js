import makeElement from "~/src/js/utils/makeElement";
//import styles from './styles.module.scss'

// CSS/SCSS Module is local
// SCSS/CSS folder is global appliction styles leak

const button = function (label="ui button", uiStyles){
    
     const template = `
     <div class="${styles[uiStyles] || styles.buttonDefault  }">
        <button >${label}</button>
     </div>
     `
     const element = makeElement(template);

     return element   
}


 

 

export default button

 

 