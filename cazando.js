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
const ALTO_GATO = 50;
const ANCHO_GATO = 50;
 
// Comida
let comidaX = 0;
let comidaY = 0;
const ALTO_COMIDA = 30;
const ANCHO_COMIDA = 30;
 
function graficar(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
};
 
function graficarGato() {
    graficar(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "#000000");
};
 
function graficarComida() {
    graficar(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "#ff0000");
};

function iniciarJuego(){
    gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
    gatoY = (canvas.height / 2) - (ALTO_GATO / 2);
    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;
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