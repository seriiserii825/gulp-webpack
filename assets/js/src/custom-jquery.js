jQuery(document).ready(function ($) {
	let languageSelector = $('.wpglobus-selector-link ');
	$.each(languageSelector, function () {
		let code = $(this).find('.code').text();
		let languageText = '';

		function displayLanguageText(elem) {
			let img = elem.find('img');
			let imgSrc = img.attr('src');
			elem.empty();
			elem.append('<span class="name">' + languageText + '</span>');
			elem.append('<img src="' + imgSrc + '" alt="" />');
		}

		if (code === 'IT') {
			languageText = "Passa all'italiano";
			displayLanguageText($(this));
		} else if (code === 'EN') {
			languageText = "Switch to English";
			displayLanguageText($(this));
		} else if (code === 'DE') {
			languageText = "Wechseln Sie zu Deutsch";
			displayLanguageText($(this));
		}
	});

	let closeMenu = function () {
		const mainMenu = $('#js-main-menu');
		$('#js-sandwitch-wrap').on('click', function () {
			if (mainMenu.is(':visible')) {
				mainMenu.removeClass('fixed');
			} else {
				mainMenu.addClass('fixed');
			}

			$(this).toggleClass('sandwitch--active');
			$(this).closest('.sandwitch-wrapper').toggleClass('sandwitch--active');
		});
	};
	closeMenu();

	let menuOpenClass = function () {
		$('.main-menu li.menu-item-has-children').append('<span class="menu-icon"></span>');
	};
	menuOpenClass();

	if ($(window).width() < 1400) {
		$('.menu-icon').on('click', function () {
			let subMenu = $(this).closest('li').find('.sub-menu');
			if (subMenu.is(':visible')) {
				$(this).css('right', '-50px');
				subMenu.slideUp();
			} else {
				$(this).css('right', '0');
				subMenu.slideDown();
			}
		});
	}

	$('.list.flags a:first-of-type').on('click', function (e) {
		e.preventDefault();
	});

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 100) {
			$('.main-header').addClass('fixed');
		} else {
			$('.main-header').removeClass('fixed');
		}
	});

	let activeMenuItem = function () {
		let sitePath = location.pathname;
		if (sitePath !== '/' && sitePath !== '/de/' && sitePath !== '/en/') {
			$('.main-menu > li > a').each(function () {
				let href = $(this).attr('href');
				if (href.includes(sitePath)) {
					$(this).closest('li').addClass('current-menu-item');
				}
			});

			$('.sub-menu  li  a').each(function () {
				let href = $(this).attr('href');
				if (href.includes(sitePath)) {
					$(this).closest('.sub-menu').closest('li').addClass('current-menu-item');
				}
			});
		}
	};
	activeMenuItem();

	let tabs = function () {
		let tabsLi = $('.tabs__list li');
		let tabsItem = $('.tabs__item');
		tabsLi.eq(0).addClass('active');
		tabsItem.eq(0).fadeIn();

		tabsLi.on('click', function () {
			let id = $(this).attr('data-tab');
			tabsLi.removeClass('active');
			$(this).addClass('active');
			tabsItem.fadeOut(100);
			$('#' + id).fadeIn(300);
		});
	};
	tabs();

	$('.gallery-block').magnificPopup({
		delegate: '.gallery-block__item', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			enabled: true
		},
		// Delay in milliseconds before popup is removed
		removalDelay: 300,

		// Class that is added to popup wrapper and background
		// make it unique to apply your CSS animations just to this exact popup
		mainClass: 'mfp-fade mfp-with-zoom',
		zoom: {
			enabled: true, // By default it's false, so don't forget to enable it

			duration: 300, // duration of the effect, in milliseconds
			easing: 'ease-in-out', // CSS transition easing function

			// The "opener" function should return the element from which popup will be zoomed in
			// and to which popup will be scaled down
			// By defailt it looks for an image tag:
			opener: function (openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}
	});
	// let mixer = mixitup('#js-filter');
});
