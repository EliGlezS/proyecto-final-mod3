//19 - Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.



function changesYearsToCenturies(year) {

    //que solo pueda introducirse un número.

    if(isNaN(year) || typeof year !== "number"){
        console.log("No es un número. Introduce uno válido.");
        return;
    }
    
    //Ese número o año debe ser entero y positivo, si no entra en el segundo if y no se sigue ejecuntando la funcion 
    
    if(!Number.isInteger(year) || year <= 0) {
        console.log("El año introducido debe ser positivo y entero.");
        return;
    }

    /*Pasamos de años a siglo. Si el resto entre el año y 100 es 0 se divide directamente el año entre 100,
    estos caso son para años que acaben en 00 como 2000 por lo que al dividirlo da 20 y es el siglo 20, 
    en cambio cuando el resto no da 0, lo que hacemos es que se redondea hacia abajo el resultado de año/100
    y se le suma uno, ejemplo sería el año 2023 => 2023/100 = 20,23 con el metodo Math.floor se redondea 
    a 20 + 1 = siglo 21*/
    let centuries = (year % 100 === 0) ? (year / 100) : Math.floor(year / 100) + 1;
    console.log(centuries);
}


//changesYearsToCenturies(2001);