//5 - Determinar si una palabra es un palíndromo. 

function verificationPalindrome(word) {
    //Comprobamos que el argumento que se pase a la función sea una palabra o frase.
    if (typeof word !== "string") {
        console.log("Se necesita una palabra para hacer la comprobación");
        return;
    }

    //La palabra que se introduce como argumento tiene que estar en minúscula.
    let wordLower = word.toLowerCase();
    console.log(`La palabra es: ${wordLower}`);

    //toLowerCase()--> minuscula, luego pasamos a array, invertimos y volvemos a convertir en string
    let arrWord = wordLower.split("").reverse().join("");
    console.log(`La palabra invertida: ${arrWord}`);

    if (wordLower === arrWord) {
        console.log (`${wordLower} es un palíndromo`);
    }else {
        console.log (`${wordLower} no es un palíndromo`);
    }
}

//verificationPalindrome("Hola");

