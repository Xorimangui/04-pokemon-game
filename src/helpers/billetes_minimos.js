//  Esta funcion recibe una cantidad numérica y ordena en el número mínimo de billetes necesarios para
//  alcanzarla (EUR).
//  
//  Variables:
//      tiposBilletes: Array con todos los tipos de moneda(sin centimos) y billete existentes en EUR (de 1 a 500)
//      quotient: cantidad de billetes (Uno de los valores que queremos representar en el print)
// 
//  Para calcular los billetes mínimos necesarios usaremos un bucle for que recorra cada tipo de billete de forma descendente empezando por el último
//  índice. 
//  A partir de ahi comprobamos si la cantidad introducida es mayor o igual que el tipo de billete (índice del bucle)
//      En caso negativo, la cantidad es mas pequeña que el tipo de billete y por lo tanto no es divisible en ese tipo, por lo que pasamos al siguiente tipo
//      En caso positivo, realizamos los calculos de quotient y remainder, y actualizamos la nueva cantidad para que esté lista para nuevos calculos.
//          Por último, evaluamos si la cantidad que nos queda para calcular es igual a 0
//              Si no lo es, significa que aun nos queda cantidad para calcular, simplemente imprimimos y termina esa vuelta del loop.
//              Si lo es, significa que ya no queda mas por calcular, imprimimos y rompemos el bucle for con break.

function billetes_minimos(amount) {
    let tiposBilletes = [1, 2, 5, 10, 20, 50, 100, 200, 500],
        quotient
    for (let i = tiposBilletes.length - 1; i >= 0; i--) {
        if (amount >= tiposBilletes[i]) {
            quotient = Math.floor(amount / tiposBilletes[i]);
            amount = amount - (tiposBilletes[i] * quotient);
            if (amount == 0) {
                console.log("La cantidad de billetes de ", tiposBilletes[i], " es ", quotient);
                break;
            } else if (amount != 0) {
                console.log("La cantidad de billetes de ", tiposBilletes[i], " es ", quotient);
            }
        } else {
            continue;
        }
    }
}

export default billetes_minimos