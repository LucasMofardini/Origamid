//Funciona porem não é otimizado
// $(document).ready(function(){
//     $('.animais .tab-menu a').first().addClass('active');
//     $('.animais .item').first().addClass('active');
//
//     $('.animais .tab-menu a').on('click', function(e){
//       e.preventDefault();
//       var itemID =  $(this).attr('href');
//
//         //remove
//         $('.animais  .tab-menu a, .item').removeClass('active');
//         $(this).addClass('active');
//         $(itemID).addClass('active');
//     });
//
//     $('.florestas .tab-menu a').first().addClass('active');
//     $('.florestas .item').first().addClass('active');
//
//     $('.florestas .tab-menu a').on('click', function(e){
//       e.preventDefault();
//       var itemID =  $(this).attr('href');
//
//         //remove
//         $('.florestas  .tab-menu a, .item').removeClass('active');
//         $(this).addClass('active');
//         $(itemID).addClass('active');
//     });
// });
$('[data-group]').each(function(){
    var $allTarget = $(this).find('[data-target]'),
    $allClick = $(this).find('[data-click]'),
    activeClass = 'active';
    //deixando habilitado o target da classe e o btn do click
    $allTarget.first().addClass(activeClass);
    $allClick.first().addClass(activeClass);

    //botao clicado
    $allClick.click(function(e){
      e.preventDefault();
      //valor do data-click
      var id = $(this).data('click');
      var $target = $('[data-target="' + id +'"]');

      $allClick.removeClass(activeClass);
      $allTarget.removeClass(activeClass);

      $target.addClass(activeClass);
      //this = botao
      $(this).addClass(activeClass);
    });

});
