async function obtenerUsuariosAxios() {
     return new Promise((resolve, reject) => {
        // URL de la API
        const apiUrl = `https://jsonplaceholder.typicode.com/users`;

        // Elemento donde se insertarán los usuarios
        const tblBody = document.getElementById('tbody');

        // Función para obtener y mostrar usuarios
        axios.get(apiUrl)
            .then(response => {
                const users = response.data;
                console.log(users);
                users.forEach(user => {
                   let hilera = document.createElement("tr");
                    // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                    // texto sea el contenido de <td>, ubica el elemento <td> al final
                    // de la hilera de la tabla
                    let celda = document.createElement("td");
                    let campo = document.createTextNode(user.id);
                    celda.appendChild(campo);
                    hilera.appendChild(celda);

                    celda = document.createElement("td");
                    campo = document.createTextNode(user.name);
                    celda.appendChild(campo);
                    hilera.appendChild(celda);

                    celda = document.createElement("td");
                    campo = document.createTextNode(user.email);
                    celda.appendChild(campo);
                    hilera.appendChild(celda);
                
                    // agrega la hilera al final de la tabla (al final del elemento tblbody)
                    tblBody.appendChild(hilera);
                });
                resolve(users);
            })
            .catch(error => {
                console.error("Error al obtener usuarios:", error);
            });
    });
}
async function obtenerUsuariosFetch() {
     return new Promise((resolve, reject) => {
        // URL de la API
        const apiUrl = `https://jsonplaceholder.typicode.com/users`;

        // Elemento donde se insertarán los usuarios
        const tblBody = document.getElementById('tbody2');

        // Función para obtener y mostrar usuarios
        fetch(apiUrl)
       .then(response => {
            if (!response.ok) {
                // Si el servidor responde con un error (por ejemplo 404), lanzamos un error personalizado
                throw new Error("El articulo no se ha encontrado");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data)
            data.forEach(user => {
                   let hilera = document.createElement("tr");
                    // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                    // texto sea el contenido de <td>, ubica el elemento <td> al final
                    // de la hilera de la tabla
                    let celda = document.createElement("td");
                    let campo = document.createTextNode(user.id);
                    celda.appendChild(campo);
                    hilera.appendChild(celda);

                    celda = document.createElement("td");
                    campo = document.createTextNode(user.name);
                    celda.appendChild(campo);
                    hilera.appendChild(celda);

                    celda = document.createElement("td");
                    campo = document.createTextNode(user.email);
                    celda.appendChild(campo);
                    hilera.appendChild(celda);
                
                    // agrega la hilera al final de la tabla (al final del elemento tblbody)
                    tblBody.appendChild(hilera);
                });
            resolve(data);
        })
        .catch(error => {
            // Captura tanto errores de red como los lanzados manualmente en el primer then
            console.error("Error al obtener usuarios:", error);
        });
    });
}

async function obtenerUsuariosjQuery() {
     return new Promise((resolve, reject) => {
        // URL de la API
        const apiUrl = `https://jsonplaceholder.typicode.com/users`;

        // Elemento donde se insertarán los usuarios
        const tblBody = document.getElementById('tbody3');

        // Función para obtener y mostrar usuarios
        // Petición con jQuery
        $.get(apiUrl, function(users) {
            console.log(users)
            users.forEach(user => {
                   let hilera = document.createElement("tr");
                    // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                    // texto sea el contenido de <td>, ubica el elemento <td> al final
                    // de la hilera de la tabla
                    let celda = document.createElement("td");
                    let campo = document.createTextNode(user.id);
                    celda.appendChild(campo);
                    hilera.appendChild(celda);

                    celda = document.createElement("td");
                    campo = document.createTextNode(user.name);
                    celda.appendChild(campo);
                    hilera.appendChild(celda);

                    celda = document.createElement("td");
                    campo = document.createTextNode(user.email);
                    celda.appendChild(campo);
                    hilera.appendChild(celda);
                
                    // agrega la hilera al final de la tabla (al final del elemento tblbody)
                    tblBody.appendChild(hilera);
                });
        })
        .fail(function() {
            // Captura tanto errores
            console.error("Error al obtener usuarios:", error);
        });
    });
}

obtenerUsuariosAxios();
obtenerUsuariosFetch();
obtenerUsuariosjQuery();