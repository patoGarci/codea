const cards = document.querySelector("#cards");
function onload(){
    if (localStorage.onload) {
        localStorage.onload = Number(localStorage.onload) + 1;
    } else {
        localStorage.onload = 1;
        modal.style.display ="block";
    }
}
//Agrega un recuadro pequeño del lado izquierdo de la tarjeta de cada servicio
cards.addEventListener("click",(e)=>{
    let selectedCard = e.target.parentNode.parentNode;
    let cardAdd = document.querySelectorAll(".card-items-active")[selectedCard.getAttribute('data-id')];
    let borderBoxPink = cardAdd.querySelector(".border-box-pink");
    let buttonCardSelected = cardAdd.querySelector("button");
    //coloca el backgroun del boton rosado cuando se activa
    buttonCardSelected.style.background = " #ºFF0080";
    //Activa el borde rosa, externo
    borderBoxPink.style.opacity="1"
})

// cuando carga la pagina por primera vez debe salir un mensaje en el modal y sino cuenta la cantidad de visitas a la pagina
onload()