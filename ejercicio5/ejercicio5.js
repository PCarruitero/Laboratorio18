document.getElementById("btn").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(res => res.json())
        .then(u => {
            document.getElementById("resultado").innerHTML = `
                <p>Nombre: ${u.name}</p>
                <p>Email: ${u.email}</p>
                <p>Ciudad: ${u.address.city}</p>
            `;
        })
        .catch(error => console.error(error));
});