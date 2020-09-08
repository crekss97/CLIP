var intentos_iniciales = 4;
var intentos = 0;

function adivinar() {

    var elemento = document.getElementById("texto").value;

    var adivina = "americana";

    if (intentos_iniciales == 0) {
        alert("Cantidad de intentos superados")
        document.getElementById("enviar").disabled = true;
        document.getElementById("texto").disabled = true;
    } else {
        do {

            if (elemento === adivina) {
                alert("Has ganado ! Intentos utilizados: " + intentos)
            } else {
                intentos++;
                intentos_iniciales--;
                alert("Incorrecto, intentos restantes: " + intentos_iniciales)
            }
            break;
        }
        while (intentos_iniciales <= 4);
    }


}