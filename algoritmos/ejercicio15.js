//15 - Crear un programa que devuelva los números primos hasta el número (n).

//Hacemos una funcion que determine si un numero es primo o no 

function primeNumber(number) {
    if (number <= 1) {
        console.log("El número introducido no puede ser primo.");
        return;
    }
    
    /*Recorremos con un for todos los n desde 2 hasta el number introducido. Son números que solo pueden 
    dividirse por si mismos y por 1, por lo que si se dividen por otro número el resultado obtenido no 
    es entero.*/

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            //console.log(`${number} no es un número primo`);
            return;
        }  
    }
    return true;

}

function primeNumbersUntilN(num) {
    /*creo un array vacío que se llenará con los números primos que vengan de la verificación
    de la función anterior*/
    
    const primeNum = [];

    for (let i = 2; i <= num; i++) {

        if (primeNumber(i)) {
            primeNum.push(i);
        }
        
    }

    console.log(`Los números primos hasta ${num} son: ${primeNum.join(",")}`);

}

//primeNumbersUntilN(11);