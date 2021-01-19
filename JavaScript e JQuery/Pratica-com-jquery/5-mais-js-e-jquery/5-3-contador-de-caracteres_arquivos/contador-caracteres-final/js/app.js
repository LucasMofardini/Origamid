$('textarea').on('keyup paste', function(){
	setTimeout(function() {
		var valorTextarea = $('textarea').val().length,
				palavras = $('textarea').val().split(' ').length;
		$('.caracteres').text(valorTextarea);
		$('.palavras').text(palavras);
	}, 200);
});

$('input').on('keyup paste', function(){
	setTimeout(function() {
		var input = $('input').val();
		var multiplica = input * 10 * Math.PI / 23 + 50;
		console.log(multiplica);
		$('.calculo').text(multiplica);
	}, 200);
});