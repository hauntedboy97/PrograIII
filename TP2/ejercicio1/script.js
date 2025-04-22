// 1. Seleccionar el título con getElementById() y cambiar su texto
const titulo = document.getElementById("tituloPrincipal");
titulo.textContent = "Nuevo Título desde JavaScript";

// 2. Seleccionar los párrafos con getElementsByClassName() y cambiar su color
const parrafos = document.getElementsByClassName("parrafo");
for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].style.color = "blue"; // Cambia el color de todos los párrafos
}

// 3. Seleccionar los elementos <li> con querySelectorAll() y agregar un texto al final de cada uno
const elementosLi = document.querySelectorAll("ul li");
elementosLi.forEach((li, index) => {
  li.textContent += ` - Elemento modificado ${index + 1}`;
});
