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

function validarCodigo() {
    const codigoInput = document.getElementById('codigo_secreto').value;
    const codigoCorrecto = "12/01/2025";

    if (codigoInput === codigoCorrecto) {
        sessionStorage.setItem("sesionValida", "true");
        alert("Bienvenida amor mío ❤️");
        window.location.href = "inicio.html";
        return false;
    } else {
        alert("¿Quién eres? ¿Un espía? ¿Para quién? 👊");
        return false;
    }
}
