//3 - Escribir una función que encuentre el número mayor en un array. 

//Dos posibles soluciones:

/*Primera opción --> crear una función que al pasarle un array 
con el método sort se ordene de manera ascendente y devuelva el número de
la última posición*/

//Se declara una variable para guardar un array de números.
let array = [-10, 8, -2, 3, 0, 5];

function searchNumber(arr) {

    //Comprobación de que todos los elementos del array son números. El método every 
    if (!arr.every(number => typeof number === "number")) {
        console.log("Introduce solo números");
        return;
    }

    /*Se comprueba si el array está vacío, si por el contrario tiene elementos,
    se ordenan y se muestra el número mayor*/

    if(arr.length === 0){
        console.log("El array está vacío");
    }else {
         //Se muestra el array original
        console.log("Array original: ", arr);

        //Se ordena de manera ascendente el array con el método sort().
        let arrAscendingOrder = arr.sort((a,b) => a-b);
        console.log("Array ordenado de manera ascendente: ", arrAscendingOrder);

        //Una vez ordenado, el último número del array será el mayor.
        let lastElement = arrAscendingOrder[arrAscendingOrder.length - 1];
        console.log("Mayor número encontrado en el array: ", lastElement);
    }
    
}

//searchNumber(array);


/*Otra opción --> sería usando una función que recorra con un for cada elemento del array*/
let array1 = [-10, 5, -2, 3, 0, 8];

function searchNumber1(arr){

    //Se comprueba si el array está vacío, es decir si la longitud del array es igual a 0.
    if(arr.length === 0){
        console.log("El array está vacío");
        return;
    }

    console.log(arr);
    
    //En caso de que el array no esté vacío se asume que el primer elemento es el mayor

    let highestNumber = arr[0];

    /*Se recorre las posiciones del array, iterando con un for, para comprobar si el número [i]
    es mayor que el highestNumber, si es así el valor se actualiza al encontrado, además debe cumplirse la condición 
    anterior y que el tipo de dato de elemento del array sea un número, si no se cumple simplemente se omite*/

    for (let i = 1; i < arr.length; i++) {
        
        if (typeof arr[i] === "number" &&  arr[i]> highestNumber) {
            highestNumber = arr[i]; //Se actualiza el valor de número más alto (highestNumber).
        }
        
    }

    console.log(`El mayor número del array es: ${highestNumber}`);

}

//searchNumber1(array1);

