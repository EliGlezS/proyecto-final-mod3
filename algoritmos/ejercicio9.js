// 9 - Escribir un algoritmo que determine si un año es bisiesto.

/*Para que un año sea bisiesto se debe tener en cuenta el año según el calendario, Es decir, en 1582 se inició con lo que se conoce como el 
calendario Gregoriano, teniendo en cuenta que los años posteriores a 1582 y hasta el año 45 a.C. se usaba el calendario Juliano
en el que se consideraba un año bisiesto aquel que solo era divisible entre 4, en cambio en el gregoriano se tiene en cuenta que sea 
divisible entre 400 y que sea divisible entre 4 y que no sea divisible entre 100*/

function leapYear (year){
    //verificación para que lo que se introduce es un año
    if(typeof year !== 'number'){
        console.log("Introduce un año, usando números");
        return;
    }

    //verificación por si un año es negativo y no válido, el menos solo indica el a.C.
    if(year < -45 ){
        console.log("Introduce un año válido");
    }else if(year >= -45 && year < 1582){//Años entre 45 a.C. y 1582 este último sin incluirlo
        //Año bisiesto según el calendario Juliano
        (year % 4 == 0) ? console.log(`El año ${year} es bisiesto según el calendario Juliano.`) : console.log(`El año ${year} no es bisiesto según el calendario Juliano.`);
    }else{ //Año bisiesto según el calendario Gregoriano
        (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? console.log(`El año ${year} es bisiesto según el calendario Gregoriano.`) : console.log(`El año ${year} no es bisiesto según el calendario Gregoriano.`);
    }
}

//leapYear(2020);

/* Puedes usar estos años para probar la función:
· 28 : Año bisiesto según el Juliano
· 1581: Año no bisiesto según el calendario Juliano
· 2020: Año bisiesto según el calendario Gregoriano
· 2003: Año no bisiesto según el calendario Gregoriano
*/