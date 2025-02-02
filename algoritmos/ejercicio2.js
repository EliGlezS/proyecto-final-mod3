//2 - Crear un algoritmo que invierta un string. 

/*Se crea una funcion que partiendo de un string, este se pasa a un array (método split()), al cual se puede
aplicar el método reverse() para invertirlo, volviéndolo a pasar a string con el método join(""). Se pasará 
el string a minúscula usando el método toLowerCase()*/

function reverseString (string){
    //Se crea una variable que guarda el valor del string que se pasa como argumento a minúscula
    let stringFormat = string.toLowerCase();
    //Se crea otra variable para guardar el string como array, lo invierte y lo pone de nuevo en string
    let reverseString = stringFormat.split("").reverse().join("");
    //Quiero mostrar por consola 
    console.log(`Palabra o frase introducida: ${stringFormat}`);
    console.log(`Palabra o frase invertida: ${reverseString}`);
}

//reverseString("Esto es una prueba");