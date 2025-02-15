//13 - Crear un algoritmo que sume todos los números de un array

//Se crearon dos funciones una para comprobar el array de números y otra para realizar la suma de esos valores.
let arrayNumber = [3, 5, 50, 10, 2];


function checkOnlyNumber(arr) {
    
    console.log(`Este es el array original: ${arr}`);

    // Filtramos solo los elementos tipo números del array.
    let filteredArray = arr.filter(item => typeof item === "number");

    /*Comprobamos si el array contiene solo números (Si el array fiiltrado tiene una longitud menor 
    que la longitud del arr introducido quiere decir que se han eliminado elementos de ese array y que
    pot tanto había algún elemento no númerico)*/
    if (filteredArray.length !== arr.length) {
        console.log("Introduce solo números.");
        return;
    }

    // Llamamos a la función que suma los números del array después de comprobarlo
    sumNumber(filteredArray);
}

function sumNumber(arr) {
    // Usamos reduce para sumar los números
    let sumaNumber = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(`La suma de todos los números del array es: ${sumaNumber}`);
}

//checkOnlyNumber(arrayNumber);