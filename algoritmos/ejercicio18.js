//18 - Crear un programa que transforme una frase en "notación hacker" (leet speak).

function leetSpeak(string){
    //Verificamos que lo que entre sea un string
    if (typeof string !== "string") {
        console.log("Introduce una palabra o frase válida.");
        return;
    }
    //creamos un objeto que tenga como propiedades, la clave y valor de los cambios a realizar 
    const changesLeetSpeak = {
        'a': '4', 
        'e': '3', 
        'i': '1', 
        'o': '0', 
        's': '5', 
        't': '7', 
        'l': '1', 
        'c': '(', 
        'g': '6', 
        'z': '2', 
        'b': '8', 
        'x': '%'
    };
    
    /*Pasamos el string a minusculas ya que en el objeto solo se tuvo en cuenta los valores para la clave en minuscula
    , una vez realizado el cambio se pasa a array, para usar map (es decir crea un nuevo array
    transformando los elementos según la condición dada) por tanto dentro buscamos el valor si lo hay en el objeto creado
    y si existe valor asociado a ese elemento lo reemplaza o bien si no hay coincidencia mantiene el elemento original. */
    let changeArr = string.toLowerCase().split('').map((element) => changesLeetSpeak[element] || element);

    //Pasamos a string 
    let newStrinLeetSpeak= changeArr.join('');  
    console.log(newStrinLeetSpeak); 
}

//leetSpeak("Hola, quiero probar 5 si cambia usando leet Speak");