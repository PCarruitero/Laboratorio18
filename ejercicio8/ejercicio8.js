function validar() {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    const pass = document.getElementById("pass").value;
    const valido = regex.test(pass);
    document.getElementById("resultado").textContent =
        valido ? "Contraseña válida" : "Contraseña NO válida";
}