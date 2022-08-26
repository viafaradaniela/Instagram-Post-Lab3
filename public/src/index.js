import * as components from "./components/index.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <my-post 
        pp="img/pp.png" 
        nameprofile="Netflix" 
        pti="img/picfeed2.jpg" 
        likes="21.056.230" 
        caption="Are you all ready for season 4?" 
        comment="16.258.236" 
        date="1">
        </my-post>
        
        `
    }
}

customElements.define("app-container",AppContainer);
