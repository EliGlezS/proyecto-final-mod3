//5 - Determinar si una palabra es un palíndromo. 

/*Este ejercicio pide que si se introduce una palabra se compruebe si es un palíndromo o no, se quizo tener 
en cuenta si el usuario no introducia una palabra e introducia una frase que el algoritmo fuera capaz de 
comprobar también si esta era un palíndromo o no.*/

function verificationPalindrome(word) {
    //Se comprueba que el argumento que se pase a la función sea una palabra o frase.
    if (typeof word !== "string" || !isNaN(word)) {
        console.log("Se necesita una palabra para hacer la comprobación");
        return;
    }

    /*La palabra que se introduce como argumento tiene que estar en minúscula. (toLowerCase()--> minúscula), 
    con normalize se descompone los caracteres con tildes (á se convierte en a + un carácter adicional ´). 
    Con el primer replace se eliminan las tildes (caracter adicional) y con el segundo se elimina todo lo 
    que no sea una letra (Espacios, puntuaciones...).*/

    let wordTransform = word.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]/g, "");
    console.log(`La palabra es: ${wordTransform}`);

    //Luego pasamos a array, invertimos y volvemos a convertir en string
    let inveWord = wordTransform.split("").reverse().join("");
    console.log(`La palabra invertida: ${inveWord}`);

    //Si la palabra con los cambios o normalizada wordTransform es igual a la palabra invertida inverWord es un palíndromo
    if (wordTransform === inveWord) {
        console.log (`${word} es un palíndromo`);
    }else {
        console.log (`${word} no es un palíndromo`);
    }
}

//verificationPalindrome("reconocer");

/*Se proporciona en el siguiente comentario algunas frases y palabras para probar el código: 
·radar
·La ruta natural
·arenera
·A mamá Roma le aviva el amor a mamá*/