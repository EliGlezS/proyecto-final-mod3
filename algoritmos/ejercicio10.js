// 10 - Crear un programa que convierta grados Celsius a Fahrenheit y viceversa.


function calcCelsOrFahren(type, number){

    //Se verifica el tipo de dato que se introduce tanto en el type como en el number.
    if (typeof type !== "string" || typeof number !== "number") {
        console.log("Introduce valores válidos para realizar la operación.");
        return;
    }

    /*Se pide introducir c o f, pasando las letras a minúscula. Estas letras se asocian al tipo de operación 
    que se quiere realizar*/

    let typeOperation = type.toLowerCase();

    if(typeOperation === "c"){//Se pide el resultado en Celsius, partiendo de que el number es un fahrenheit, se obtiene los celsius a través de la fórmula
        let celsiusOperation = (number-32) / 1.8;
        console.log(`El resultado en celsius es: ${celsiusOperation} grados`);
    }else if(typeOperation === "f"){//Se pide el resultado en Fahrenheit, partiendo de que el number es un celsius, se obtiene los fahrenheit a través de la fórmula
        let fahrenOperation = (number *(9/5)) + 32;
        console.log(`El resultado en celsius es: ${fahrenOperation} grados`);
    }else{
        console.log("Solo puedes elegir : c (para calcular Celsius) o f (calcular Fahrenheit).");
    }

}

//calcCelsOrFahren("f", 0);