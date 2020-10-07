import mixitup from 'mixitup';

export default function mixitupFilter() {
	// const mixer = mixitup('#js-filter');
	if (document.querySelector('#js-filter')) {
		const mixer = mixitup('#js-filter');
		document.querySelectorAll('.filter__button').forEach(item => {
			item.addEventListener('click', (event) => {
				event.preventDefault();
			});
		});
	}
};