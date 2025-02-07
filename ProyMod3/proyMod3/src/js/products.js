//Peticiones CRUD

//URL_BASE de la API

const API_BASE_URL = "https://fakestoreapi.com";

//----PETICIONES-------

//Petición GET (para traer todos los productos)

async function getAllProducts() {
    const url = `${API_BASE_URL}/products`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Request failure", response.status);
        }

        return await response.json();
        

    } catch (error) {
        console.error("Error fetching products", error);
    }
}

getAllProducts()
    .then((resultado) => {
        displayProducts(resultado);
    })
    .catch((error) => {  
        console.error("Error fetching products:", error);
});


    //fake offline
    /*const products = [
        {
          image: "https://example.com/image1.jpg",
          title: "Producto 1",
          description: "Descripción del producto 1",
          price: 19.99,
          category: "Electrónica"
        },
        {
          image: "https://example.com/image2.jpg",
          title: "Producto 2",
          description: "Descripción del producto 2",
          price: 29.99,
          category: "Ropa"
        },
        {
          image: "https://example.com/image3.jpg",
          title: "Producto 3",
          description: "Descripción del producto 3",
          price: 9.99,
          category: "Alimentación"
        },
        {
          image: "https://example.com/image4.jpg",
          title: "Producto 4",
          description: "Descripción del producto 4",
          price: 49.99,
          category: "Hogar"
        }
      ];

    displayProducts(products);*/


//Petición GET (traer solo un producto)
async function getProduct(id) {
    const url = `${API_BASE_URL}/products/${id}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Request failure", response.status);
        }

        return await response.json();
        

    } catch (error) {
        console.error("Error fetching products", error);
    }
}

//Petición POST (crear un nuevo producto)

async function createNewProduct(obj) { //obj pendiente de cambio
    const url = `${API_BASE_URL}/products`;

    try {
        const response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(obj),
        });

        if (!response.ok) {
            throw new Error("Request failure", response.status);
        }

        const result = await response.json();
        console.log(result);

    } catch (error) {
        console.error("Error creating product:", error);
    }
}

//createNewProduct(product);

//Petición PUT (editar un producto existente)

async function editProduct(obj, id) {//hay que pasarle los datos a cambiar y el id para que los cambie en ese producto
    const url = `${API_BASE_URL}/products/${id}`; //si quiero editar cualquier producto

    try {
        const response = await fetch(url,{
            method: "PUT",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(obj),
        });

        if (!response.ok) {
            throw new Error("Request failure", response.status);
        }

        const result = await response.json();
        console.log(result);

        //Aquí también puedo poner la lógica para repintar el producto (en ambos caso aquí o abajo me puedo crear una función)
        //repaint(obj, id);

    } catch (error) {
        console.error("Error editing product:", error);
    }
}

//Petición DELETE (borrar un producto)

async function deleteProduct(id) { //borramos el producto de la id especificada
    const url = `${API_BASE_URL}/products/${id}`;

    try {
        const response = await fetch(url,{
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Request failure", response.status);
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error("Error deleting product:", error);
    }
}


//Funciones manejadoras 

//funcion para mostrar todos los productos (todos estos productos vienen de la petición)

function displayProducts(products) {//a esta función se le deben pasar los datos obtenidos con la peticion del get

    console.log(products);

    //Localizamos en js el contenedor donde iran las cartas y que ya está en el html
    const productsContainer = document.getElementById("products-container");

    //Limpiamos o vaciamos el contenido HTML dentro de mi productsContainer
    productsContainer.innerHTML="";

    //Creamos un contenedor donde irán todo lo que quiero enseñar de cada producto (usamos un forEach para iterar y crear ese contenedor por cada uno)
    products.forEach((product) => {
        console.log(product);

        //creamos por cada producto un contenedor
        const productCard = document.createElement("div");

        //Le damos un id al elemento creado
        productCard.id = `product-${product.id}`; //el id de las tarjetas son : product-01, product-02....
        productCard.className = "product-card"; //REVISAR esta parte

        //creamos dos contenedores uno para la informacion y otro para los botones de edit y delete y le damos una clase a cada uno
        const cardInfo = document.createElement("div");
        const cardButtons = document.createElement("div");

        cardInfo.className = "card-info";
        cardButtons.className = "card-buttons";

        //metemos los dos div dentro de productCard
        productCard.appendChild(cardInfo);
        productCard.appendChild(cardButtons);

        //añadimos una plantilla literal para generar un html con las siguientes partes en la cardInfo dentro de productCard:
        cardInfo.innerHTML= `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p>${product.price} €</p>
            <p>${product.category}</p>`; //Esto tiene que ir oculto porque no quiero mostrarlo (display: none)

        //creamos un boton de delete y edit
        const buttonDelete = document.createElement("button");
        buttonDelete.id = `buttonDelete-${product.id}`;
        const buttonEdit = document.createElement("button");
        buttonEdit.id = `buttonEdit-${product.id}`;

        //Le damos a cada uno contenido de texto descriptivo de lo que hacen 
        buttonDelete.textContent = "Delete";
        buttonEdit.textContent = "Edit";
        
        //inyectamos los dos botones en el contenedor cardButtons
        cardButtons.appendChild(buttonEdit);
        cardButtons.appendChild(buttonDelete);

        //Añadimos eventos a los botones
        buttonEdit.addEventListener("click", (evento) => {
            editAndShowForm(evento);
        })

        //lo inyectamos en el DOM
        productsContainer.appendChild(productCard);

    });
}

//3
function editAndShowForm(evento){
    const buttonId = evento.target;
    console.log(buttonId);

    const productId = buttonId.id.replace('buttonEdit-', '');
    console.log(productId);

    const containerForm = document.getElementById("products-form");

    containerForm.innerHTML="";

    const form = document.createElement("form");

    containerForm.appendChild(form);

    getProduct(productId) //Tengo que añadir aquí un título que segun el botón que toque salga un título u otro
    .then((product) => {
        form.innerHTML= `
        <label for="title">Title Product: </label>
        <input type="text" name="title" id="title" value="${product.title}" required>
        <label for="price">Price:</label>
        <input type="text" name="price" id="price" value="${product.price}" required>
        <label for="description">Description: </label>
        <input type="text" name="description" id="description" value="${product.description}" required>
        <label for="image">Image url: </label>
        <input type="text" name="image" id="image" value="${product.image}" required>
        <label for="category">Category: </label>
        <input type="text" name="category" id="category" value="${product.category}" required>
        
        <button type="submit">Send</button>
        <button type="reset">Cancel</button>`;

        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const updatedProduct = {
                title: event.target.title.value,
                price: event.target.price.value,
                description: event.target.description.value,
                image: event.target.image.value,
                category: event.target.category.value,
            }
            console.log(updatedProduct);
            console.log(event);
            await editProduct(updatedProduct, productId);
            //Aquí puedo hacer una lógica para repintar la tarjeta 
            repaint(updatedProduct, productId);

        })

    })
    .catch((error) => {  
        console.error("Error fetching products:", error);
    });


   

}


function repaint(obj, id) {
    //funcion de repintar una card 
    const cardProductId = `product-${id}`;
    const title = document.querySelector(`#${cardProductId} .card-info h3`);
    title.textContent = obj.title;
    //console.log(card);
}





































