let nombreDeUsuario = prompt("Ingresa tu nombre de usuario");

let contraseñaIngresada = prompt("Ingresa tu contraseña");

let usuario = "AdaLove";

let contraseña = "ada2019";

if (nombreDeUsuario === usuario && contraseñaIngresada === contraseña) {
    alert("Bienvenida, " + usuario)
}
else {
    alert("Los datos no son correctos")
}

let numeroIngresado = prompt("Ingrese un numero");

//numeroIngresado % 2 === 0 ? alert("El número es par") :  alert("El número es impar")

if (numeroIngresado % 2 == 0) {
    alert("El número es par");
}

else  {
    alert("El número es impar");
}


let edadDeUsuario = prompt("Ingrese su edad en numeros");

//edadDeUsuario >= 18 ? alert("Ud. es mayor de edad") :  alert("Ud. es menor de edad")

if (edadDeUsuario >= 18) {
    alert("Ud. es mayor de edad");
}

else {
    alert("Ud. es menor de edad");
}

let notaObtenida = prompt ("Ingrese la nota del examen (del 0-10)")

if (notaObtenida >= 9) {
    alert("La nota es excelente")
}
else if (notaObtenida < 9 && notaObtenida >= 6){
    alert ( "La nota es buena")
}
else {
    alert("El examen no está aprobado")
};


let diaDeLaSemana = prompt("Ingrese un día de la semana")


switch (diaDeLaSemana) {
    case "lunes":
        alert("Su nombre proviene de la luna. En latín, se lo llamaba 'dies Lūnae'")
    break;
    case "martes":
        alert("Su nombre proviene del planeta Marte. En latín, se lo llamaba 'dies Martis'")
    break;
    case "miercoles":
        alert("Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Mercuriī'")
    break;
    case "jueves":
        alert("Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Iovis'")
    break;
    case "viernes":
        alert("Su nombre proviene del planeta Venus. En latín, se lo llamaba 'dies Veneris'")
    break;
    case "sabado":
        alert("Su nombre proviene del Shabat hebreo, el día de descanso del pueblo judío")
    break;
    case "domingo":
         alert("Su nombre es cristiano y proviene de la palabra latina 'Dominica', que significa 'señoril', por ser 'el día del Señor'")
    break;

    default:
        alert("Ud.no ingresó un día válido")
    break;
}
