function limpiar() {
    const regex = /<[^>]+>/g;
    const entrada = document.getElementById("texto").value;
    const limpio = entrada.replace(regex, "");
    document.getElementById("resultado").textContent = limpio;
}