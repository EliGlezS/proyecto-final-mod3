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

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error("Error fetching products", error);
    }
}

//getAllProducts();

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