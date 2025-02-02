/*11 - Encontrar el segundo número más grande en un array*/

/*Puedo ordenar el array de manera ascendente con el método 
sort y luego sacar el valor con lenth - 2 */


/*let arrayToOrder =[];
let numberInput = document.getElementById('inputValue').value;
console.log(numberInput);

// Agregar el número cada vez que el input cambie (evento input)
document.getElementById('inputValue').addEventListener('input', function() {
    introduceArr();
});

function introduceArr(num, arr){
    
    /*if(isNaN(num) || num === ""){
        console.log("Introduce un número");
        return;
    }
        
        let realNumber = Number(num);
        arr.push(realNumber);

        console.log("Array actualizado: ", arr);
        document.getElementById('inputValue').value = '';
        searchSecondHighNumber(arr);
    
}

//introduceArr(numberInput, arrayToOrder);

function searchSecondHighNumber(arr){

    if(arr.length < 2){
        console.log("Introduce un array cpn al menos dos elementos.")
    }

    let arrAscendingOrder = arr.sort((a,b) => {
        return a-b;
    });

    console.log("Este es el array ordenado de manera ascendente: ", arrAscendingOrder);
    let arrSearchSecondNumber = arrAscendingOrder[arrAscendingOrder.length-2];
    console.log("Este es el el segundo número más grande en este array:  ",arrSearchSecondNumber);

}

//searchSecondHighNumber(arrayToOrder);*/


//Solución sin input

//let arr= [8, 30, 60, 7, 15, -1];

    
function searchSecondHighNumber(arr){
    console.log("Este es el array introducido: ", arr);
    let arrAscendingOrder = arr.sort((a,b) => {
        return a-b;
    });

    //console.log("Este es el array ordenado de manera ascendente: ", arrAscendingOrder);
    let arrSearchSecondNumber = arrAscendingOrder[arrAscendingOrder.length-2];
    //console.log("Este es el el segundo número más grande en este array:  ",arrSearchSecondNumber);

}

//searchSecondHighNumber(arr);