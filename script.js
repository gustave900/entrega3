function zoodiaco() {
    let dia, mes;
    dia = parseInt (document.formulario.dia.value)
    mes = parseInt (document.formulario.mes.value)

    var image = document.getElementById("imagenes")
    if ((dia>=21&&mes==3) || (dia<=20&&mes==4)){
        document.getElementById("imagenes").src="images/aries.png"
    }
    if ((dia>=24&&mes==9) || (dia<=23&&mes==10))
        document.getElementById("imagenes").src="images/libra.png"
    if ((dia>=21&&mes==4) || (dia<=21&&mes==5))
    document.getElementById("imagenes").src="images/taurus.png"
    if ((dia>=24&&mes==10) || (dia<=22&&mes==11))
    document.getElementById("imagenes").src="images/scorpio.png"
    if ((dia>=22&&mes==5) || (dia<=21&&mes==6))
    document.getElementById("imagenes").src="images/gemini.png"
    if ((dia>=23&&mes==11) || (dia<=21&&mes==12))
        document.getElementById("imagenes").src="images/sagittarius.png"
    if ((dia>=21&&mes==6) || (dia<=23&&mes==7))
    document.getElementById("imagenes").src="images/cancer.png"
    if ((dia>=22&&mes==12) || (dia<=20&&mes==1))
    document.getElementById("imagenes").src="images/capricorn.png"
    if ((dia>=24&&mes==7) || (dia<=23&&mes==8))
    document.getElementById("imagenes").src="images/leo.png"
    if ((dia>=21&&mes==1) || (dia<=19&&mes==2))
    document.getElementById("imagenes").src="images/acuarius.png"
    if ((dia>=24&&mes==8) || (dia<=23&&mes==9))
    document.getElementById("imagenes").src="images/virgo.png"
    if ((dia>=20&&mes==2) || (dia<=20&&mes==3))
    document.getElementById("imagenes").src="images/piscis.png"
}





























/*
// Creación de un objeto con los signos zodiacales y sus fechas
const zodiacos = {
    "aries": {diaInicio: 21, mesInicio: 3, diaFin: 19, mesFin: 4, imagen: "images/aries.png"},
    "tauro": {diaInicio: 20, mesInicio: 4, diaFin: 20, mesFin: 5, imagen: "images/taurus.png"},
    "geminis": {diaInicio: 21, mesInicio: 5, diaFin: 20, mesFin: 6, imagen: "images/gemini.png"},
    "cancer": {diaInicio: 21, mesInicio: 6, diaFin: 22, mesFin: 7, imagen: "images/cancer.png"},
    "leo": {diaInicio: 23, mesInicio: 7, diaFin: 22, mesFin: 8, imagen: "images/leo.png"},
    "virgo": {diaInicio: 23, mesInicio: 8, diaFin: 22, mesFin: 9, imagen: "images/virgo.png"},
    "libra": {diaInicio: 23, mesInicio: 9, diaFin: 22, mesFin: 10, imagen: "images/libra.png"},
    "escorpio": {diaInicio: 23, mesInicio: 10, diaFin: 21, mesFin: 11, imagen: "images/scorpio.png"},
    "sagitario": {diaInicio: 22, mesInicio: 11, diaFin: 21, mesFin: 12, imagen: "images/sagitarius.png"},
    "capricornio": {diaInicio: 22, mesInicio: 12, diaFin: 19, mesFin: 1, imagen: "images/capricorn.png"},
    "acuario": {diaInicio: 20, mesInicio: 1, diaFin: 18, mesFin: 2, imagen: "images/acuarius.png"},
    "piscis": {diaInicio: 19, mesInicio: 2, diaFin: 20, mesFin: 3, imagen: "images/piscis.png"}
    }

// Creación de una función para obtener el signo zodiacal a partir de la fecha de nacimiento
function obtenerSigno(dia, mes) {
    for (const signo in zodiacos) {
        if (zodiaco[signo].mesInicio == mes && dia >= zodiaco[signo].diaInicio || zodiaco[signo].mesFin == mes && dia <= zodiaco[signo].diaFin) {
        return signo
        }
    }
}

let signo = obtenerSigno(diaNacimiento, mesNacimiento)

/* Pedir al usuario que ingrese su fecha de nacimiento
let diaNacimiento = prompt("Ingrese su día de nacimiento:")
console.log(diaNacimiento)
let mesNacimiento = prompt("Ingrese su mes de nacimiento:")
console.log(mesNacimiento)

// Llamar a la función y almacenar el resultado en una variable
let signo = obtenerSigno(diaNacimiento, mesNacimiento)
console.log(signo)

// Mostrar el resultado en un alert
alert("Tu signo zodiacal es " + signo)
console.log(("Tu signo zodiacal es " + signo))*/