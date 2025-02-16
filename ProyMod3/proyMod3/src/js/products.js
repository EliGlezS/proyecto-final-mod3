//Peticiones CRUD

//URL_BASE de la API

const API_BASE_URL = "https://fakestoreapi.com";

//--------------------------------------PETICIONES---------------------------------------------
//Peticiones asíncronas --> Peticiones HTTP que no bloquean la ejecución del código.

//Petición GET (para traer todos los productos)
async function getAllProducts() {
    const url = `${API_BASE_URL}/products`;

    try {
        const response = await fetch(url);//Solicitud HTTP a la URL especificada, antes de continuar al siguiente paso la función espera a que la respuesta sea recibida

        if (!response.ok) {//Si la respuesta no es exitosa, lanza un mensaje de error y el estado de la respuesta.
            throw new Error("Request failure", response.status);
        }

        return await response.json(); //Se convierte la respuesta en formato json
        

    } catch (error) {//Error en la solicitud
        console.error("Error fetching products", error);
    }
}

/*Se llama a la función anterior, como es asíncrona, devuleve una promesa que al resolverse, devolverá el resultado.
Si la promesa se resuelve correctamente el resultado se pasa como parámetro a la función displayProducts mostrando los 
productos obtenidos*/

getAllProducts()
    .then((resultado) => {
        displayProducts(resultado);
    })
    .catch((error) => {  
        console.error("Error fetching products:", error);
});

