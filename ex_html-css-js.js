let nombre = document.getElementById("nombre");


document.getElementById("instrucciones").oninput = function (){
    document.getElementById("instrucciones").textContent = this.value.length;
};

document.getElementById("boton").onclick = function (){
    document.body.classList.toggle("oscuro");
};

document.getElementById("enviar").onmouseover = function (){
    document.inputEncoding.classList.toggle("white");
};