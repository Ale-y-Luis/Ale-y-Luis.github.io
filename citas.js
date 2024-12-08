document.addEventListener("DOMContentLoaded", () => {
    const botonCita = document.getElementById("boton_cita");
    const citaAleatoria = document.getElementById("cita_aleatoria");

    const citas = [
        "Pasear con scooters en Causway",
        "Caminar por un parque",
        "Go Carts en Causway",
        "Laser-Tag",
        "Paseo en bicicleta",
        "Coffee bar",
        "Probar un restaurante nuevo",
        "Tarde de picnic",
        "Noche caliente",
        "Cine en casa",
        "Cena elegante",
        "Cena normal",
        "Noche de juegos",
        "Visita a un museo",
        "Escalada del Cerro Ancón",
        "Ida al cine"
    ];

    const mostrarCitaLetraPorLetra = (texto, elemento, velocidad) => {
        let indice = 0;
        elemento.textContent = "";
        const intervalo = setInterval(() => {
            elemento.textContent += texto[indice];
            indice++;
            if (indice === texto.length) {
                clearInterval(intervalo);
            }
        }, velocidad);
    };

    botonCita.addEventListener("click", () => {
        const indiceAleatorio = Math.floor(Math.random() * citas.length);
        const citaSeleccionada = citas[indiceAleatorio];

        citaAleatoria.style.display = "flex";
        mostrarCitaLetraPorLetra(citaSeleccionada, citaAleatoria, 50);
        botonCita.style.display = "none";
        
    });
});
