function buscar() {
    const regex = /https:\/\/[^\s]+/g;
    const texto = document.getElementById("texto").value;
    const urls = texto.match(regex);
    document.getElementById("resultado").innerHTML =
        urls ? urls.join("<br>") : "No se encontraron URLs seguras";
}