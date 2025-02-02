// 9 - Escribir un algoritmo que determine si un año es bisiesto.

/*Para que un año sea bisiesto debe tenerse en cuenta según el calendario, iniciandose en 1582 con lo que se conoce como el 
calendario Gregoriano, teniendo en cuenta que los años posteriores a 1582 y hasta el año 45 a.C. se usaba el calendario Juliano
en el que se consideraba solo si el año es divisible entre 4, en cambio con el gregoriano se tiene que 
tener en cuenta que sea divisible entre 400 y que sea divisible entre 4 y no entre 100*/

function leapYear (anno){
    //verificación para que lo que se introduce es un año
    if(typeof anno !== 'number'){
        console.log("Introduce un año, usando números");
    }

    //verificación por si un año es negativo
    if(anno < -45 ){
        console.log("Introduce un año válido");
    }else if(anno >= -45 && anno < 1582){
        //Calendario Juliano
        (anno % 4 == 0) ? console.log(`El año ${anno} es bisiesto según el calendario Juliano.`) : console.log(`El año ${anno} no es bisiesto según el calendario Juliano.`);
    }else{ //Calendario Gregoriano
        (anno % 4 === 0 && anno % 100 !== 0) || (anno % 400 === 0) ? console.log(`El año ${anno} es bisiesto según el calendario Gregoriano.`) : console.log(`El año ${anno} no es bisiesto según el calendario Gregoriano.`);
    }
}

//leapYear(28);