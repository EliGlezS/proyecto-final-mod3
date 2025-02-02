// 10 - Crear un programa que convierta grados Celsius a Fahrenheit y viceversa.

function calcCelsOrFahren(type, number){

    let typeOperation = type.toLowerCase();

    if(typeOperation === "c"){//Pido el resultado en celsius, parto de que el number es un fahrenheit y obtengo c con la fórmula
        let celsiusOperation = (number-32) / 1.8;
        console.log(celsiusOperation);
    }else if(typeOperation === "f"){
        let fahrenOperation = (number *(9/5)) + 32;
        console.log(fahrenOperation);
    }else{
        console.log("Solo puedes elegir : c (para calcular Celsius) o f (calcular Fahrenheit).");
    }

}

//calcCelsOrFahren("c", 0);