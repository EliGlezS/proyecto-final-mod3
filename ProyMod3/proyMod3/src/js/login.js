console.log("HOLA");
//URL_BASE de la API

const AUTH_URL = "https://fakestoreapi.com/auth/login";

//Petición para hacer un POST (Login)

async function login(username, password) {
    try {
        const response = await fetch(AUTH_URL, {
            method:"POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({username, password}),
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Login successful", data);
            return data.token;
        } else {
            console.log("Login failed", data);
        }
    } catch (err) {
        console.error("Login error:", err);
    }
    
}

//Localizamos el formulario que tenemos en el html 
const loginForm = document.getElementById("loginForm");

//Este tendrá un evento submit
loginForm.addEventListener("submit", async (event) => {
    //prevenimos el comportamiento predefinido del navegador 
    event.preventDefault();
    //Creamos las constantes nombre, email y token que vendrá dado por la petición
    const userName = event.target.username.value;
    const password = event.target.password.value;
    const token = await login(userName, password);
    console.log(token);

    if (token) {
        window.location.href="products.html";
    }
})

