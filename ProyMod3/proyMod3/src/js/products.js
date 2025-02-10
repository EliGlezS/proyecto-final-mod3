//Peticiones CRUD

//URL_BASE de la API

const API_BASE_URL = "https://fakestoreapi.com";

//--------------------------------------PETICIONES---------------------------------------------

//Petición GET (para traer todos los productos)
/*async function getAllProducts() {
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
}*/

/*getAllProducts()
    .then((resultado) => {
        displayProducts(resultado);
    })
    .catch((error) => {  
        console.error("Error fetching products:", error);
});*/

const resultado = [
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
];


//Petición GET (traer solo un producto)
/*async function getProduct(id) {
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
}*/


//----------------------------------Funciones manejadoras------------------------------------------ 

//funcion para mostrar todos los productos (todos estos productos vienen de la petición)

function displayProducts(products) {//a esta función se le deben pasar los datos obtenidos con la peticion del get

    console.log(products);

    //Localizamos en js el contenedor donde iran las cartas y que ya está en el html
    const productsContainer = document.getElementById("products-container");

    //Limpiamos o vaciamos el contenido HTML dentro de mi productsContainer
    productsContainer.innerHTML="";

    //Creamos un contenedor donde irán todo lo que quiero enseñar de cada producto (usamos un forEach para iterar y crear ese contenedor por cada uno)
    products.forEach((product) => {
        createProduct(product, productsContainer);
    });

    //se crea un botón para añadir un producto nuevo
    addNewProductToDOM();

}

displayProducts(resultado); //QUITAR LUEGO JUNTO CON EL OBJETO CREADO

//Función para pintar un producto y pintarlo en el DOM

function createProduct(product, productsContainer) {
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
    cardInfo.innerHTML = `
            <img class="product-img" src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="product-description">${product.description}</p>
            <p class="product-price">${product.price} €</p>
            <p class="product-category">${product.category}</p>`; //Esto tiene que ir oculto porque no quiero mostrarlo (display: none)


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
    buttonEdit.addEventListener("click", (event) => {
        editAndShowForm(event);
    });

    buttonDelete.addEventListener("click", (event) => {
        deleteProductToDOM(event);
    });

    //lo inyectamos en el DOM
    productsContainer.appendChild(productCard);
}

/*función para editar un producto (al darle al botón edit del producto y que aparezca un 
formulario con los datos del producto a editar)*/

//Cambiar function editAndShowForm con sync y ponerle un await getProduct y cambiar todo

