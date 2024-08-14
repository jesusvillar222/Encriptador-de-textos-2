const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar (stringEncriptada){
    let matrizCodigo = [["e","entrer"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i ++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
   }

function desencriptar (stringdesencriptada){
    let matrizCodigo = [["e","entrer"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringdesencriptada = stringdesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i ++) {
        if (stringdesencriptada.includes(matrizCodigo[i][1])){
            stringdesencriptada = stringdesencriptada.replaceAll(matrizCodigo[i][1] ,matrizCodigo[i][0])
        }
    }
    return stringdesencriptada
}