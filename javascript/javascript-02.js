let botones = document.getElementsByClassName("numeros");
let resultado = document.getElementById("resultado");
let operadores = document.getElementsByClassName("Operador");
let param;
let operacion;


for (const key in botones) {
    if (!Object.hasOwn(botones, key)) continue;
    const boton = botones[key];
    console.log(boton)
    boton.addEventListener("click", pintar);
}

for (const key in operadores) {

    if (!Object.hasOwn(operadores, key)) continue;
    const boton = operadores[key];
    if (boton.innerText == "CE"){
        boton.addEventListener("click", limpiar);
    }

    if (boton.innerText == "+"){
        boton.addEventListener("click", suma);
    }
    if (boton.innerText == "="){
        boton.addEventListener("click", igual);
    }
    
    else 
        boton.addEventListener("click", pintar2);
}

function pintar(e) {
    //console.log(e.target.classname);
    resultado.value += e.target.innerText;
}

function limpiar() {
    resultado.value = "";
}

function pintar2(e) {
    console.log(e.target.innerText);
}

function suma(e){
    prm = resultado.value
    operacion = e.target.innerText
    resultado.value = ""
    e.target.style.backgroundColor = "red";
}

function igual(){
    let prm2 = resultado.value
    if (operacion == "+")
        resultado.value = parseInt(prm) + parseInt(prm2)
}

borrar.addEventListener("click", limpiar);
sumar.addEventListener("click", suma);
console.log(operadores);

