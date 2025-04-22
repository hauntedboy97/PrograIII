// Obtener elementos del DOM
const input = document.getElementById("nuevoItem");
const botonAgregar = document.getElementById("agregarBtn");
const lista = document.getElementById("lista");

// Función para agregar un nuevo elemento a la lista
function agregarElemento() {
  const texto = input.value.trim();

  if (texto === "") {
    alert("Por favor escribe algo.");
    return;
  }

  // Crear el <li>
  const nuevoLi = document.createElement("li");

  // Crear un span con el texto ingresado
  const textoElemento = document.createElement("span");
  textoElemento.textContent = texto;

  // Crear el botón "Eliminar"
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.className = "eliminar-btn";

  // Evento para eliminar el <li>
  botonEliminar.addEventListener("click", () => {
    lista.removeChild(nuevoLi);
  });

  // Agregar el texto y el botón al <li>
  nuevoLi.appendChild(textoElemento);
  nuevoLi.appendChild(botonEliminar);

  // Agregar el <li> a la lista
  lista.appendChild(nuevoLi);

  // Limpiar el input
  input.value = "";
  input.focus();
}

// Agregar evento al botón "Agregar"
botonAgregar.addEventListener("click", agregarElemento);

// También permitir presionar Enter para agregar
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    agregarElemento();
  }
});





