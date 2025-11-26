function cargarUsuario() {
    fetch("https://jsonplaceholder.typicode.com/users/10")
        .then(res => res.json())
        .then(usuario => {
            console.log(usuario.name);
            console.log(usuario.username);
            console.log(usuario.email);
        })
        .catch(error => console.error(error));
}
cargarUsuario();