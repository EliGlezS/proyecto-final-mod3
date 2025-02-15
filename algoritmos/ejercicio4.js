//4 - Crear un algoritmo que devuelva el factorial de un número.

/*Se crea una función que compruebe primeramente si se introduce un número, luego si este valor es
mayor que 0 o si es 0,  ya que el factorial de 0 es 1 y debe forzarse. (No tiene sentido 
calcular el factorial de números negativos, por lo que muestra el mensaje del else).*/

function factorialFunction (number) {

    /*Se comprueba que el number que se introduce es un número (Funciona sin esta comprobación ya que 
    se muestra el mensaje del else, pero se quiere dar otro mensaje al usuario para que sepa que debe 
    introducir un tipo number)*/

    if (typeof number !== "number") {
        console.log("Introduzca un número entero positivo.");
        return;
    }

    /*Al pasar la comprobación anterior => se verifica si el número es 0 (dando como factorial 1). Si el número es
    mayor que 0 se calcula el factorial usando el bucle for desde 1 hasta number incluyendo este, en cada iteración
    se multiplica el valor de factorialResult por el valor de i, guardando  este resultado como nuevo valor de factorialResult
    en la siguiente iteración. Por último si no se cumple las condiciones anteriores se muestra un mensaje de que no 
    puede realizarse el factorial.*/

    if (number === 0) {
        console.log(`El factorial de ${number} es: 1`);
    } else if (number > 0) {
        let factorialResult = 1;
        for (let i = 1; i <= number; i++) {
            factorialResult *= i;
        }
        console.log(`El factorial de ${number} es: ${factorialResult}`);
    } else {
        console.log("No puede hacerse el factorial.");
    }

}

//factorialFunction(8);