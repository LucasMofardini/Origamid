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
// $('li').on('click', function(){
//   $('button').text('DAORA');
// });
// Esse preventDefault(); voce anula o que o objeto a iria fazer e deixa o que a funçao vai fazer
// $('a').click(function(e){
//   e.preventDefault();
//   $(this).text("clicou");
// });]

//Um hover que nao muda, instantaneo
// $('li').on('mouseenter', function(){
//   $('button').text('DAORA');
// });
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

$('.abrir-modal').on('click',function(){
  $('.modal').toggleClass('active');
  var condicao = $('.modal').hasClass('active');
  if(condicao){
    $(this).text('Fechar Modal');
  }else{
  $(this).text('Abrir Modal');
  }
});

//pega ou define o valor
//ex: está pegando o valor do href do primeiro a
var href = $('a').attr('href');
var clas = $('a').attr('class');
var id = $('a').attr('id');
console.log(href);
console.log(clas);
console.log(id);
//remove o atributo
$('a').attr('href');

//pega ou define o valor do elemento
//ultilizado em input, select e text area;
$('#btn-teste').on('click', function(){
  var nome = $('.nome').val();
  $('.mostrar').text(nome);
});

//Remover um elemento do DOM ( documento )
$('select').remove();


//Tira todos os filhos do elemento, mas mantem o Pai
$('section').empty()
//tudo que está dentro do section será removido mas ele não vai ser

//Funções de estilo

//pega algum elemento css e voce consegue mudar
$('span').css('font-size','1.3em');
//varios valores de propriedades
  $('span').css({
    'background-color': 'blue',
    'color': 'white',

  });

//Pega o tamanho do width
var tamanhoBtn = $('button').width();
console.log(tamanhoBtn);

var windowHeight = $(window).height();
console.log(windowHeight);

//offset retorna top e left
var offset = $('button').offset(),
    offsetTop = offset.top,
    offsetLeft = offset.left;
console.log(offset);
console.log(offsetTop);
console.log(offsetLeft);

//Setar um offset para algum elemento
//Assume um position relative para ficar 20 ao topo e 10 a esqueda

// $('button').offset({
//   top:20,
//   left:10
// });

//Scroll top é o scroll em relação  ao topo da página

// $(window).scroll(function(){
//   var scrollTop = $(this).scrollTop();
//   console.log(scrollTop);
// });

$('#btn-teste').on('click', function(e){
  e.preventDefault();
  $(window).scrollTop(0);
});
$( "p" ).each(function(a) {
  console.log( a + ": " + $( this ).text() );
});
//Pega todos os elementos que tem a classe
// $('a').each();

//Animar para aparecer itens na página
// $(window).scroll(function(){
//   var scrollTop = $(this).scrollTop();
//   console.log(scrollTop);
//   $('.anime').each(function(){
//     if(scrollTop > $(this).offset().top - 400){
//       $(this).addClass('inicia');
//     }
//   });
// });
$('.abrir').on('click',function(){
  $('.content').toggleClass('ativo');
  console.log('Ok');
});

//Animar
$('.btnaa').on('click', function(){
  console.log('a');
  $('.aa').animate({
    opacity: 0.5,
  },1000);
});

//fadeIn e fadeOut

// $('.btnaa').click(function(){
//   $('.modal').fadeOut();
// });

//Show mostra

// $('.btnaa').click(function(){
//   $('.modal').Show();
// });
//Hide tira tambem o width e height

// $('.btnaa').click(function(){
//   $('.modal').Hide();
// });

//Slide Up // aparecer
// $('.btnaa').click(function(){
//   $('.modal').slideUp(1000);
// });

//Slide Down // desaparece

// $('.btnaa').click(function(){
//   $('.modal').SlideDown(1000);
// });

//Igual slide down e slide up // Com toggleClass

// $('.btnaa').click(function(){
//   $('.lucas').slideToggle();
// });

//Slide toggle  realiza a função depois da animação

$('.btnaa').click(function(){
  $('.lucas').slideToggle(function(){
    $('.btnaa').click();
  });
});