/*Se declaró un array de objetos que contiene los productos resultado de la petición GET (alllProducts) 
a la API, debido a problemas con la misma */
/*const resultado = [
    {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},
    {"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}},
    {"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500}},
    {"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","category":"men's clothing","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg","rating":{"rate":2.1,"count":430}},
    {"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","category":"jewelery","image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":4.6,"count":400}},
    {"id":6,"title":"Solid Gold Petite Micropave ","price":168,"description":"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.","category":"jewelery","image":"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":3.9,"count":70}},
    {"id":7,"title":"White Gold Plated Princess","price":9.99,"description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...","category":"jewelery","image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":3,"count":400}},
    {"id":8,"title":"Pierced Owl Rose Gold Plated Stainless Steel Double","price":10.99,"description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel","category":"jewelery","image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":1.9,"count":100}},
    {"id":9,"title":"WD 2TB Elements Portable External Hard Drive - USB 3.0 ","price":64,"description":"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system","category":"electronics","image":"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg","rating":{"rate":3.3,"count":203}},
    {"id":10,"title":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s","price":109,"description":"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)","category":"electronics","image":"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg","rating":{"rate":2.9,"count":470}},
    {"id":11,"title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5","price":109,"description":"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.","category":"electronics","image":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg","rating":{"rate":4.8,"count":319}},
    {"id":12,"title":"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive","price":114,"description":"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty","category":"electronics","image":"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg","rating":{"rate":4.8,"count":400}},
    {"id":13,"title":"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin","price":599,"description":"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz","category":"electronics","image":"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg","rating":{"rate":2.9,"count":250}},
    {"id":14,"title":"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ","price":999.99,"description":"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag","category":"electronics","image":"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg","rating":{"rate":2.2,"count":140}},
    {"id":15,"title":"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats","price":56.99,"description":"Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates","category":"women's clothing","image":"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg","rating":{"rate":2.6,"count":235}},
    {"id":16,"title":"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket","price":29.95,"description":"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON","category":"women's clothing","image":"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg","rating":{"rate":2.9,"count":340}},
    {"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women's clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg","rating":{"rate":3.8,"count":679}},
    {"id":18,"title":"MBJ Women's Solid Short Sleeve Boat Neck V ","price":9.85,"description":"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem","category":"women's clothing","image":"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg","rating":{"rate":4.7,"count":130}},
    {"id":19,"title":"Opna Women's Short Sleeve Moisture","price":7.95,"description":"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort","category":"women's clothing","image":"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg","rating":{"rate":4.5,"count":146}},
    {"id":20,"title":"DANVOUY Womens T Shirt Casual Cotton Short","price":12.99,"description":"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.","category":"women's clothing","image":"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg","rating":{"rate":3.6,"count":145}}
];*/


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
async function createNewProduct(obj) { 
    const url = `${API_BASE_URL}/products`;

    try {
        const response = await fetch(url,{
            method: "POST",//Método POST que se usa para enviar datos al servidor 
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


//Petición PUT (editar un producto existente)
async function editProduct(obj, id) {//Se pasan los datos a cambiar y el id para que los actualice en ese producto
    const url = `${API_BASE_URL}/products/${id}`; 

    try {
        const response = await fetch(url,{
            method: "PUT",//Método HTTP que implica la actualización en este caso de un producto.
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

        //Se puede llamar a la función repaint en esta línea de código pero se evita para no mezclar funcionalidades en la petición

    } catch (error) {
        console.error("Error editing product:", error);
    }
}

//Petición DELETE (borrar un producto)
async function deleteProduct(id) { //borramos el producto de la id especificada
    const url = `${API_BASE_URL}/products/${id}`;

    try {
        const response = await fetch(url,{
            method: "DELETE",//Método para eliminar un recurso, en este caso eliminar un producto.
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


//----------------------------------Funciones manejadoras------------------------------------------ 

//Función para mostrar todos los productos en la web (estos productos vienen de la petición).
function displayProducts(products) {//recibe por parámetro un array de objetos con el resultado de la petición GET de todos los productos.

    console.log(products);

    //Se localiza o selecciona (HTML) el contenedor donde se mostrarán las cartas de los productos.
    const productsContainer = document.getElementById("products-container");

    //Se vacía el contenedor en caso de que hubiera contenido.
    productsContainer.innerHTML="";

    //Se crea un contenedor donde irán todo lo que quiero enseñar de cada producto (usamos un forEach para iterar y crear ese contenedor por cada uno de los productos)
    products.forEach((product) => {
        createProduct(product, productsContainer);
    });

    //se crea un botón para añadir un producto nuevo
    addNewProductToDOM();

}

//Función para crear un contenedor HTML de un producto y añadirlo dinámicamente al DOM.
function createProduct(product, productsContainer) {
    console.log(product);//Comprobación para saber si los datos llegan bien.

    //Se crea un div para cada producto.
    const productCard = document.createElement("div");

    //Se asigna un id a cada tarjeta de producto.
    productCard.id = `product-${product.id}`; //el id de las tarjetas son : product-01, product-02....
    productCard.className = "product-card"; //Se le asigna una clase a productCard para dar estilos a las tarjetas.


    //Se crean dos contenedores uno para la información del producto y otro para los botones de edit y delete, asignandoles una clase a cada uno.
    const cardInfo = document.createElement("div");
    const cardButtons = document.createElement("div");

    cardInfo.className = "card-info";
    cardButtons.className = "card-buttons";

    //Se agregan los contenedores al contenedor principal productCard
    productCard.appendChild(cardInfo);
    productCard.appendChild(cardButtons);

    //Se usa una template literal para generar un html con las siguientes partes en la cardInfo dentro de productCard:
    cardInfo.innerHTML = `
            <img class="product-img" src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="product-description">${product.description}</p>
            <p class="product-price">${product.price} €</p>
            <p class="product-category">${product.category}</p>`; //Va oculto en el css (display: none)


    //Se crea un botón de delete y edit, se asigna un id a cada tipo de botón.
    const buttonDelete = document.createElement("button");
    buttonDelete.id = `buttonDelete-${product.id}`;
    const buttonEdit = document.createElement("button");
    buttonEdit.id = `buttonEdit-${product.id}`;

    //Se asigna a cada uno un texto explicativo de su función.
    buttonDelete.textContent = "Delete";
    buttonEdit.textContent = "Edit";

    //Se añaden los dos botones en el contenedor cardButtons
    cardButtons.appendChild(buttonEdit);
    cardButtons.appendChild(buttonDelete);

    //Se añaden eventos a cada uno de los botones
    buttonEdit.addEventListener("click", (event) => {
        editAndShowForm(event);//cuando hace click en editar se ejecuta la función editAndShowForm();
    });

    buttonDelete.addEventListener("click", (event) => {
        deleteProductToDOM(event);//cuando hace click en eliminar se ejecuta la función deleteProductToDOM();
    });

    //Se agrega el contenedor productCard (con la información y los botones) al contenedor principal productsContainer en el DOM.
    productsContainer.appendChild(productCard);
}

/*Función para editar un producto, el objetivo de la función es mostrar un formulario para editar los datos de un producto,
al darle click al botón de editar, con la posbilidad de enviar los datos después de modificarlos y que estos se muestren 
al usuario a través del DOM*/
function editAndShowForm(event){

    //Se obtiene el Id del botón al hacer click sobre el.
    const buttonId = event.target;
    console.log(buttonId);

    //Se extrae el Id del producto al quitar el prefijo del Id del botón.
    const productId = buttonId.id.replace('buttonEdit-', '');
    console.log(productId);

    //Se selecciona el contenedor del formulario edit 
    const containerForm = document.getElementById("products-form");

    //Aseguramos que se muestre el formulario si está oculto.
    containerForm.style.display = 'block'; // Nos aseguramos que el contenedor sea visible

    containerForm.innerHTML="";//Se limpia el contenido del formulario.

    //Se llama a getProduct para obtener los detalles del producto usando su Id
    getProduct(productId) 
    .then((product) => {//Se usa then para manejar la respuesta. Una vez se obtiene el producto, se genera dinámicamente el formulario con los datos del producto.
        //Se crea el HTML del formulario
        containerForm.innerHTML= `
        <div id="modalBoxEdit" class="modal">
            <div class="modal-content">
                <form novalidate>
                
                    <span class="close"> &times;</span>
                    <h3>Edit Product Form</h3>

                    <div>
                        <label for="title">Title Product: </label>
                        <input class="input-alphanumeric" type="text" name="title" id="title" value="${product.title}" required>
                        <span></span>
                    </div>

                    <div>
                        <label for="price">Price:</label>
                        <input class="input-numeric" type="text" name="price" id="price" value="${product.price}" required>
                        <span></span>
                    </div>

                    <div>
                        <label for="description">Description: </label>
                        <input class="input-alphanumeric" type="text" name="description" id="description" value="${product.description}" required>
                        <span></span>
                    </div>

                    <div>
                        <label for="image">Image url: </label>
                        <input type="text" name="image" id="image" value="${product.image}" required>
                    </div>
                    
                    <div>
                        <label for="category">Category: </label>
                        <input class="input-alpha" type="text" name="category" id="category" value="${product.category}" required>
                        <span></span>
                    </div>

                    <div class="button-modal-form">
                        <button class="button-submit" type="submit">Send</button>
                        <button class="button-reset" type="button">Cancel</button>
                    </div>

                </form>
            </div>
        </div>`;

        //Se llama a la función de validación del formulario
        loadValidation();

        //Localizamos el modalBox donde se insertará el formulario
        const form = document.querySelector("#modalBoxEdit form");

        //Se añade un addEventListener de tipo submit al formulario
        form.addEventListener("submit", async (event) => {
            event.preventDefault();//Evita la recarga de la página

            //Si hay errores en el formulario no se envía.
            if (form.querySelectorAll(".error").length > 0) {
                return;
            }
            
            //Si no hay errores se recopilan los datos del formulario en updatedProduct y se llama a lapetición para realizar la edición del producto.
            const updatedProduct = {
                title: event.target.title.value,
                price: event.target.price.value,
                description: event.target.description.value,
                image: event.target.image.value,
                category: event.target.category.value,
            }
            console.log(updatedProduct);

            await editProduct(updatedProduct, productId);

            //Se llama a la función repaint() para actualizar la tarjeta del producto en el DOM.
            repaint(updatedProduct, productId);


            //BOTÓN SEND DEL FORMULARIO

            //Se consigue una vez hace el send, que el contenedor de ese formulario pase a display none y se deje de visualizar
            
            //Se selecciona el contenedor del formulario 
            const containerFormEdit = document.getElementById("products-form");

            //Se llama a la función de toggleDisplay y se le pasa el contenedor donde se encuentra el formulario.
            toggleDisplay(containerFormEdit);
        });

        //BOTÓN CANCEL DEL FORMULARIO

        //Se crea la funcionalidad del botón cancel del formulario editar
        //Selección del botón con la clase button-reset dentro del formulario que esta contenido en el modalBoxEdit
        const buttonCancel = document.querySelector(`#modalBoxEdit .button-reset`);
        console.log(buttonCancel);

        //Se agrega un addEventListener al botón cancelar para que al hacer click se ejecute la función toggleContainerForm.
        buttonCancel.addEventListener("click", (event) =>{
             toggleContainerForm(event);
        });

        //SPAN PARA CERRAR EL FORMULARIO 

        //Selección del icono de cerrar (con la clase close) dentro del formulario  
        const spanForm = document.querySelector("#modalBoxEdit .close");
        //Se agrega un addEventListener que al hacer click en la x se ejecuta la función toggleContainerForm.
        spanForm.addEventListener("click", (event) =>{
            toggleContainerForm(event);
        });

    })
    .catch((error) => {  //En caso de error 
        console.error("Error fetching products:", error);
    });

}

//funcion de repintar una card
//Tiene como objetivo actualizar la información de una tarjeta de producto en el DOM después de ser editada.
function repaint(obj, id) {
    //Se crea el id del producto, siguiendo el formato product-{id}. Usandose para identificar y seleccionar la tarjeta del producto en el DOM
    const cardProductId = `product-${id}`;

    //Actualizar los elementos dentro de la tarjeta

    /*Se seleccionan los elementos dentro de la tarjeta y se actualiza su contenido.
    
    Ejemplo:
    Se selecciona el elemento h3 dentro de .card-info en el contenedor con id #cardProductId, luego 
    se cambia el contenido de ese h3 por el título del objeto creado a través del form. Se hará para todas
    las propiedades del objeto que se quieran editar*/

    //Imagen
    const img = document.querySelector(`#${cardProductId} .card-info .product-img`);
    img.src = obj.image;
    //Título
    const title = document.querySelector(`#${cardProductId} .card-info h3`);
    title.textContent = obj.title;
    //Descripción
    const description = document.querySelector(`#${cardProductId} .card-info .product-description`);
    description.textContent = obj.description;
    //Precio
    const price = document.querySelector(`#${cardProductId} .card-info .product-price`);
    price.textContent = obj.price;
    //Categoria
    const category = document.querySelector(`#${cardProductId} .card-info .product-category`);
    category.textContent = obj.category;
}


//Función para borrar una card de un producto del DOM 
async function deleteProductToDOM(event) {

    /*Al hacer click en el botón de eliminar el event.target hace referencia al botón en sí. Se guarda el Id para extraer 
    el Id del producto al que pertenece ese botón*/
    const buttonId = event.target;
    console.log(buttonId);

    /*Se usa el id del botón eliminar (buttonDelete-{product.id}) y con replace se elimina la parte buttonDelete- por vacío
    consiguiendo solo el productId que es el identificador del producto que se quiere eliminar.*/
    const productId = buttonId.id.replace('buttonDelete-', '');
    console.log(productId);

    /*Con el productId se localiza la tarjeta del producto en el DOM. El Id de la tarjeta viene dado con el formato 
    product-{productId}, por lo que este será el Id que se use para seleccionar y guardar la variable productCard*/
    const productCard = document.getElementById(`product-${productId}`);
    console.log(productCard);

    //Se llama a la función deleteProduct que es una funcioón asíncrona que hace la petición DELETE para eliminar el producto
    await deleteProduct(productId);

    //Para eliminar la tarjeta del DOM. Si la tarjeta del producto se encuentra, se elimina usando productCard.remove().
    if (productCard) {
        productCard.remove();
        console.log(productCard);
    }
}


//Función para agregar un producto nuevo al DOM (y a la base de datos de manera falsa).
function addNewProductToDOM() {

    //Se localiza el contenedor donde se mostrarán los productos.
    const productsContainer = document.getElementById("products-container");

    //Se localiza el propio botón de agregar
    const addNewProductButton = document.querySelector("#container-addButton .addProduct");
    
    //El botón tiene un evento, al hacer click en el se muestra el formulario para agregar un nuevo producto.
    addNewProductButton.addEventListener("click", () => {

        const containerForm = document.getElementById("products-form");
        containerForm.style.display = 'block'; //Asegurarse que el contenedor sea visible
        containerForm.innerHTML=""; //Se limpia el contenido anterior del formulario

        //Se crea dinámicamente el formulario con los campos que se deben introducir del producto
        containerForm.innerHTML= `

        <div id="modalBoxAdd" class="modal">
            <div class="modal-content">
                <form novalidate> 
                    <span class="close"> &times;</span>
                    <h3>Add New Product Form</h3>

                    <div>
                        <label for="title">Title Product: </label>
                        <input class="input-alphanumeric" type="text" name="title" id="title" placeholder="Enter a title product..." required>
                        <span></span>
                    </div>

                    <div>
                        <label for="price">Price:</label>
                        <input class="input-numeric" type="text" name="price" id="price" placeholder="Price..." required>
                        <span></span>
                    </div>

                    <div>
                        <label for="description">Description: </label>
                        <input class="input-alphanumeric" type="text" name="description" id="description" placeholder="Description..." required>
                        <span></span>
                    </div>

                    <div>
                        <label for="image">Image url: </label>
                        <input type="text" name="image" id="image" placeholder="Url..." required>
                    </div>
                  
                    <div>
                        <label for="category">Category: </label>
                        <input class="input-alpha" type="text" name="category" id="category" placeholder="Category..." required>
                        <span></span>
                    </div>
                    
                    <div  class="button-modal-form">  
                        <button class="button-submit" type="submit">Send</button>
                        <button class="button-reset" type="button">Cancel</button>
                    </div>

                </form>
            </div>
        </div>`;

        //Se llama a la función para validar el formulario
        loadValidation();

        //Se selecciona el formulario que se encuentra dentro del contenedor con Id modalBoxAdd
        const formAdd  = document.querySelector("#modalBoxAdd form");

        //Se agrega un evento de tipo submit al formulario anteriormente localizado.
        formAdd.addEventListener("submit", async (event) => {
            event.preventDefault();//Se evita la recarga predeterminada de la página cuando se envía un formulario

            //Se llama a la función forceValidation para forzar la validación del formulario de manera manual
            forceValidation();


            /*Se revisa si hay elementos con clase error en el formulario, permitiendo verificar si alguna validación ha fallado,
            si es así se detiene el envío del formulario y no se crea el producto*/
            if (formAdd.querySelectorAll(".error").length > 0) {
                return;
            }
            
            //Se construye un objeto con los valores de los campos del formulario, conteniendo este objeto los datos que serán enviados para crear el nuevo producto
            const addProduct = {
                title: event.target.title.value,
                price: event.target.price.value,
                description: event.target.description.value,
                image: event.target.image.value,
                category: event.target.category.value,
            }
            console.log(addProduct);

            //Se espera a que se complete la llamada asíncrona que envía los datos al servidor para crear el nuevo producto (fake)
            await createNewProduct(addProduct);

            //Se llama a la función createProduct para agregar el producto al DOM

            createProduct(addProduct, productsContainer);

            //Se llama a la función toggleDisplay para ocultar el contenedor del formulario una vez el producto haya sido agregado.
            toggleDisplay(containerForm);
            

        });

        //BOTÓN CANCEL DEL FORMULARIO

        //Se localiza el botón cancelar del formulario de añadir un producto nuevo
        const buttonCancel = document.querySelector(".button-reset");
        console.log(buttonCancel);
        //El botón escucha un evento click que llama a la función toggleContainerForm
        buttonCancel.addEventListener("click", (event) =>{
           toggleContainerForm(event); //oculta el formulario
        });

        //SPAN PARA CERRAR EL FORMULARIO 
        //Se localiza o selecciona el icono de cierre x dentro del contenedor del formulario (modalBoxAdd)
        const spanForm = document.querySelector("#modalBoxAdd .close");
        //el span del formulario escucha un evento click que llama a la función toggleContainerForm para cerrar el formulario (cuando se hace click en la x).
        spanForm.addEventListener("click", (event) =>{
            toggleContainerForm(event);
    
        });

    })
    
}




//---------------------------------------Funciones Aux----------------------------------------------

//Función para que que un elemento sea visible (style: "block") o invisible (style: "none").
//(alterna la visibilidad de un elemento).
function toggleDisplay(element) {
    element.style.display === "block" ? element.style.display = "none" : element.style.display = "block";
    console.log(element);
}


//Función interruptor para alternar la visibilidad de los formularios.
function toggleContainerForm(event) {
    event.preventDefault();

    //Selección del contenedor del formulario 
    const containerFormAdd = document.getElementById("products-form");

    //Se llama a la función de toggleDisplay y se pasa como argumento el container donde se encuentra el formulario.
    toggleDisplay(containerFormAdd);
}


//------------------------Verificaciones de formulario-----------------------------------

//Validación de formularios 
function loadValidation (){
    
    //Inputs alfanúmericos
    //Se localiza los inputs con la clase input-alphanumeric 

    const inputsAlphanumeric = document.querySelectorAll(".input-alphanumeric");

    inputsAlphanumeric.forEach((input) =>{
        input.addEventListener("input" , (event) => {
            //Se usa una expresión regular para validar el valor introducido a través del input 
            //Regex asegura que el texto empiece con mayúsculas, puede contener mayúsculas y minúsculas, números, puntos y guiones.
            const regex = /^[A-Z][a-zA-Z0-9.-]*$/;
            const verificationInputAlpNum = regex.test(event.target.value); 
            //Se localiza al span
            const span = event.target.closest("div").querySelector("span");

            /*Si la entrada no cumple con el regex se añade una clase nueva al input (error), con esta se da estilos a través de css.
            Cuando no cumple la expresión se muestra un mensaje de error a través del span. En cambio si es válida la entrada
            se elimina el error y no se muestra el span*/ 
            if(!verificationInputAlpNum){
                input.classList.add("error");
                span.style.display = 'block';
                span.textContent = "Insert an alphanumeric. Text must be start with upper case."
                console.log("Error detectado");
            }else{
                input.classList.remove("error");
                span.style.display = 'none';
                span.textContent = "";
                console.log("Todo ok");
            }

        });
    });
    
    //Lo mismo que el anterior, cambiando el tipo de input y la expresión regular usada.
    //Inputs númericos

    const inputsNumeric = document.querySelectorAll(".input-numeric");

    inputsNumeric.forEach((input) =>{
        input.addEventListener("input" , (event) => {

            //Esta expresión valida números decimales mayores que 0, así como valores negativos.
            const regex = /^(?!0(\.0+)?$)(?!\-)(\d+(\.\d+)?|\.\d+)$/;
            const verificationInputNum = regex.test(event.target.value); 
            const span = event.target.closest("div").querySelector("span");

            if(!verificationInputNum){
                input.classList.add("error");
                span.style.display = 'block';
                span.textContent = "Insert a number. Price must be greater than 0."
                console.log("Error detectado");
            }else{
                input.classList.remove("error");
                span.style.display = 'none';
                span.textContent = "";
                console.log("Todo ok");
            }

        });
    });

    //Lo mismo que el anterior, cambiando el tipo de input y la expresión regular usada.
    //Inputs alfabéticos

    const inputsAlpha = document.querySelectorAll(".input-alpha");

    inputsAlpha.forEach((input) =>{
        input.addEventListener("input" , (event) => {

            //Esta expresión valida letras en minúscula y apóstrofos.
            const regex = /^[a-z']+$/;
            const verificationInputAlpha = regex.test(event.target.value); 
            const span = event.target.closest("div").querySelector("span");

            if(!verificationInputAlpha){
                input.classList.add("error");
                span.style.display = 'block';
                span.textContent = "Insert letters. Only in lower case."
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
//Simula la entrada de texto en los inputs y dispara la validación asociada a cada uno de ellos.

function forceValidation() {
    
    //Inputs alfanuméricos
    const inputsAlphanumeric = document.querySelectorAll(".input-alphanumeric"); 
    inputsAlphanumeric.forEach(input => {
        // Crear el evento 'input'
        /*Para cada tipo de input se crea un evento input que provoca que la validación asociada a ese input se ejecute.*/
        const event = new Event('input', {
          'bubbles': true,
          'cancelable': true
        });
      
        /* A continuación se llama input.dispatchEvent(event); esta función es útil cuando se necesita manejar un evento, 
        como si el usuario hubiera interactuado con el campo, sin que realmente lo haga (forzar el evento input de manera artificial)*/
        input.dispatchEvent(event);
    });

    //Inputs numéricos
    const inputsNumeric = document.querySelectorAll(".input-numeric");
    inputsNumeric.forEach(input => {
        // Crear el evento 'input'
        const event = new Event('input', {
          'bubbles': true,
          'cancelable': true
        });
      
        input.dispatchEvent(event);
    });

    //Inputs alfabéticos
    const inputsAlpha = document.querySelectorAll(".input-alpha");
    inputsAlpha.forEach(input => {
        // Crear el evento 'input'
        const event = new Event('input', {
          'bubbles': true,
          'cancelable': true
        });
      
        input.dispatchEvent(event);
    });
}




























