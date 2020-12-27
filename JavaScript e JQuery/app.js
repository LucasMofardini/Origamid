// $('#paragrafo').hide();
// $( "button" ).html( "Next Step..." );
// $('ul li a , ul li').Hide();
// $('a[href^="#"]').hide();
// var $paragrafo = $('#paragrafo');
if($('p').length){
  console.log("paragrafo existe");
}
console.log($('p').length);


//Adiciona em todas as tags <p> um <span> com Holaa depois
$('p').append(' <span>HOLAA</span>');
// subistitui o primeiro e clona nos outros
// $('p').append($('li'));

//Se voce passa sem nenhum parametro ele serve como GET do valor. Pega apenas o primeiro valor
console.log($('h1').html());
//Se voce passa com   alguma coisa dentro ele subistitui
$( "button" ).html( "Next Step..." );

// APPEND ADICIONA CONTEUDO | HTML SUBISTITUI

//Funciona como GET dos textos, pegando todo o conteudo
console.log($('p').text());
//SUBISTITUI o texto rendelizando apenas o texto, tem a tag
$('h3').text('<span>NAO RENDELIZA A TAG. APENAS O TEXTO</span>');

//Adiciona conteudo antes
$('p').prepend('<span>HOLAA</span>');
// subistitui o primeiro e clona nos outros
// $('p').prepend($('li'));

//Entra apos da TAG
$('p').after('<span> Depois da tag </tag>');
//Entra antes da TAG
$('p').before('<span> Antes da tag </tag>');

//Engloba a TAG, Envolta do elemento , cria um elemento pai pro objeto selecionado
$('p').wrap('<div class="div-teste"></div>');
//Remove o elemento Pai do item selecionado
$('p').unwrap();

// EVENTOS BASICOS

$('p').click(function(){
  $('p').text('LUUCAS');
});

// ou
$('li').on('click', function(){
  $('button').text('DAORA');
});
// Esse preventDefault(); voce anula o que o objeto a iria fazer e deixa o que a funçao vai fazer
// $('a').click(function(e){
//   e.preventDefault();
//   $(this).text("clicou");
// });]

//Um hover que nao muda, instantaneo
$('li').on('mouseenter', function(){
  $('button').text('DAORA');
});
//ex de tirar e colocar o hover

// $('a').mouseenter(function(e){
//   e.preventDefault();
//   $(this).text("clicou");
// });
// $('a').on('mouseleave',function(e){
//   e.preventDefault();
//   $(this).text("Abrir modal");
// });

//O tanto que o scroll ta do topo
//$(document).scrollTop();

// mostra o tamanho da tela
// $(window).on('resize', function(){
//   $('a').text($('body').width());
// });
//
