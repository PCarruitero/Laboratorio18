function dividir() {
    const regex = /[^.!?]+/g;
    const texto = document.getElementById("texto").value;
    const lista = texto.match(regex);
    document.getElementById("resultado").textContent =
        JSON.stringify(lista);
}