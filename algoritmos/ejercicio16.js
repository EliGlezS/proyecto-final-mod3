//16 - Escribir una función que convierta un número romano a número arábigo.

function romanToInt(roman) {
    
    // Objeto creado donde sus propiedades están formadas por clave (nº Romanos) y valor (nº arábigo).
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    // Expresión regular para validar que el número romano solo contenga caracteres válidos
    const validRomanRegex = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

    // Validación del número introducido.
    /*.test() es un método que pertenece a las expresiones regulares. 
    Retornar true si la cadena cumple con el patrón de la expresión regular.  
    Retornar false si la cadena no cumple con el patrón.*/
    if (!validRomanRegex.test(roman)) {
        console.log("Número romano inválido");
        return;
    }

    //Se convierte al string en array con el método split().
    let romanArr = roman.split("");
    console.log(romanArr);

    //Se inicializa la variable result para acumular el valor del número arábigo.
    let result = 0;

    // Recorrer la cadena del número romano de izquierda a derecha
    for (let i = 0; i < romanArr.length; i++) {
        // Obtener el valor del símbolo actual
        const currentVal = romanValues[romanArr[i]];
        // Obtener el valor del siguiente símbolo (si existe)
        const nextVal = romanValues[romanArr[i + 1]];

        // Si el valor actual es menor que el siguiente, restamos el valor actual (casos como IV, IX, etc.)
        if (currentVal < nextVal) {
            result -= currentVal;
        } else {
            // Si no, sumamos el valor actual
            result += currentVal;
        }
    }

    console.log(result);
}

//romanToInt("MCMXCIV");
