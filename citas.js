document.addEventListener("DOMContentLoaded", () => {
    const botonCita = document.getElementById("boton_cita");
    const citaAleatoria = document.getElementById("cita_aleatoria");

    const citas = [
        "El amor no se mira, se siente, y aún más cuando ella está junto a ti.",
        "Cada vez que te miro, me doy cuenta de que mi vida se llena de sentido.",
        "A tu lado, incluso los días más grises tienen colores brillantes.",
        "El amor no tiene fecha de caducidad, y el mío por ti será eterno.",
        "Eres la razón por la que mis mañanas son más felices.",
        "El verdadero amor no es otra cosa que el deseo de ayudar al otro a ser quien es.",
        "Nada en este mundo es tan perfecto como verte sonreír.",
        "Si el amor fuera un sueño, tú serías el más hermoso que he tenido.",
        "Contigo, todo es mejor, incluso lo más simple se vuelve extraordinario.",
        "Estar a tu lado es mi lugar favorito en el mundo."
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
