
	const mainMenu = $('#js-main-menu');
	let closeMenu = function () {
		$('#js-sandwitch-wrap').on('click', function () {
			if (mainMenu.hasClass('fixed')) {
				mainMenu.removeClass('fixed');
				$('body').css({
					overflow: '',
					paddingRight: 'initial'
				});
			} else {
				$('body').css({
					overflow: 'hidden',
					paddingRight: '12px'
				});
				mainMenu.addClass('fixed');
			}
			$(this).toggleClass('sandwitch--active');
			$(this).closest('.sandwitch-wrapper').toggleClass('sandwitch--active');
		});
	};
	closeMenu();
