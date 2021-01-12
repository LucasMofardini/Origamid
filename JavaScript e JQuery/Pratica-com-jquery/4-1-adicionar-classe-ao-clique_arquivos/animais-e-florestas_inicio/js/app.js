$('.tab-menu a').on('click', function(e){
  e.preventDefault();
  var itemID =   $(this).attr('href');
    $(this).addClass('active');
    $(itemID).addClass('active');
});
