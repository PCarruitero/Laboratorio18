async function mostrarNombres() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const usuarios = await res.json();
        usuarios.forEach(u => console.log(u.name));
    } catch (error) {
        console.error(error);
    }
}
mostrarNombres();