let botones = document.getElementsByClassName("numeros")
let resultado = document.getElementById("resultado")

for (const key in botones) {
    if (!Object.hasOwn(botones, key)) continue;

    const boton = botones[key];
    console.log(boton)
    boton.addEventListener("click", pinta)

}

function pinta(e) {
    resultado.value += e.target.innerText
}

let Ce = document.getElementById("bCe")
let operadores = document.getElementsByClassName("operador")
let prms = []
let operacion
for (const key in operadores) {
    if (!Object.hasOwn(operadores, key)) continue;
    const boton = operadores[key];
    if (boton.innerText == "Ce") {
        boton.addEventListener("click", limpiar)
    } else if (boton.innerText == "+") {
        boton.addEventListener("click", obtener_parametros)
    } else if (boton.innerText == "-") {
        boton.addEventListener("click", obtener_parametros)
    } else if (boton.innerText == "*") {
        boton.addEventListener("click", obtener_parametros)
    } else if (boton.innerText == "/") {
        boton.addEventListener("click", obtener_parametros)
    } else if (boton.innerText == "=") {
        boton.addEventListener("click", igual)
    } else {
        boton.addEventListener("click", pintar2)
    }
}

function pintar2(e) {
    console.log(e.target.innerText)
}

function limpiar() {
    resultado.value = ""
    prms = []
}



function obtener_parametros(e) {
    prms.push(resultado.value)
    operacion = e.target.innerText
    resultado.value = ""
    //e.target.style.backgroundColor = "red"

}
function igual() {
    prms.push(resultado.value)
    let r = 0
    let op =operacion
    let bandera = false
    for (const key in prms) {
        if (Object.prototype.hasOwnProperty.call(prms, key)) {
            console.log(op)
            const prm = prms[key];
            switch (op) {
                case "+":
                    r += parseInt(prm)
                    break
                case "-":
                    if(bandera == false){
                        r = parseInt(prm)
                        bandera = true
                    }
                    else
                        r -= parseInt(prm)
                    break
                case "*":
                    if (bandera == false){
                        r = parseInt(prm)
                        bandera = true
                    }
                    else
                        r *= parseInt(prm)
                    break
                case "/":
                    if (bandera == false){
                        r = parseInt(prm)
                        bandera = true
                    }
                    else
                        r /= parseInt(prm)
                    break
                case "=":
                    r += parseInt(prm)
                    break
            }

        }
    }
    resultado.value = r
}