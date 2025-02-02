//12 - Escribir una función que elimine los elementos duplicados de un array.

//Ejemplo de array que no sea númerico

/*verificar si el índice de la primera aparición del valor en el array es 
el mismo que el índice actual. Si lo es, significa que es la primera vez que 
aparece ese valor, por lo que lo mantendrás. Si no lo es, significa que el valor 
ya ha aparecido antes, por lo que lo eliminarás. */

let animals =["oso", "gato", "tortuga", "caballo", "mono", "gato", "perro", "caballo"];

function deleteMatches(array) {
    let animalsFilter = array.filter((value, index, arr) => {
        return arr.indexOf(value) === index;
    });
    console.log(animalsFilter);
}

//deleteMatches(animals);
