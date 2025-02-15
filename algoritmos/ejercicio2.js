//2 - Crear un algoritmo que invierta un string. 

/*Se crea una función que parte de un string, este se pasa a un array (método split()), al cual se puede
aplicar el método reverse() para invertirlo, finalmente pasándolo nuevamente a string con el método join(""). 
Se cambiará el string a minúscula usando el método toLowerCase()*/

function reverseString (string){
    
    //Expresión regular que incluye letras mayúsculas, minúsculas, caracteres especiales como acentos, ñ y espacios entre palabras.
    const regex =  /^[a-zA-ZáéíóúüñÑ\s]+$/;

    //Se comprueba si la palabra cumple con la expresión regular anterior. Se usa trim() para eliminar los espacios en blanco a principio y final de la cadena.
    if (regex.test(string.trim())) {

        //Se crea una variable que guarda el valor del string a minúscula
        let stringFormat = string.toLowerCase();
        //Se crea otra variable para guardar el string como array, se invierte y se pone de nuevo como un string.
        let reverseString = stringFormat.split("").reverse().join("");
        //Se muestra por consola el la palabra en minúscula y la palabra invertida.
        console.log(`Palabra o frase introducida: ${stringFormat}`);
        console.log(`Palabra o frase invertida: ${reverseString}`);

    }else{
        console.log(`${string} no es una palabra. Introduce una palabra`);
        return;
    }
    
}

//reverseString("Esta frase se muestra invertida");