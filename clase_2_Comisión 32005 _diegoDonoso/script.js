//doblar el valor de un número entero ingresado por el usuario
let num = parseInt(prompt("ingresa un número, y yo te digo el doble de este"));
if (num != 0 && isNaN(num) == false) {
    resultado = num * 2;
    alert("El doble de tu número es: " + resultado);
} else if (num == 0) {
    alert("No puedo duplicar el 0");
} else {
    alert("No ingresaste un número");
}
