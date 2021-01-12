$(document).ready(function(){
    $('.animais .tab-menu a').first().addClass('active');
    $('.animais .item').first().addClass('active');

    $('.animais .tab-menu a').on('click', function(e){
      e.preventDefault();
      var itemID =  $(this).attr('href');

        //remove
        $('.animais  .tab-menu a, .item').removeClass('active');
        $(this).addClass('active');
        $(itemID).addClass('active');
    });

    $('.florestas .tab-menu a').first().addClass('active');
    $('.florestas .item').first().addClass('active');

    $('.florestas .tab-menu a').on('click', function(e){
      e.preventDefault();
      var itemID =  $(this).attr('href');

        //remove
        $('.florestas  .tab-menu a, .item').removeClass('active');
        $(this).addClass('active');
        $(itemID).addClass('active');
    });
});
