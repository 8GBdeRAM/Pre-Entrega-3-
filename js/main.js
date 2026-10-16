// Profe, separé las acciones en funciones para que cada una se encargue de una parte del programa. Debido a que no le puedo hablar por la pagina web de forma mas decidi dejarle estos comentarios.
// Con esta función calculo cuánto supera el winrate a un límite determinado.
const calcularDiferencia = (winrate, limite) => winrate - limite;

// uso el resultado anterior para clasificar el winrate como fuerte, medio o débil.
function clasificarWinrate(winrate, limiteFuerte, limiteMedio) {
  if (calcularDiferencia(winrate, limiteFuerte) >= 0) {
    return "fuerte";
  } else if (calcularDiferencia(winrate, limiteMedio) >= 0) {
    return "medio";
  }
  return "débil";
}

function solicitarOpcion(mensaje) {
  const respuesta = prompt(mensaje);
  if (!respuesta) {
    // si el usuario cancela el cuadro, tomo esa acción como una solicitud para salir.
    return 6;
  }
  return Number(respuesta);
}

function obtenerPersonaje(opcion) {
  switch (opcion) {
    case 1:
      return { nombre: "Ramlethal valentine", winrate: 75 };
    case 2:
      return { nombre: "I-no", winrate: 35 };
    case 3:
      return { nombre: "Sol badguy", winrate: 58 };
    case 4:
      return { nombre: "Ky Kiske", winrate: 42 };
    case 5:
      return { nombre: "Potemkin", winrate: 66 };
    default:
      return { nombre: "", winrate: 0 };
  }
}

function mostrarResultado(personaje, nivel) {
  const resultado =
    "El winrate de " +
    personaje.nombre +
    " es: " +
    personaje.winrate +
    "%, es un personaje " +
    nivel;
  alert(resultado);
 
}

function mostrarMensaje(mensaje) {
  alert(mensaje);
 
}

const limiteFuerte = 70;
const limiteMedio = 40;
let opcion = 0;

while (opcion !== 6) {
  // Mantengo el menú dentro del ciclo para volver a mostrarlo después de cada respuesta.
  opcion = solicitarOpcion(
    "----- Winrate de personajes del Guilty Gear -----\n" +
      "1. Ramlethal valentine\n" +
      "2. I-no\n" +
      "3. Sol badguy\n" +
      "4. Ky Kiske\n" +
      "5. Potemkin\n" +
      "6. Salir\n" +
      "\nelige una opción",
  );
  if (opcion === 6) {
    mostrarMensaje("Gracias por usar el programa");
    break;
  }

  const personaje = obtenerPersonaje(opcion);
  if (personaje.nombre === "") {
    mostrarMensaje("Opción inválida, por favor elige una opción del 1 al 6");
  } else {
    const nivel = clasificarWinrate(
      personaje.winrate,
      limiteFuerte,
      limiteMedio,
    );
    mostrarResultado(personaje, nivel);
  }
}
