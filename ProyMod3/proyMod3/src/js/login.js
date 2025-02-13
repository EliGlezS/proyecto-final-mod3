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

 //pendiente
loadValidation();



//Este tendrá un evento submit
loginForm.addEventListener("submit", async (event) => {
    //prevenimos el comportamiento predefinido del navegador 
    event.preventDefault();

    //pendiente
    forceValidation();

    //Si hay un error en el formulario no envio nada y salgo submit
    if (loginForm.querySelectorAll(".error").length > 0) {
        return;
    }

    //Creamos las constantes nombre, email y token que vendrá dado por la petición
    const userName = event.target.username.value;
    const password = event.target.password.value;
    const token = await login(userName, password);
    console.log(token);

    if (token) {
        window.location.href="products.html";
    }
});




//------------------------Verificaciones de formulario-----------------------------------

function loadValidation (){
    
    //Inputs alfanúmericos con caracter _ 
    const inputsAlphanumeric = document.querySelectorAll(".input-alphanumeric");

    inputsAlphanumeric.forEach((input) =>{
        input.addEventListener("input" , (event) => {

            const regex = /^(?=[a-z])(?!.*[^a-z0-9_]).{3,}$/;
            const verificationInputAlpNum = regex.test(event.target.value); 
            const span = event.target.closest("div").querySelector("span");

            if(!verificationInputAlpNum){
                input.classList.add("error");
                span.style.display = 'block';
                span.textContent = "Insert an alphanumeric. Text must be start with letter in lower case, and contain _"
                console.log("Error detectado");
            }else{
                input.classList.remove("error");
                span.style.display = 'none';
                span.textContent = "";
                console.log("Todo ok");
            }

        });
    });

    //Inputs alfanúmericos teniendo en cuenta símbolos especiales 

    const inputsAlphaNumSimb = document.querySelectorAll(".input-alphanumericSimbols");

    inputsAlphaNumSimb.forEach((input) =>{
        input.addEventListener("input" , (event) => {

            const regex = /^.{5,}$/;
            const verificationInputAlphaNumSimb = regex.test(event.target.value); 
            const span = event.target.closest("div").querySelector("span");

            if(!verificationInputAlphaNumSimb){
                input.classList.add("error");
                span.style.display = 'block';
                span.textContent = "Password must be more than 5 characters."
                console.log("Error detectado");
            }else{
                input.classList.remove("error");
                span.style.display = 'none';
                span.textContent = "";
                console.log("Todo ok");
            }

        });
    });
}



function forceValidation() {
    
    const inputsAlphanumeric = document.querySelectorAll(".input-alphanumeric"); 
    inputsAlphanumeric.forEach(input => {
        // Crear el evento 'input'
        const event = new Event('input', {
          'bubbles': true,
          'cancelable': true
        });
      
        // Disparar el evento 'input' en cada elemento
        input.dispatchEvent(event);
    });


    const inputsAlphaNumSimb = document.querySelectorAll(".input-alphanumericSimbols");
    inputsAlphaNumSimb.forEach(input => {
        // Crear el evento 'input'
        const event = new Event('input', {
          'bubbles': true,
          'cancelable': true
        });
      
        // Disparar el evento 'input' en cada elemento
        input.dispatchEvent(event);
    });
}

