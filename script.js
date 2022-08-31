let inputText = document.querySelector("#input-text");
let outputtext = document.querySelector("#output");

let criptografar = document.querySelector(".btn-criptografar");
let descriptografar = document.querySelector(".btn-descriptografar");

function criptografarFunction(){
         let text = inputText.value;
         
         let result1 = text.replace(/e/g, "enter");
         let result2 = result1.replace(/i/g, "imes");
         let result3 = result2.replace(/a/g, "ai");
         let result4 = result3.replace(/o/g, "ober");
         let result5 = result4.replace(/u/g, "ufat");

         document.getElementById('output').innerHTML = '<textarea readonly id="text">' + result5 + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

}

function descriptografarFunction(){
    let text = inputText.value;
    
    let result1 = text.replace(/enter/g, "e");
    let result2 = result1.replace(/imes/g, "i");
    let result3 = result2.replace(/ai/g, "a");
    let result4 = result3.replace(/ober/g, "o");
    let result5 = result4.replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="text">' + result5 + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
    
}

function copiar(){
    let texto = document.getElementById('text');

    texto.select();
    document.execCommand('copy');
    alert("Texto copiado para área de transferência.");
}