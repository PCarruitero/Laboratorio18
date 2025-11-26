async function cargarUsuario() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/10");
        const usuario = await res.json();
        console.log(usuario.name);
        console.log(usuario.username);
        console.log(usuario.email);
    } catch (error) {
        console.error(error);
    }
}
cargarUsuario();