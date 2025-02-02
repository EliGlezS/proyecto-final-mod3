//17 - Crear un algoritmo que valide si un string tiene paréntesis balanceados.

function parenthesesBalance(str) {

    //pasamos a array el string pasado como argumento
    let strToArr = str.split("");
    console.log(strToArr);

    /*Usamos un filter para los paréntesis de apertura y otro filter para los parentesis de cierre
    por cada elemento se filtran aquellos que tengan una coincidencia con la expresión regular, creando el filter
    un array nuevo con esos elementos*/
    let parenthesesOpen = strToArr.filter((element) => element.match(/[\(\{\[]/g));
    console.log(parenthesesOpen);

    let parenthesesClose = strToArr.filter((element) => element.match(/[\)\}\]]/g));
    console.log(parenthesesClose);

    /*Comprobamos si la longitud de amnbos arrays es la misma, lo que indica que hay
    los mismos paréntesis de apertua que de cierre, en caso de que haya más de 
    uno que de otro tipo quiere decir que no están balanceados*/

    if (parenthesesOpen.length === parenthesesClose.length) {
        console.log("Los paréntesis están balanceados");
    }else{
        console.log("Los paréntesis no están balanceados");
    }


}

//parenthesesBalance("(({]][]}))");