
let token = "";

function showRegister() {
    document.getElementById("login-section").classList.add("d-none");
    document.getElementById("register-section").classList.remove("d-none");
}

function showLogin() {
    document.getElementById("register-section").classList.add("d-none");
    document.getElementById("login-section").classList.remove("d-none");
}

async function register() {
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    const age = document.getElementById("reg-age").value;
    const country = document.getElementById("reg-country").value;

    if (!email || !password) {
        alert("El email y la contraseña son obligatorios");
        return;
    }

    try {
        const res = await fetch("https://reqres.in/api/register", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "x-api-key": "reqres-free-v1"
             },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (res.ok) {
            alert(`Usuario registrado con ID: ${data.id}`);
            showLogin();
        } else {
            alert(`Error: ${data.error}`);
        }
    } catch (err) {
        console.error(err);
        alert("Error en el registro");
    }
}

async function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
        const res = await fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "x-api-key": "reqres-free-v1"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (res.ok) {
            token = data.token;
            document.getElementById("welcome-message").innerText = `Bienvenido, ${email}`;
            document.getElementById("login-section").classList.add("d-none");
            document.getElementById("main-section").classList.remove("d-none");
        } else {
            alert(`Error: ${data.error}`);
        }
    } catch (err) {
        console.error(err);
        alert("Error en el login");
    }
}

async function getData() {
    try {
        const res = await fetch("https://reqres.in/api/users/1", {
            method: "GET",
            headers: { 
                "Content-Type": "application/json",
                "x-api-key": "reqres-free-v1"
            }
        });
        const data = await res.json();
        document.getElementById("api-response").innerText = JSON.stringify(data, null, 2);
    } catch (err) {
        console.error(err);
        alert("Error en la petición GET");
    }
}

async function postData() {
    try {
        const res = await fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "x-api-key": "reqres-free-v1"
            },
            body: JSON.stringify({
                name: "Usuario Demo",
                job: "Developer"
            })
        });
        const data = await res.json();
        document.getElementById("api-response").innerText = JSON.stringify(data, null, 2);
    } catch (err) {
        console.error(err);
        alert("Error en la petición POST");
    }
}