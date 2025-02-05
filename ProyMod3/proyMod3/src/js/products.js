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

/*let product = {
      title: "test product",
      price: 20,
       description: "lorem ipsum set",
       image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBulg8Mxel1MjdKW4B89GIyMfynCIAMnr5jA&s",
      category: "men's clothing",
};*/

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

        const result = response.json();
        console.log(result);

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

    //Localizamos en js el contenedor donde iran las cartas y que ya está en el html
    const productsContainer = document.getElementById("products-container");

    //Limpiamos o vaciamos el contenido HTML dentro de mi productsContainer
    productsContainer.innerHTML="";

    //Creamos un contenedor donde irán todo lo que quiero enseñar de cada producto (usamos un forEach para iterar y crear ese contenedor por cada uno)
    products.forEach((product) => {
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
            <p>${product.price} €</p>`;

        //creamos un boton de delete y edit
        const buttonDelete = document.createElement("button");
        const buttonEdit = document.createElement("button");

        buttonDelete.textContent = "Delete";
        buttonEdit.textContent = "Edit";

        //inyectamos los dos botones en el contenedor cardButtons
        cardButtons.appendChild(buttonEdit);
        cardButtons.appendChild(buttonDelete);

        //lo inyectamos en el DOM
        productsContainer.appendChild(productCard);

    });

   
}