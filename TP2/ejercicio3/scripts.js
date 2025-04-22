
// Seleccionamos los elementos
const parrafos = document.querySelectorAll(".parrafo");
const btnResaltar = document.getElementById("resaltarBtn");
const btnOcultar = document.getElementById("ocultarBtn");

// Función para resaltar los párrafos
btnResaltar.addEventListener("click", () => {
  parrafos.forEach(p => {
    p.classList.add("resaltado");
  });
});

// Función para ocultar o mostrar (toggle)
btnOcultar.addEventListener("click", () => {
  parrafos.forEach(p => {
    p.classList.toggle("oculto");
  });
});
