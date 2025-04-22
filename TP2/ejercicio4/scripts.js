
// Seleccionamos los elementos del DOM
const formTarea = document.getElementById("formTarea");
const tareaInput = document.getElementById("tareaInput");
const listaTareas = document.getElementById("listaTareas");

// Función para agregar una nueva tarea a la lista
formTarea.addEventListener("submit", function (e) {
  e.preventDefault(); // Evitamos el envío por defecto del formulario

  const tareaTexto = tareaInput.value.trim(); // Obtenemos el texto

  if (tareaTexto === "") {
    alert("¡Por favor escribe una tarea!");
    return;
  }

  // Creamos el <li> para la nueva tarea
  const nuevoLi = document.createElement("li");
  nuevoLi.textContent = tareaTexto;

  // Evento para marcar como completado
  nuevoLi.addEventListener("click", function () {
    nuevoLi.classList.toggle("completado");
  });

  // Agregamos el <li> a la lista
  listaTareas.appendChild(nuevoLi);

  // Limpiamos el campo de texto después de agregar la tarea
  tareaInput.value = "";
  tareaInput.focus();
});