function editAndShowForm(event){
    const buttonId = event.target;
    console.log(buttonId);

    const productId = buttonId.id.replace('buttonEdit-', '');
    console.log(productId);

    const containerForm = document.getElementById("products-form");

    //mostrar el formulario si está oculto
    containerForm.style.display = 'block'; // Nos aseguramos que el contenedor sea visible

    containerForm.innerHTML="";

    const form = document.createElement("form");

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
        
        <button class="button-submit" type="submit">Send</button>
        <button class="button-reset" type="reset">Cancel</button>`;

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

            await editProduct(updatedProduct, productId);
            //Aquí puedo hacer una lógica para repintar la tarjeta o llamar directamente a una función que tenga incluida esa lógica
            repaint(updatedProduct, productId);


            //BOTÓN SEND DEL FORMULARIO

            //Con este paso se logra una vez hace el send, el contenedor de ese formulario pase a display none y se deje de visualizar
            
            //selección del contenedor del formulario 
            const containerFormEdit = document.getElementById("products-form");

            //Llamamos a la función de toggleDisplay y le pasamos el container donde se encuentra el formulario
            toggleDisplay(containerFormEdit);
            

        });

        //BOTÓN CANCEL DEL FORMULARIO

        //Creo la funcionalidad del botón cancel del formulario editar
        const buttonCancel = document.querySelector(`.button-reset`);
        console.log(buttonCancel);
        buttonCancel.addEventListener("click", (event) =>{
        event.preventDefault();

        //selección del contenedor del formulario 
        const containerFormEdit = document.getElementById("products-form");

        //Llamamos a la función de toggleDisplay y le pasamos el container donde se encuentra el formulario
        toggleDisplay(containerFormEdit);

        });

    })
    .catch((error) => {  
        console.error("Error fetching products:", error);
    });

    containerForm.appendChild(form);

    /*AQUI SE PUEDE PONER EL TOGGLEDISPLAY PARA HACER QUE APAREZCA Y DESAPAREZCA PERO NO QUEDA BIEN
    DAR A EDIT DE OTRO PRODUCTO Y QUE DESAPAREZCA Y TENGA QUE VOLVER A DARLE. PREFIERO DAR ESA FUNCIONALIDAD 
    AL BOTÓN CANCEL CON LA ÚNICA CONDICIÓN QUE SI ES BLOCK EL FORMULARIO ME HAGA NONE*/

}

//funcion de repintar una card
function repaint(obj, id) {
    //Localizar a la card que se quiere repintar
    const cardProductId = `product-${id}`;

    /*Seleccionar el elemento h3 dentro de .card-info en el contenedor con id #cardProductId y luego 
    cambiamos el contenido de ese h3 por el titulo del objeto creado a través del form. Se hará para todas
    las propiedades del objeto a editar*/

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


//Función para borrar una card de un producto

async function deleteProductToDOM(event) {
    const buttonId = event.target;
    console.log(buttonId);

    const productId = buttonId.id.replace('buttonDelete-', '');
    console.log(productId);

    const productCard = document.getElementById(`product-${productId}`);
    console.log(productCard);

    await deleteProduct(productId);

    if (productCard) {
        productCard.remove();
        console.log(productCard);
    }
}



//Función para agregar un producto nuevo 

function addNewProductToDOM() {

    //Localizamos en js el contenedor donde irá la carta del nuevo producto
    const productsContainer = document.getElementById("products-container");

    //Localizamos en mi html desde js el contenedor (div) para el botón add

    const buttonAddContainer = document.getElementById("container-addButton");

    //Localizamos el botón del html
    const addNewProductButton = document.querySelector("#container-addButton .addProduct");
    
    //El botón tiene un evento

    addNewProductButton.addEventListener("click", () => {

        const containerForm = document.getElementById("products-form");
        containerForm.style.display = 'block'; // Nos aseguramos que el contenedor sea visible
        containerForm.innerHTML="";

        //Creamos un formulario para añadir los datos del producto nuevo
        const formAdd = document.createElement("form");

        containerForm.appendChild(formAdd);

        formAdd.innerHTML= `
        <label for="title">Title Product: </label>
        <input type="text" name="title" id="title" required>
        <label for="price">Price:</label>
        <input type="text" name="price" id="price" required>
        <label for="description">Description: </label>
        <input type="text" name="description" id="description" required>
        <label for="image">Image url: </label>
        <input type="text" name="image" id="image" required>
        <label for="category">Category: </label>
        <input type="text" name="category" id="category" required>
        
        <button class="button-submit" type="submit">Send</button>
        <button class="button-reset" type="reset">Cancel</button>`;

        formAdd.addEventListener("submit", async (event) => {
            event.preventDefault();
            const addProduct = {
                title: event.target.title.value,
                price: event.target.price.value,
                description: event.target.description.value,
                image: event.target.image.value,
                category: event.target.category.value,
            }
            console.log(addProduct);

            await createNewProduct(addProduct);

            //Llamamos a la función

            createProduct(addProduct, productsContainer);

            //Llamamos a la función de toggleDisplay y le pasamos el container donde se encuentra el formulario
            toggleDisplay(containerForm);
            

        });

        //BOTÓN CANCEL DEL FORMULARIO

        //Creo la funcionalidad del botón cancel del formulario editar
        const buttonCancel = document.querySelector(".button-reset");
        console.log(buttonCancel);
        buttonCancel.addEventListener("click", (event) =>{
        event.preventDefault();

        //selección del contenedor del formulario 
        const containerFormAdd = document.getElementById("products-form");

        //Llamamos a la función de toggleDisplay y le pasamos el container donde se encuentra el formulario
        toggleDisplay(containerFormAdd);

        });

    })

   //aquí quité el appenchild del formulario revisar mañana
    
}







//---------------------------------------Funciones Aux----------------------------------------------

//función para que que un elemento sea visible o invisible.

function toggleDisplay(element) {
    element.style.display === "block" ? element.style.display = "none" : element.style.display = "block";
    console.log(element);
}

