/*
    //Función para editar un producto 
    function editProduct(event){
        console.log(event);

        console.log('estoy editando un producto');
        //Recupera el container del formulario y lo borra
        const formContainer = document.getElementById("products-form");
        formContainer.innerHTML = "";

        //Crea formulario con los datos
        //Param1 es el container donde injectaremos el formulario
        //Param2 es el card del cual ulsamos el boton edit esa funcion recupera toda la info de la tarjeta
        const product = getProductFromCard(event.target);
        fillForm(formContainer, product);
        
        toggleDisplay(formContainer); //Muestra elemento o lo oculta
    }


    function getProductFromCard(editButton){
        console.log(editButton);
        const product = 
            {
              image: "https://example.com/image1.jpg",
              title: "Producto 2",
              description: "Descripción del producto 1",
              price: 19.99,
              category: "Electrónica"
            };
            return product;
    }

    function fillForm(form, product){
        console.log('voy a rellenar el formulario con los datos de la card');
        const title = document.getElementById("products-form");
        form.innerHTML= `<form id="editAddProductForm">
            <label for="title">Title Product:</label>
            <input type="text" name="title" id="title" value="${product.title}" required>
            <label for="price">Price:</label>
            <input type="text" name="price" id="price" value="${product.image}"required>
            <label for="description">Description: </label>
            <input type="text" name="description" id="description" value="${product.description}" required>
            <label for="image">Image url: </label>
            <input type="text" name="image" id="image" value="${product.image}" required>
            <label for="category">Category: </label>
            <input type="text" name="category" id="category" value="${product.category}" required>
          </form>
          <button type="submit">Send</button>
          <button type="reset">Clear</button>`
    }



    //Función para editar un producto 
    function deleteProduct(){
        console.log('estoy borrando un producto');
    }
    
    //Utils
    function toggleDisplay(element) {
        if (element.style.display === "none") {
          element.style.display = "block"; // Muestra el elemento
        } else {
          element.style.display = "none"; // Oculta el elemento
        }
    }

   
}
*/

