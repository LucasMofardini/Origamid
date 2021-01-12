$('.tab-menu a').on('click', function(e){
  e.preventDefault();
  var itemID =  $(this).attr('href');
    //remove
    $('.tab-menu a, .item').removeClass('active');

    $(this).addClass('active');
    $(itemID).addClass('active');
});
