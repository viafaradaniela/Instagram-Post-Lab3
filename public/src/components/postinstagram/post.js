class MyPost extends HTMLElement{
    static get observedAttributes(){
        return ["pp","nameprofile","pti","likes","caption","comment","date"]
    }
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();

    }

    render(){
        this.shadowRoot.innerHTML=`
    
    <link rel="stylesheet" href="./src/components/postinstagram/style.css">
    
    <img src= ${this.pp} height="55" class="pp"> 
    <img src="img/options.png" height="5" class="options"> 

    <p class="HeadText">
    <b>${this.nameprofile}</b><br>
    Los Angeles, California<br>
    </p>
 

    <img src=${this.pti} height="500"> 
 
    <div>
    <img src="img/like.png" height="20">&nbsp;&nbsp;
    <img src="img/comment.png" height="20">  &nbsp;
    <img src="img/send.png" height="20">
    <img src="img/save.png" height="20" class="save">
    </div> 

    <p class="lowText">
    <b>${this.likes} likes </b> 
    <br>
    <b>Netflix</b> ${this.caption} <i style="color:rgb(30, 162, 192);">#ST4</i>
    </p>
    
    <view class="otherText">
    view all ${this.comment} comments
    <br>
    <pre>${this.date} DAY AGO</pre> 
    </p>

    <section>
        <div class="rectangulo"> </div>
    </section>
  `
    }
}

customElements.define('my-post', MyPost);
export default MyPost;