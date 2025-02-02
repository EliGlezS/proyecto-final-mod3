//6 - Crear un programa que calcule el número Fibonacci en la posición (n).

/*A continuación se harán dos formas para realizar este ejercicio, uno de ellos teniendo en cuenta un array 
vacío en el que el 0 y 1 se pondrán con la función realizada y por otro lado se forzará al array a tener esos 
dos valores dentro de el*/

//Fibonacci: donde el array creado ya tiene el número 0 y 1 

function fibonacci (num){
    //Se crea el array forzando que en la posición 0 y 1 del array los valores sean 0 y 1.
    let arraySequence = [0, 1];

    /*Validación para asegurarnos de que el valor no sea boolean ya que true=1 y false=0 
    entonces entraría en el if dando como resultado el array con los dos números que hemos forzado*/

    if(typeof num === 'boolean' || typeof num === "string"){
        console.log("Tienes que introducir un número.")
        return;
    }

    num = Math.round(num);

    if(num >= 0){
        /*Se hace un for para ir sacando los números de la secuencia de fibonacci hasta el número n 
        y que se vaya completando este array hasta dicho número que se pasa como argumneto a la 
        función creada*/
        if (num < 2 ) {
            console.log(arraySequence.slice(0, num + 1));
        }else{
            for (let i = 2; i <= num; i++) {
                let nextNum = arraySequence[i-1] + arraySequence[i-2];
                arraySequence.push(nextNum);
            }
            console.log(arraySequence);
        }
    }else {
        console.log("Introduce un número entero positivo.");

    }
   
}

//fibonacci(14); 

//Fibonacci: creando el array desde el inicio.

function otherFibonacci(number) {
    let sequenceArr =[];

    if(typeof number === 'boolean' || typeof number === "string" || number < 0){
        console.log("Tienes que introducir un número. (Número entero positivo)")
        return;
    }

    number = Math.round(number);

    for (let i = 0; i < number; i++) {
        
        if (sequenceArr.length === 0) {
            sequenceArr.push(0);
        }else if (sequenceArr.length === 1) {
            sequenceArr.push(1);
        }else{
            let nextNum = sequenceArr[i-1] + sequenceArr[i-2];
            sequenceArr.push(nextNum);
        }
        
    }

    console.log(sequenceArr);
    
}

//otherFibonacci(5);