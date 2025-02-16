//URL_BASE de la API

const AUTH_URL = "https://fakestoreapi.com/auth/login";

//Petición para hacer un POST (Login)

async function login(username, password) {
    try {
        const response = await fetch(AUTH_URL, {
            method:"POST", //Método de la solicitud HTTP
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({username, password}),
        });

        const data = await response.json();//repuesta o data en formato JSON

        if (response.ok) {//si la respuesta es exitosa, devuelve un token 
            console.log("Login successful", data);
            return data.token;
        } else {//En caso de error, devuelve un mensaje de que el login a fallado.
            console.log("Login failed", data);
        }
    } catch (err) {//Errores en la petición 
        console.error("Login error:", err);
    }
    
}

//Se localiza el formulario que tenemos en el html 
const loginForm = document.getElementById("loginForm");

//Se llama a la función creada para validar los formularios 
loadValidation();


//A este formulario se le agrega un event listener. 
loginForm.addEventListener("submit", async (event) => {
    //prevenimos el comportamiento predefinido del navegador 
    event.preventDefault();

    //Fuerza que la validación de los campos se ejecuten manualmente.
    forceValidation();

    //Si hay algún campo con la clase error en el formulario no se envía.
    if (loginForm.querySelectorAll(".error").length > 0) {
        return;
    }

    //Se crea las constantes nombre, email y token (que vendrá dado por la petición)
    const userName = event.target.username.value;//Obtiene el valor de username 
    const password = event.target.password.value;//Obtiene el valor de password
    const token = await login(userName, password);//Se llama a la función login para autenticar los datos y que se muestre el token
    console.log(token);

    //Si se obtiene un token, se redirige al usuario a otra página en este caso a la de productos.
    if (token) {
        window.location.href="products.html";
    }
});




//------------------------Verificaciones de formulario-----------------------------------

//Validación de los formularios 
function loadValidation (){
    //Se busca todos los inputs con la clase .input-alphanumeric
    //Inputs alfanúmericos con caracter _ 
    const inputsAlphanumeric = document.querySelectorAll(".input-alphanumeric");

    //para cada uno de los inputs se añade un evento input, es decir que cada vez que el usuario escribe se ejecuta la validación
    inputsAlphanumeric.forEach((input) =>{

        input.addEventListener("input" , (event) => {

            //Se válida que el texto introducido cumpla con la expresión regular (comienza con minúscula, permite minúscula, mayúsculas, números y guiones bajos, además debe tener al menos 3 caracteres)
            const regex = /^(?=[a-z])(?!.*[^a-z0-9_]).{3,}$/;
            const verificationInputAlpNum = regex.test(event.target.value); 

            //Se busca el span cerca del div 
            const span = event.target.closest("div").querySelector("span");

            //Si no cumple con los requisitos de la expresión regular, se agrega una clase error al input (para mostrar los estilos de error), además de mostrar un mensaje de error en el span.
            if(!verificationInputAlpNum){
                input.classList.add("error");
                span.style.display = 'block';
                span.textContent = "Insert an alphanumeric. Text must be start with letter in lower case, and contain _"
                console.log("Error detectado");
            }else{//Si es válido se elimina la clase error, se oculta el span y indica que está todo ok.
                input.classList.remove("error");
                span.style.display = 'none';
                span.textContent = "";
                console.log("ok");
            }

        });
    });

    //Inputs alfanúmericos teniendo en cuenta símbolos especiales 
    //Se realiza lo mismo que en el código anterior salvo que se tiene en cuenta otros inputs con otras validaciones.

    const inputsAlphaNumSimb = document.querySelectorAll(".input-alphanumericSimbols");

    //para cada uno de los inputs se añade un evento input, es decir que cada vez que el usuario escribe se ejecuta la validación
    inputsAlphaNumSimb.forEach((input) =>{
        input.addEventListener("input" , (event) => {

            //LA expresión regular indica que debe la contraseña al menos 5 caracteres
            const regex = /^.{5,}$/;
            const verificationInputAlphaNumSimb = regex.test(event.target.value); 
            const span = event.target.closest("div").querySelector("span");

            //Si no es válido pasa lo mismo que en el caso anterior y si es válido también.
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


//Esta función permite que las validaciones para los campos anteriores se ejecuten manualmente.

function forceValidation() {
    
    //Selección de los input 
    const inputsAlphanumeric = document.querySelectorAll(".input-alphanumeric"); 
    inputsAlphanumeric.forEach(input => {
        // Crear el evento 'input'. Simula la acción de escribir o modificar el contenido de un campo de texto.
        const event = new Event('input', {
          'bubbles': true, //Puede propagarse hacia arriba en el DOM
          'cancelable': true //Puede ser cancelado
        });
      
        // Disparar el evento 'input' en cada campo seleccionado.
        input.dispatchEvent(event);
    });


    //Lo mismo que el anterior pero para el otro tipo de input
    const inputsAlphaNumSimb = document.querySelectorAll(".input-alphanumericSimbols");
    inputsAlphaNumSimb.forEach(input => {
        // Crear el evento 'input'
        const event = new Event('input', {
          'bubbles': true,
          'cancelable': true
        });
      
        // Disparar el evento 'input' en cada campo seleccionado.
        input.dispatchEvent(event);
    });
}

