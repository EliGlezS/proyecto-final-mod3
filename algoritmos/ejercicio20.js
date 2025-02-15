/*20 - Un reloj muestra:
-> la hora (0 <= h <= 23)
-> los minutos (0 <= m <= 59)
-> y los segundos (0 <= s <= 59).
Escribe una funcion que calcule los milisegundos que han pasado desde media 
noche 00:00:00 hasta la hora actual teniendo en cuenta que:
– Hay 1000 milisegundos en un segundo
– Podemos obtener la hora, minutos y segundos con la función
"getTime" */

function millisecondsMidnight() {
    
    //Se Crea un objeto que contiene la fecha y hora actuales en la que se ejecuta el código
    //Fecha y hora actuales es decir en el instante en el que se ejecuta el código (incluido los milisegundos).
    const nowHour = new Date();
    console.log(nowHour);

    //Se crea otro objeto que representa la medianoche de ese día (el toDateString() devuelve la fecha sin la hora que es 00:00:00)
    const midnight = new Date(nowHour.toDateString());
    console.log(midnight);

    /*con nowHour.getTime() se calcula a partir de la hora los milisegundos desde la medianoche del la medianoche del 1 de enero de 1970 hasta la hora actual.
    y de midnight.getTime() se calcula los milisegundos desde desde la medianoche del 1 de enero de 1970 hasta la medianoche de "hoy"
    si restamos ambas nos da los milisegundos desde la medianoche hasta la hora actual en la que se ejecute el código*/
    const calcElapsedMiilliseconds = nowHour.getTime() - midnight.getTime();
    console.log(calcElapsedMiilliseconds);
}

//millisecondsMidnight();