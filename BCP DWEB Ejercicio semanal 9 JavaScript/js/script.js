 // Seleccionar un único elemento con querySelector llamado #card
const cards = document.querySelectorAll(".card");
const cardsBody = document.querySelectorAll(".card-body");
const botonCambiarColor = document.querySelector("#cambiarColor");
const botonCambiarBorder = document.querySelector("#cambiarBorder");
const botonAddBox = document.querySelector("#agregarCaja");

// Evento click, para cambiar de color de fondo al box
botonCambiarColor.addEventListener("click", function() {
    cardsBody.forEach(div => { 
        if(div.classList.contains("changeColor")) {
            div.classList.remove("changeColor");
        } else {
            div.classList.add("changeColor");
        }
    });
});

// Evento click, para cambiar el borde de cada box
botonCambiarBorder.addEventListener("click", function() {
    cards.forEach(div => { 
        console.log(div.classList.contains("changeBorder"));
        if(div.classList.contains("changeBorder")) {
            div.classList.remove("changeBorder");
        } else {
            div.classList.add("changeBorder");
        }
    });
});

// Evento click, para agregar una nueva caja
botonAddBox.addEventListener("click", function() {
    const row = document.querySelector(".row");
    row.insertAdjacentHTML('beforeend','<div class="col-2"><div class="card"><div class="card-body">Caja 4</div></div></div>');
});
