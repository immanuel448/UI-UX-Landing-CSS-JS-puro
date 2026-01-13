// Obtenemos el contenedor que se va a desplazar
const track = document.getElementById("techTrack");

// Duplicamos el contenido para crear el efecto infinito
// (cuando termina la primera tanda, continúa la segunda)
track.innerHTML += track.innerHTML;

// Posición inicial del carrusel
let position = 0;

// Velocidad del movimiento (entre menor, más lento)
const speed = 0.35;

// Bandera para pausar la animación
let isPaused = false;

// Función principal de animación
function animate() {

  // Solo se mueve si no está pausado
  if (!isPaused) {
    position -= speed;

    // Cuando llega a la mitad del contenido duplicado,
    // reiniciamos la posición para crear el loop infinito
    if (Math.abs(position) >= track.scrollWidth / 2) {
      position = 0;
    }

    // Aplicamos la transformación
    track.style.transform = `translateX(${position}px)`;
  }

  // Ejecutamos la animación de forma continua
  requestAnimationFrame(animate);
}

// Pausa al pasar el mouse
track.addEventListener("mouseenter", () => {
  isPaused = true;
});

// Reanuda al salir el mouse
track.addEventListener("mouseleave", () => {
  isPaused = false;
});

// Iniciamos la animación
animate();
