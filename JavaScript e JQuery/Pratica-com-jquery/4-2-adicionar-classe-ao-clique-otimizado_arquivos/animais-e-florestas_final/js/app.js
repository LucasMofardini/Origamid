$('[data-group]').each(function() {

	var $allTarget = $(this).find('[data-target]'),
			$allClick = $(this).find('[data-click]'),
			activeClass = 'active';
	
	console.log($allClick);

	$allClick.first().addClass(activeClass);
	$allTarget.first().addClass(activeClass);

	$allClick.click(function(e) {
		e.preventDefault();

		var id = $(this).data('click'),
				$target = $('[data-target="' + id + '"]');

		$allClick.removeClass(activeClass)
		$allTarget.removeClass(activeClass);

		$target.addClass(activeClass);
		$(this).addClass(activeClass);
	});
});