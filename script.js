class Deck{

    cards;
    origin;
    constructor(cards){
        this.cards = cards;
        localStorage.setItem("origin",JSON.stringify(cards));
        this.shuffleDeck();
    }
    cancelDeckHtml(){
        const code = document.getElementById("codetab");
        if(code!=null)
        code.remove();
    }
    showDeckHtml(){
        this.cancelDeckHtml();
        const code = document.createElement("code");
        const counter = document.getElementById("counterCards");
        counter.innerHTML = this.cards.length;
        counter.setAttribute("style","display:blocks;");
        code.setAttribute("id", "codetab");
        const div = document.getElementById("display_deck");
        code.appendChild(document.createTextNode(this.cards));
        div.appendChild(code);


    }


    showDeck(){
        console.log(this.cards);
    }
    removeParagraphs(){
        const div = document.getElementById("result");
        const ps = div.getElementsByTagName("p");
        while(ps.length > 0){
            div.removeChild(ps[0])
        }
        const btn = document.getElementById("btn_par_canc");
        btn.setAttribute("style","display:none;")
    }
   
    shuffleDeck(){
        const length= this.cards.length;
        var app = "";
        for(let i=0; i<length*2;i++){
            const n1 = Math.floor(Math.random()*length);
            const n2 = Math.floor(Math.random()*length);
            
            app=this.cards[n1];
            this.cards[n1]=this.cards[n2];
            this.cards[n2]=app;

        }
        this.showDeckHtml();
    }
    takeCard(){
        return this.cards.shift();
    }

    resetDeck(){
        console.log(`Deck originario ${localStorage.getItem("origin")}`);

        this.cards=JSON.parse(localStorage.getItem("origin"));
       
        const div = document.getElementById("result");
        const par = div.getElementsByTagName("p");
        while(par.length>0){
            div.removeChild(par[0]);
        }

        const code = document.getElementById("codetab");
        if(code != null){
            code.remove();
        }  
        const counter = document.getElementById("counterCards");
        counter.setAttribute("style","display:none;");    
        const btnParCanc = document.getElementById("btn_par_canc");
        btnParCanc.setAttribute("style","display:none;");   
    }

    creaPar(){
        const carta = this.takeCard();
        const text = document.createTextNode(carta);
        const p = document.createElement("p");
        p.setAttribute("class","d-flex justify-content-center");
        const div = document.getElementById("result");

        p.appendChild(text);
        div.appendChild(p);
 
        const paragraphs = div.getElementsByTagName("p");

        if(paragraphs.length>=1){
            
            const btnParCanc = document.getElementById("btn_par_canc");
            btnParCanc.setAttribute("style","display:block;")
        }
        this.showDeckHtml();
    
      

    }
    
}


const deck = [
        "1f",
        "2f",
        "3f",
        "4f",
        "5f",
        "6f",
        "7f",
        "8f",
        "9f",
        "10f",
        "11f",
        "12f",
        "13f",
        "1c",
        "2c",
        "3c",
        "4c",
        "5c",
        "6c",
        "7c",
        "8c",
        "9c",
        "10c",
        "11c",
        "12c",
        "13c",
        "1p",
        "2p",
        "3p",
        "4p",
        "5p",
        "6p",
        "7p",
        "8p",
        "9p",
        "10p",
        "11p",
        "12p",
        "13p",
        "1q",
        "2q",
        "3q",
        "4q",
        "5q",
        "6q",
        "7q",
        "8q",
        "9q",
        "10q",
        "11q",
        "12q",
        "13q"
];


const deck1 = new Deck(deck);

const showDeck = document.getElementById("show_deck");
const shuffleDeck = document.getElementById("shuffle_deck");
const takeCard = document.getElementById("take_card");
const resetDeck = document.getElementById("reset_deck");
const btnCard = document.getElementById("btn_card");
const btnParCanc = document.getElementById("btn_par_canc");

btnParCanc.addEventListener("click", (e)=>{
    deck1.removeParagraphs();
});

btnCard.addEventListener("click",(e)=>{
    console.log(e.target);
    //controllo che siamo sotto range max di stampe
    const div = document.getElementById("result");
    const paragraphs = div.getElementsByTagName("p");
    if(paragraphs.length < 5){
        deck1.creaPar();
    }
    
});

takeCard.addEventListener("click",(e)=>{
    console.log(e.target);
    //controllo che siamo sotto range max di stampe
    const div = document.getElementById("result");
    const paragraphs = div.getElementsByTagName("p");
    if(paragraphs.length < 5){
        deck1.creaPar();
    }
});

resetDeck.addEventListener("click",(e)=>{
    console.log(e.target);
    deck1.resetDeck();
});

shuffleDeck.addEventListener("click",(e)=>{
        console.log(e.target);
        deck1.shuffleDeck();
});

showDeck.addEventListener("click", (e)=>{
    console.log(e.target);
    deck1.showDeck();
    //mostro a vista html il deck
    deck1.showDeckHtml();
});