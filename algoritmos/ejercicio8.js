// 8 -- Crear una función que cuente cuántas veces aparece un carácter en un string.

/*(Interpretación) La función hace distinción entre caracteres con tildes por lo que á y a no serán iguales, en cambio
A no se diferencia de a ya que se pasa todo a lowerCase() por lo que se cuentan como iguales.*/


function characterCounter(str, charact) {

    if (typeof str !== "string" || typeof charact !== "string") {
        console.log("Introduce una palabra y caracter válidos.");
        return;
    }

    if (charact.length !== 1) {
        console.log(`${charact} no es un caracter. Introduce uno válido.`);
        return;
    }

    //Ponemos la palabra en minúscula, quitamos los posibles espacios y pasamos a array.
    let arr = str.toLowerCase().replace(/\s+/g, '').split("");
    console.log("La palabra convertida en array es: ", arr);

    //El caracter ahora está en minúscula
    let charactLower = charact.toLowerCase();
    console.log(charactLower);

    /*Se usa el método reduce para que recorra el array y reducir los valores, este tendrá un acc (acumulador y 
    un charArr que es el valor actual de esa iteración, por eso se usa un if con la condicion que si el valor
    actual es estrictamente igual al charactLower que pasamos por parámetro el contador suma y asigna 1, pasando de 0 a 1 
    en la primera iteración y así comprobando si hay coincidencia entre los elementos del array y el caracter que
    se pasa en la función*/
    let count = arr.reduce((acc, charArr) => {

        if(charArr === charactLower){
            acc += 1; 
        } 

       return acc;

    }, 0); 
    
    console.log(`El caracter '${charactLower}' aparece ${count} veces.`);

}


//characterCounter("Hola como estás?", "o");