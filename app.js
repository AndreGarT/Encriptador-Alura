function encriptar(){
    let textoEncriptar = document.getElementById("texto").value;

    if(verificarTexto(textoEncriptar)=='1'){
        document.getElementById("error-h4").innerHTML="Por favor no ingreses Mayusculas ni acentos!"
        document.getElementById("error-h4").style.color="red";
    }else if(textoEncriptar.length===0){
        document.getElementById("error-h4").innerHTML="Por favor ingresa un texto"
        document.getElementById("error-h4").style.color="red";
    }
    else{
        const nuevaCadena = textoEncriptar
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

        ocultarImagen();
        document.getElementById("error-h4").innerHTML="Texto ingresado correcto!"
        document.getElementById("error-h4").style.color="black";
        document.getElementById("texto-respuesta").innerHTML=nuevaCadena;
        document.getElementById("copiado").innerHTML=""
    }
}

function desencriptar(){
    let textoEncriptar = document.getElementById("texto").value;
    
    const nuevaCadena = textoEncriptar
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ai/gi, "a")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u");
    
    ocultarImagen();
    document.getElementById("texto-respuesta").innerHTML=nuevaCadena;
    document.getElementById("copiado").innerHTML=""
}


function copiarContenido(){
    let texto = document.getElementById('texto-respuesta').innerHTML;
    navigator.clipboard.writeText(texto);
    document.getElementById("copiado").innerHTML="Mensaje copiado!"
}

function verificarTexto(texto){
    texto = String(texto).trim();
    const upper = /[A-ZáéíóúÁÉÍÓÚ]/;

    if(upper.test(texto)) {
        return '1';
    }

    return '0';
}


function ocultarImagen() {
    let imagen = document.getElementById("contenedor-imagen");
    let boton = document.getElementById("respuesta-boton");
    boton.style.display = 'flex';
    imagen.style.display = 'none';
}