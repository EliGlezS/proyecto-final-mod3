//1 - Escribir una función que determine si un número es par o impar. 

/*creamos una función que verifique el número que introduzcamos (podmeos pedir que el 
usuario lo introduzca por consola)*/

//Creamos una variable que guarde el valor del numero que introduzca el usuario, se pedirá que sea un número entero.

//let numberCheck = parseInt(prompt("Introduce un número para saber si es par o impar :"));

function VerifyNumber (number){
    
    /*Se verifica que los datos introducidos por el usuario sean números, ya que al introducir un string el resultado es un NaN. 
    Si el usuario introduce un número comprobará si se cumple la condición del else if, siendo en ese caso un número par, y si no cumple ninguna 
    de las condiciones anteriores el número es impar */
    if (isNaN(number)){
        console.log("Introduzca un número.");
    }else if (number % 2 === 0){
        console.log(`${number} es un número par`);
    }else {
        console.log(`${number} es un número impar`);
    }
}

//VerifyNumber(numberCheck);