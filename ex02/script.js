/*
    Chegou a hora de colocar a mão na massa! No desafio desta aula você irá criar uma função anônima que retorne a frase “Fui clicado”. Esta função será aplicada em conjunto de um evento de clique.
*/

const botao = document.querySelector('#calcular');

botao.addEventListener( 'click', () => {
    console.log('Fui clicado');
    alert('Fui clicado');
} )