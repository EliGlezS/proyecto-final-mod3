//15 - Crear un programa que devuelva los números primos hasta el número (n).

//Se crea una función que determine si un numero es primo o no 

//Primera función verifica si el número que se introduce es primo o no 

function primeNumber(number) {

    //si los números son menores o iguales a 1, no cumplen con la definición de número primo 
    if (number <= 1) {
        console.log("El número introducido no puede ser primo.");
        return;
    }
    
    /*Se recorre con un for todos los n desde 2 hasta el number introducido. Los números primos son números 
    que solo pueden dividirse por sí mismos y por 1, por lo que si se dividen por otro número el resultado obtenido no 
    es entero. En este caso el bucle for recorre desde el número 2 hasta la raíz cuadrada del número que se pasa 
    como argumento. Si el número es divisible por cualquiera de esos valores, no es primo.*/

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            //console.log(`${number} no es un número primo`);
            return;
        }  
    }

    //Si no se encuentra ningún divisor se retorna true.
    return true;

}

//Esta función devuelve todos los números primos hasta num 

function primeNumbersUntilN(num) {

    //Se comprueba que el número que se introduce sea un número válido
    if (isNaN(num) || num < 2 || num % 1 !== 0) {
        console.log("Introduce un número válido, entero mayor que 2.");
        return;
    }

    /*creo un array vacío que se llenará con los números primos que vengan de la verificación
    de la función anterior*/
    
    const primeNum = [];

    //Este bucle for comienza en 2 y se ejecuta hasta que i sea menor o igual que num.
    for (let i = 2; i <= num; i++) {

        ///Se llama a la función primeNumber(i) verificando si el número es primo o no 
        if (primeNumber(i)) {

            //Si es primo se introduce el número en el array primeNum.
            primeNum.push(i);
        }
        
    }

    console.log(`Los números primos hasta ${num} son: ${primeNum}`);

}

//primeNumbersUntilN(11);