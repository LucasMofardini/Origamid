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
//^= todos os itens que começam com #
$('.menu-nav a[href^="#"]').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href');
	//tamanho do menu
	var tamanhoMenu = $('.menu').innerHeight();
	var targetOffset = $(id).offset().top;
	console.log(targetOffset);

	$('html, body').animate({
		scrollTop:targetOffset - tamanhoMenu
	},500);
});
//clicar no logo e voltar para o inicio
$('.logo').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop : 0
		}, 500);
});
