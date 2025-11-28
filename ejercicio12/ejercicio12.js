function validar() {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    const f = document.getElementById("fecha").value;
    document.getElementById("resultado").textContent =
        regex.test(f) ? "Fecha válida" : "Fecha NO válida";
}