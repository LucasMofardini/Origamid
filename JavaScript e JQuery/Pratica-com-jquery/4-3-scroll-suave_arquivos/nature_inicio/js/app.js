//Classe ao clique
$('[data-group]').each(function(){
	var $allTarget = $(this).find('[data-target]'),
			$allClick = $(this).find('[data-click]'),
			activeClass = 'active';

	$allTarget.first().addClass(activeClass);
	$allClick.first().addClass(activeClass);

	$allClick.click(function(e){
		e.preventDefault();

		var id = $(this).data('click'),
				$target = $('[data-target="' + id + '"]');

		$allClick.removeClass(activeClass);
		$allTarget.removeClass(activeClass);

		$target.addClass(activeClass);
		$(this).addClass(activeClass);
	});
});

//Scroll suave
$('.menu-nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href');
	var targetOffset = $(id).offset().top;
	console.log(targetOffset);

	$('html, body').animate({
		scrollTop:targetOffset
	},500);
});
