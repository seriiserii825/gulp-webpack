export default function fixedHeader() {
	const body = document.body;
	const header = document.querySelector('.main-header');
	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 500) {
			if (!header.classList.contains('active')) {
				header.classList.add('active');
				const headerActive = document.querySelector('.main-header.active');
				const headerHeight = headerActive.getBoundingClientRect().height;
				body.style.paddingTop = headerHeight + 'px';
				setTimeout(() => {
					header.classList.remove('main-header--hidden');
				}, 400);
			}
		} else {
			if (header.classList.contains('active')) {
				header.classList.remove('active');
				body.style.paddingTop = '0';
			}
		}
	});
};
