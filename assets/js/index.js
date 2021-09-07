const cards = document.querySelector("#cards");
cards.addEventListener("click",(e)=>{
    let selectedCard = e.target.parentNode.parentNode;
    let cardAdd = document.querySelectorAll(".card-items-active")[selectedCard.getAttribute('data-id')];
    let borderBoxPink = cardAdd.querySelector(".border-box-pink");
    let buttonCardSelected = cardAdd.querySelector("button");
    //coloca el backgroun del boton rosado cuando se activa
    buttonCardSelected.style.background = " #FF0080";
    //Activa el borde rosa, externo
    borderBoxPink.style.opacity="1"

})