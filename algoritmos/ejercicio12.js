//12 - Escribir una función que elimine los elementos duplicados de un array.

/*verificar si el índice de la primera aparición del valor en el array es 
el mismo que el índice actual. Si lo es, significa que es la primera vez que 
aparece ese valor, por lo que lo mantendrás. Si no lo es, significa que el valor 
ya ha aparecido antes, por lo que lo eliminarás. */

let animals =["oso", "gato", "tortuga", "caballo", "mono", "gato", "perro", "caballo"];

function deleteMatches(array) {

    /*Se filtra el array para eliminar elementos que estén duplicados, creando un nuevo array 
    con los elementos que no se repiten.  arr.indexOf(value) === index compara si el índice de la primera 
    aparición del valor es igual al índice del elemento actual que se está revisando, si es la primera vez se mantiene 
    el valor, si no lo es, el valor ha aparecido anteriormente por lo que se elimina.   */
    let animalsFilter = array.filter((value, index, arr) => {
        return arr.indexOf(value) === index;
    });
    console.log(animalsFilter);
}

//deleteMatches(animals);
