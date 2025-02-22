// 7 - Ordenar un array de números en orden ascendente (sin usar sort).

let arraySort =[5, 3, -1, 10, 2];


function sortAscending (arr){

    /*Se verifica si los elementos del array son números y si no que muestre por consola un mensaje.
    Se puede usar un for..of para recorrer el array y recorrer cada elemento para encontrar si hay alguno distinto
    de number y salir de la función*/
    
    for (const element of arr) {
        if(typeof element !== 'number'){
            console.log("El array que desea ordenar debe contener solo números.");
            return;
        }
    }

    //Después de la verificación del array mostramos por consola el array a ordenar 
    console.log("El array a ordenar: ", arr);

    /*Primer bucle para recorrer el array tantas veces como elementos
    tenga mi array salvo uno que es el que ya estará ordenado una vez salga
    del segundo bucle (El primero recorre la longitud del array y el segundo se encarga 
    de mirar cada número y sus adyacentes para ordenarlo*/ 

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - 1 - i; j++) { //// n-i-1 evita comparar los elementos ya ordenados
           
            //Ordenación de cada elemento, se mira si el elemento actual es mayor que el siguiente y si es así lo se intercambia.
            if (arr[j] > arr [j + 1]) {
                //Se crea una variable temporal para guardar el valor de arr[j] y hacer el cambio de posición
                let temp = arr[j];
                //Se cambia la posición si el valor en j es mayor que el valor de [j +1]
                arr[j] = arr [j + 1];
                //Se pone el mayor valor en la posicion [j+1]
                arr [j + 1] = temp;

            }
            
        }
        
    }

    console.log("El array ordenado de manera ascendente es: ", arr );

}

//sortAscending(arraySort);