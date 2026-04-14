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

// Puntaje y tiempo
let puntos = 0;
let tiempo = 10;
let intervalo;
 
function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
};
 
function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "#000000");
};
 
function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "#ff0000");
};

function limpiarCanva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function restarTiempo() {
    tiempo = tiempo - 1;
    mostrarEnSpan("tiempo", tiempo);

    if (tiempo === 0) {
        clearInterval(intervalo);
        alert("¡Game Over!");
    }
}

function detectarColision() {
    if (gatoX < comidaX + ANCHO_COMIDA &&
        gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA &&
        gatoY + ALTO_GATO > comidaY) {

        comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
        comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);

        puntos = puntos + 1;
        mostrarEnSpan("puntos", puntos);

        if (puntos === 6) {
            clearInterval(intervalo);
            alert("¡Ganaste!");
        }
    }
}

function iniciarJuego(){
    gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
    gatoY = (canvas.height / 2) - (ALTO_GATO / 2);
    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;
    puntos = 0;
    tiempo = 60;
    mostrarEnSpan("puntos", puntos);
    mostrarEnSpan("tiempo", tiempo);
    limpiarCanva();
    graficarGato();
    graficarComida();
    clearInterval(intervalo);
    intervalo = setInterval(restarTiempo, 1000);
}

function moverIzquierda() {
    gatoX = gatoX - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverDerecha() {
    gatoX = gatoX + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverArriba() {
    gatoY = gatoY - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverAbajo() {
    gatoY = gatoY + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

document.getElementById("btnArriba").onclick = () => moverArriba();
document.getElementById("btnAbajo").onclick = () => moverAbajo();
document.getElementById("btnIzquierda").onclick = () => moverIzquierda();
document.getElementById("btnDerecha").onclick = () => moverDerecha();
document.getElementById("btnReiniciar").onclick = () => iniciarJuego();

iniciarJuego();