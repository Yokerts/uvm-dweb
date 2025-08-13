async function buscarProducto(numberPage) {
     return new Promise((resolve, reject) => {
        fetch(`https://fakestoreapi.com/products/${numberPage}`)
        .then((response) => {
            // `response` es un objeto Response que incluye código de estado y métodos para leer el cuerpo
            if (!response.ok) {
                // Si el servidor responde con un error (por ejemplo 404), lanzamos un error personalizado
                throw new Error("El articulo no se ha encontrado");
            }
            // Si todo va bien, parseamos el cuerpo de la respuesta a JSON
            resolve(response.json());
        })
        .then((response) => console.log(response))
        .catch(error => {
            // Captura tanto errores de red como los lanzados manualmente en el primer then
            console.error("Error:", error);
        });
    });
    // Ejecuta una petición GET a la API con el numero de pagina proporcionado 
}


async function obtenerProductos() {
    return new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (!response.ok) {
                // Si el servidor responde con un error (por ejemplo 404), lanzamos un error personalizado
                throw new Error("El articulo no se ha encontrado");
            }
            resolve(response.json())
        })
        .then(data => console.log(data))
        .catch(error => {
            // Captura tanto errores de red como los lanzados manualmente en el primer then
            console.error("Error:", error);
        });
    });
    // Ejecuta una petición GET a la API con el numero de pagina proporcionado 
}
