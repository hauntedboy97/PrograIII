
// Obtener el formulario y los campos
const formulario = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const edadInput = document.getElementById("edad");

// Obtener los elementos donde se mostrarán los errores
const errorNombre = document.getElementById("errorNombre");
const errorEmail = document.getElementById("errorEmail");
const errorEdad = document.getElementById("errorEdad");

// Función para mostrar errores
function mostrarError(campo, mensaje) {
  campo.textContent = mensaje;
}

// Función de validación del formulario
formulario.addEventListener("submit", function (e) {
  e.preventDefault(); // Evitar que el formulario se envíe

  // Limpiar mensajes de error anteriores
  errorNombre.textContent = "";
  errorEmail.textContent = "";
  errorEdad.textContent = "";

  // Obtener los valores de los campos
  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim();
  const edad = edadInput.value.trim();

  let esValido = true; // Bandera para saber si todo es válido

  // Validación del nombre
  if (nombre === "") {
    mostrarError(errorNombre, "El nombre es obligatorio.");
    esValido = false;
  }

  // Validación del email
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email === "") {
    mostrarError(errorEmail, "El email es obligatorio.");
    esValido = false;
  } else if (!emailRegex.test(email)) {
    mostrarError(errorEmail, "Por favor ingresa un email válido.");
    esValido = false;
  }

  // Validación de la edad
  if (edad === "") {
    mostrarError(errorEdad, "La edad es obligatoria.");
    esValido = false;
  } else if (isNaN(edad) || edad <= 18) {
    mostrarError(errorEdad, "Debes ser mayor de 18 años.");
    esValido = false;
  }

  // Si todo es válido, mostrar mensaje de éxito o realizar alguna acción
  if (esValido) {
    alert("Formulario enviado correctamente.");
    // Aquí se podría enviar el formulario o realizar alguna acción adicional
  }
});
