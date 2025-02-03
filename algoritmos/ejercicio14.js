//14 - Escribir un programa que verifique si dos strings son anagramas.

let word1= "Lácteo";
let word2="Coleta";

//Función paso a paso 

function checkAnagrams(string1, string2) {

    //cambiamos los string que entran a minúscula y sin acentos
    let word1MinusNorm = string1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let word2MinusNorm = string2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    console.log(word1MinusNorm);
    console.log(word2MinusNorm);

    //convertimos ambas en array con el método split()

    let arrWord1 = word1MinusNorm.split("");
    let arrWord2 = word2MinusNorm.split("");

    console.log(arrWord1);
    console.log(arrWord2);

    //Ordenamos ambos con el método sort()

    let newArr1AlfaOrder = arrWord1.sort();
    let newArr2AlfaOrder = arrWord2.sort();

    console.log(newArr1AlfaOrder);
    console.log(newArr2AlfaOrder);

    //Pasamos a string (join()) para comparar ambos y ver si son iguales.

    let word1Order = newArr1AlfaOrder.join("");
    let word2Order = newArr2AlfaOrder.join("");

    console.log(word1Order);
    console.log(word2Order);

    /*condicion para que sean anagramas que tengan las mismas letras es decir que si las palabras una vez
    ordenadas son iguales quiere decir que se ha creado de la misma palabra*/ 

    if (word1Order === word2Order) {
        console.log(`La palabra ${word1MinusNorm} y la palabra ${word2MinusNorm} son anagramas`);
    }else{
        console.log(`La palabra ${word1MinusNorm} y la palabra ${word2MinusNorm} no son anagramas`);
    }

}

//checkAnagrams(word1, word2);

//Funcion más resumida

function checkAnagrams1(string1, string2) {

    //cambiamos los string que entran a minúscula y sin acentos
    let word1MinusNorm = string1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let word2MinusNorm = string2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    console.log(word1MinusNorm);
    console.log(word2MinusNorm);

    /*condicion para que sean anagramas que tengan las mismas letras es decir que si las palabras una vez
    ordenadas son iguales quiere decir que se ha creado de la misma palabra*/ 

    if (word1MinusNorm.split("").sort().join("") === word2MinusNorm.split("").sort().join("")) {
        console.log(`La palabra ${word1MinusNorm} y la palabra ${word2MinusNorm} son anagramas`);
    }else{
        console.log(`La palabra ${word1MinusNorm} y la palabra ${word2MinusNorm} no son anagramas`);
    }

}

//checkAnagrams1(word1, word2);