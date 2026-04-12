let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
let btnArriba = document.getElementById("btnArriba")
let btnAbajo = document.getElementById("btnAbajo")
let btnIzquierda = document.getElementById("btnIzquierda")
let btnDerecha = document.getElementById("btnDerecha")
const VELOCIDAD = 15; 

// Gato
let gatoX = 0;
let gatoY = 0;
const ANCHOGATO = 50;
const ALTURAGATO = 50;
 
// Comida
let comidaX = 100;
let comidaY = 100;
const ANCHOCOMIDA = 30;
const ALTURACOMIDA = 30;
 
function graficar(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
};
 
function graficarGato() {
    graficar(gatoX, gatoY, ANCHOGATO, ALTURAGATO, "#000000");
};
 
function graficarComida() {
    graficar(comidaX, comidaY, ANCHOCOMIDA, ALTURACOMIDA, "#ff0000");
};

function iniciarJuego(){
    gatoX = (canvas.width / 2) - (ANCHOGATO / 2);
    gatoY = (canvas.height / 2) - (ALTURAGATO / 2);
    graficarGato();
    graficarComida();
}

function mover(direccion){
    if (direccion === "arriba") gatoY -= VELOCIDAD;
    if (direccion === "abajo") gatoY += VELOCIDAD;
    if (direccion === "izquierda") gatoX -= VELOCIDAD;
    if (direccion === "derecha") gatoX += VELOCIDAD;
    graficarGato();
}

document.getElementById("btnArriba").onclick = () => mover("arriba");
document.getElementById("btnAbajo").onclick = () => mover("abajo");
document.getElementById("btnIzquierda").onclick = () => mover("izquierda");
document.getElementById("btnDerecha").onclick = () => mover("derecha");