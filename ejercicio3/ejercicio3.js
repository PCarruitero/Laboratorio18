fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(usuarios => {
        usuarios.forEach(u => console.log(u.name));
    })
    .catch(error => console.error(error));