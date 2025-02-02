//13 - Crear un algoritmo que sume todos los números de un array


let arrayNumber = [3, 5, 50, 20, 2];


function checkOnlyNumber(arr) {
    // Filtramos solo los números del array
    console.log(`Este es el array original: ${arr}`);
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