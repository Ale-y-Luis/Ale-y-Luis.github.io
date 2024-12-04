document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("sesionValida") !== "true") {
        if (!window.location.pathname.endsWith("index.html")) {
            window.location.href = "index.html";
        }
    }

    const inputCodigo = document.getElementById("codigo_secreto");
    if (inputCodigo) {
        inputCodigo.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                validarCodigo(inputCodigo.value);
            }
        });
    }
});

/**
 * @param {string} codigo
 */
function validarCodigo(codigo) {
    const codigoCorrecto = "12345";

    if (codigo === codigoCorrecto) {
        sessionStorage.setItem("sesionValida", "true");
        alert("Bienvenida amor mío ❤️");
        window.location.href = "inicio.html";
    } else {
        alert("¿Quién eres? ¿Un espía? ¿Para quién? 👊");
    }
}
