/*11 - Encontrar el segundo número más grande en un array*/

/*Puedo ordenar el array de manera ascendente con el método 
sort y luego sacar el valor con lenth - 2 */

let arr= [8, 30, -20, 7, 15, -1];

    
function searchSecondHighNumber(arr){
    //verificar que el arr introducido es solo de números
    let verificationArrNumber = arr.every(element => typeof element === "number"); //Resultado: true o false

    //Si es false quiere decir que hay elementos disitntos a tipo number.
    if(verificationArrNumber === false){
        console.log("Introduce un array solo de números.");
        return;
    }

    //Se muestra el array inicial
    console.log("Este es el array introducido: ", arr);

    //Se ordena el array con el método sort().
    let arrAscendingOrder = arr.sort((a,b) => a - b );

    /*Se muestra el array ordenador y se busca el segundo número más grande que al estar ordenador coincide con el 
    elemento del array en posición -2 (let arrSearchSecondNumber = arrAscendingOrder[arrAscendingOrder.length - 2];)*/

    console.log("Este es el array ordenado de manera ascendente: ", arrAscendingOrder);
    let arrSearchSecondNumber = arrAscendingOrder[arrAscendingOrder.length - 2];
    console.log("Este es el segundo número más grande en este array:  ",arrSearchSecondNumber);

}

//searchSecondHighNumber(arr);