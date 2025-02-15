//1 - Escribir una función que determine si un número es par o impar. 

/*Se crea una función que verifique el número que se introduce*/

//Se crea una variable que guarde el valor del número que introduzca el usuario, se pedirá que sea un número entero.

//Después de probar con el prompt vuelve a comentarlo para que puedas seguir probando los demás algoritmos sin que se muestre.

//let numberCheck = parseInt(prompt("Introduce un número entero para saber si es par o impar (Si introduces un número décimal se cogerá la parte entera):"));

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

