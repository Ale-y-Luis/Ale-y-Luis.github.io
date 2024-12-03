// Arreglo de frases
const frases = [
    "El amor verdadero no es fácil, pero siempre vale la pena. – Missandei",
    "Eres la luna de mi vida. – Khal Drogo",
    "Elegiste el amor, y no hay nada más poderoso en este mundo. – Tyrion Lannister",
    "Nunca le digas adiós a alguien que amas. – Ygritte",
    "Eres todo lo que siempre he querido. – Grey Worm",
    "El amor nos da algo por lo que luchar. – Jon Snow",
    "Peshioshaaaaaa!!!",
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
    "Tu risa es la melodía que llena mi corazón",
    "Me haces sentir que todo es posible",
    "Cada momento contigo es mi momento favorito",
    "No importa dónde esté, siempre quiero estar contigo",
    "Cuando estoy contigo, el mundo tiene sentido",
    "Eres mi hoy, mi mañana y mi para siempre",
    "No necesito más que tu amor para ser feliz",
    "Eres mi sol en los días nublados",
    "Solo tú sabes hacerme sentir tan completo",
    "Gracias por ser tú, por ser nosotros",
    "Eres lo único que me importa ahora. Lo único que siempre me ha importado. – Edward Cullen",
    "No tengas miedo. Naciste para estar conmigo. – Edward Cullen",
    "¿Quieres que ponga mi mundo patas arriba para que podamos estar juntos? Haría eso y más por ti. – Bella Swan",
    "De alguna forma me has convertido en algo mejor de lo que era. – Edward Cullen",
    "Eres mi vida ahora. – Edward Cullen",
    "Nadie ha amado a alguien tanto como yo te amo a ti. Es una imposibilidad matemática. – Edward Cullen"
];

// Seleccionar una frase aleatoria
const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

// Insertar la frase en el elemento con clase "frase_inicio"
document.addEventListener("DOMContentLoaded", () => {
    const fraseElemento = document.querySelector(".frase_inicio");
    fraseElemento.textContent = fraseAleatoria;
});
