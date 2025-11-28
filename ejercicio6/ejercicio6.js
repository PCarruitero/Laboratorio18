document.getElementById("btn").onclick = cargar;
async function cargar() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
        const data = await res.json();
        document.getElementById("nombre").textContent = "Nombre: " + data.name;
        document.getElementById("email").textContent = "Email: " + data.email;
        document.getElementById("ciudad").textContent = "Ciudad: " + data.address.city;
    } catch (error) {
        console.error(error);
    }
}