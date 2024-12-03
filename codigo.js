document.addEventListener("DOMContentLoaded", () => {
    const inputCodigo = document.getElementById("codigo_secreto");


    inputCodigo.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            validarCodigo(inputCodigo.value);
        }
    });
});

/**
@param {string} codigo
 */

function validarCodigo(codigo) {
    const codigoCorrecto = "12345";

    if (codigo === codigoCorrecto) {
        alert("Bienvenida amor mío ❤️");
        window.location.href = "./inicio.html";
    } else {
        alert("¿Quién eres? ¿Un espía? ¿Para quién? 👊");
    }
}
