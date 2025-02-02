//3 - Escribir una función que encuentre el número mayor en un array. 

/*Se prueba una opción --> crear una función que al pasarle un array 
con el método sort se ordene de manera ascendente y devuelva el número de
la última posición*/

//declaramos una variable para guardar un array de números.
let array = [9, 5, 2, 60, 150, 8];

function searchNumber(arr) {
    //Se muestra el array original
    console.log("Array original: ", arr);

    /*Se comprueba si el array está vacío, si por el contrario tiene elementos,
    se ordenan y se muestra el número mayor*/
    if(arr.length === 0){
        console.log("El array está vacío");
    }else {
        //Se ordena de manera ascendente el array con el método sort().
        let arrAscendingOrder = arr.sort((a,b) => a-b);
        console.log("Array ordenado de manera ascendente: ", arrAscendingOrder);

        //Una vez ordenado, el último número del array será el mayor.
        let lastElement = arrAscendingOrder[array.length - 1];
        console.log("Mayor número encontrado en el array: ", lastElement);
    }
    
}

//searchNumber(array);

/*Otra opción --> sería usando una función que recorra cada elemento del array*/
let array1 = [890, 45, 9600, 87, 2, 0];

function searchNumber1(arr){
    console.log(arr);

    if(arr.length === 0){
        console.log("El array está vacío");
        return null;
    }

    //En caso de que el array no esté vacío se asume que el primer elemento es el mayor

    let highestNumber = arr[0];

    /*Se recorre las posiciones del array, iterando con un for, para comprobar si el número [i]
    es mayor que el highestNumber, si es así el valor se actualiza al encontrado*/

    for (let i = 1; i < arr.length; i++) {
        
        if (arr[i]> highestNumber) {
            highestNumber = arr[i];//Se actualiza el valor de número más alto
        }
        
    }

    console.log(`El mayor número del array es: ${highestNumber}`);

}

//searchNumber1(array1);

