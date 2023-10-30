import "bootstrap";
import "./style.css";

const PALOS = ["♥", "♦", "♣", "♠"];
const VALORES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let paloArriba = document.querySelector("#simboloArriba");
let numero = document.querySelector("#numero");
let paloAbajo = document.querySelector("#simboloAbajo");
let cardWidthInput = document.querySelector("#cardWidth");
let cardHeightInput = document.querySelector("#cardHeight");

function eleccionCarta(arreglo1, arreglo2) {
  let carta = [];
  carta.push(arreglo1[Math.floor(Math.random() * arreglo1.length)]);
  carta.push(arreglo2[Math.floor(Math.random() * arreglo2.length)]);
  return carta;
}

function asignarColor(arreglo) {
  if (arreglo[0] === "♥" || arreglo[0] === "♦") {
    paloArriba.style.color = "red";
    numero.style.color = "red";
    paloAbajo.style.color = "red";
  } else {
    paloArriba.style.color = "black";
    numero.style.color = "black";
    paloAbajo.style.color = "black";
  }
}

function asignarPalo(arreglo) {
  paloArriba.innerHTML = arreglo[0];
  paloAbajo.innerHTML = arreglo[0];
}

function asignarValor(arreglo) {
  numero.innerHTML = arreglo[1];
}

function generacionCarta() {
  let carta = eleccionCarta(PALOS, VALORES);
  asignarColor(carta);
  asignarPalo(carta);
  asignarValor(carta);

  const width = parseInt(cardWidthInput.value) / 300;
  const height = parseInt(cardHeightInput.value) / 450;

  document.querySelector(
    "#carta"
  ).style.transform = `scale(${width}, ${height})`;
}

window.onload = function() {
  generacionCarta();
};

document.querySelector(".boton").addEventListener("click", generacionCarta);

setTimeout(generacionCarta, 10000);
