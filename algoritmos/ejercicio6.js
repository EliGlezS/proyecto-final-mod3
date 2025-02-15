//6 - Crear un programa que calcule el número Fibonacci en la posición (n).

/*A continuación se harán dos planteamientos distintos para realizar este ejercicio, uno de ellos 
teniendo en cuenta un array vacío en el que el 0 y 1 se pondrán con la función realizada y 
por otro lado se forzará al array a tener esos dos valores*/

//Fibonacci: donde el array creado ya tiene el número 0 y 1 (forzada).

function fibonacci (num){
    //Se crea el array forzando que en la posición 0 y 1 del array los valores sean 0 y 1.
    let arraySequence = [0, 1];

    /*Validación que asegura que el valor no sea boolean ya que true=1 y false=0*/

    if(typeof num === 'boolean' || typeof num !== "number"){
        console.log("Tienes que introducir un número.")
        return;
    }

    //Con este paso se asegura que el número introducido sea entero, redondeando al número entero más cercano al introducido
    //Si la parte decimal es mayor que 0,5 se redondea hacia arriba, en cambio si es menor a 0,5 se redondea hacia abajo
    num = Math.round(num);

    if(num >= 0){
        // Si el número es menor que 2, devuelve los primeros elementos del array.
        if (num < 2 ) {
            /*El slice() se usa para extraer una sección de un array sin modificar el array original. Tiene en 
            cuenta dos parámetros un índice de inicio (donde comienza la extracción) y uno de final que es opcional
            (donde acaba la extracción), este último no incluye el valor, por ello se incrementa en 1.*/
            console.log(arraySequence.slice(0, num + 1));
        }else{
            /*Se hace un for para ir obteniendo los números de la secuencia de fibonacci hasta el número n 
            y que se vaya completando el array hasta dicho número*/
            for (let i = 2; i < num; i++) {
                let nextNum = arraySequence[i-1] + arraySequence[i-2];
                arraySequence.push(nextNum);
            }
            console.log(arraySequence);
        }
    }else {
        console.log("Introduce un número entero positivo.");

    }
   
}

//fibonacci(8); 

//Fibonacci: creando el array desde el inicio.

function otherFibonacci(number) {
    let sequenceArr =[];

    if(typeof number === 'boolean' || typeof number !== "number" || number < 0){
        console.log("Tienes que introducir un número. (Número entero positivo)")
        return;
    }

    number = Math.round(number);

    //Se genera la secuencia de Fibonnaci usando un bucle for 

    for (let i = 0; i < number; i++) {
        
        /*Si la longitud del array es 0 se añade 0 al array con el método push(). Si la longitus es 1 se añade 1 
        con el mismo método anterior. Siendo los siguientes números la suma de los dos últimos números de la secuencia.*/
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

//otherFibonacci(8);