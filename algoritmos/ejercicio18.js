//18 - Crear un programa que transforme una frase en "notación hacker" (leet speak).

function leetSpeak(string){
    //Se verifica que lo que se introduce sea un string
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
    
    /*Se transforma el string a minúsculas, ya que en el objeto solo se tuvo en cuenta los valores para las claves en minúscula
    , una vez realizado el cambio se pasa a array, para usar map (es decir se crea un nuevo array
    transformando los elementos según la condición dada). A continuación se busca el valor en el objeto creado
    y si existe valor asociado a ese elemento lo reemplaza o bien si no hay coincidencia mantiene el elemento original. */
    let changeArr = string.toLowerCase().split('').map((element) => changesLeetSpeak[element] || element);

    //Se pasa nuevamente a string y se muestra por consola
    let newStrinLeetSpeak= changeArr.join('');  
    console.log(newStrinLeetSpeak); 
}

//leetSpeak("Hola, quiero probar 5 si cambia usando leet Speak");