//El programa consiste en duplicar el número ingresado, se usa un while para que se pueda hacer el proceso hasta que el usuario no quiera continuar.
ciclo = true;
let respuesta = prompt('¿Quieres jugar?');
while (ciclo == true) {
    if (respuesta == 'si' || respuesta == 'Si') {
        let num = parseInt(
            prompt('ingresa un número, y yo te digo el doble de este')
        );
        if (num != 0 && isNaN(num) == false) {
            resultado = num * 2;
            alert('El doble de tu número es: ' + resultado);
            respuesta = prompt('¿Quieres seguir jugando?');
        } else if (num == 0) {
            alert('No puedo duplicar el 0');
        } else {
            alert('No ingresaste un número');
        }
    } else if (respuesta == 'no' || respuesta == 'No') {
        ciclo = false;
    } else {
        alert('No ingresaste si o no.');
        respuesta = prompt('¿Quieres jugar?');
    }
}
