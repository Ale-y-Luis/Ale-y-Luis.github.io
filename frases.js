// Arreglo de frases
const frases = [
    "El amor verdadero no es fácil, pero siempre vale la pena",
    "You are the moon of my life",
    "Te amo",
    "Tú en mi vida encajas",
    "Eres tan perfecta",
    "¡Sonríe! Es el mejor regalo que puedes darle al mundo",
    "A veces me sorprendo por lo hermosa que eres",
    "¿Cómo pude conseguir a una mujer tan perfecta como tú?",
    "¡Policía marítima! A ver esa concha",
    "¿Aló? ¿Pocilía?",
    "Me haces reír de forma tan natural",
    "El silencio contigo es mi canción favorita",
    "El amor nos da algo por lo que luchar",
    "Peshioshaaaaaa!!!",
    "Hemoshaaaaaaaa!!!",
    "Te elijo a ti",
    "Eres lo más lindo que tengo",
    "Soy tan afortunado de tenerte",
    "Tus ojos son mi lugar favorito para perderme",
    "Gracias por ser mi razón para sonreír todos los días",
    "Eres mi mejor aventura",
    "Mi vida cambió para siempre cuando te conocí",
    "Cada día contigo es un regalo que atesoro",
    "Te amo más de lo que las palabras pueden expresar",
    "Eres el mejor capítulo de mi historia",
    "Eres mi lugar seguro",
    "Eres la razón por la que sonrío",
    "Eres mi todo",
    "Te amo más allá de las palabras",
    "Tu risa ilumina mi mundo",
    "Eres mi película favorita",
    "Me haces sentir que todo es posible",
    "Cada momento contigo es mi momento favorito",
    "No importa dónde esté, siempre quiero estar contigo",
    "Cuando estoy contigo, el mundo tiene sentido. – Un nihilista",
    "Eres mi hoy, mi mañana y mi para siempre",
    "No necesito más que tu amor para ser feliz",
    "Eres mi sol en los días nublados",
    "Solo tú sabes hacerme sentir tan completo",
    "Gracias por ser tú, por ser nosotros",
    "Eres lo único que me importa ahora, lo único que siempre me ha importado",
    "No tengas miedo: naciste para estar conmigo",
    "De alguna forma me has convertido en algo mejor de lo que era",
    "Eres mi vida ahora",
    "Tal vez estoy soñando despierto",
    "Todas las noches, estás conmigo",
    "Me encantan tus ojos. Y también amo el resto de tu cara",
    "En estos momentos, te extraño...",
    "Eres lo mejor que me ha pasado"
];

const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

document.addEventListener("DOMContentLoaded", () => {
    const fraseElemento = document.querySelector(".frase_inicio");
    fraseElemento.textContent = fraseAleatoria;
});
