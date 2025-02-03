//4 - Crear un algoritmo que devuelva el factorial de un número.

/*Se crea una función que compruebe primeramente si se introduce un número y si es
mayor que 0, ya que 0 no tiene sentido hacerle factorial, al igual que números negativos.
Luego de comprobar esa condición, se hace un bucle for que multipica y asigna a resultado cada i hasta
el número introducido.*/

function factorialFunction (number) {

    if (number > 0) {
        let factorialResult = 1;
        for (let i = 1; i <= number; i++) {
            factorialResult *= i;
        }
        console.log(`El factorial de ${number} es: ${factorialResult}`);
    } else {
        console.log("No puede hacerse el factorial.")
    }

}

//factorialFunction(8);