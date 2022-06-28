/* Usando JavaScript puro (Vanilla JavaScript)
const titulo = document.querySelector("h1")
titulo.style.color = "blue"
 titulo.textContent = "Relação de candidatos"; */

//  Usando Jquery
const titulo = $("h1");
titulo.hide().fadeIn(5000);
titulo.css("color", "blue");
titulo.text("Relação de Candidatos");

/* Script para o carregamento de candidatos */
const botao = $("#carregar");
const lista = $("#lista")

botao.on("click", function(){
    /* Técnica Ajax de comunicação */
    $.ajax({
        url: "http://localhost:3000/candidatos",
        dataType: "json",
        success: function(resposta) {
        console.log(resposta);
        }
    });

});