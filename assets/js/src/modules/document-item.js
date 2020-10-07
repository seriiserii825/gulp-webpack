export default function documentItemHover(){
	const documentsSection = document.querySelectorAll('.documentazione-page-section');
	if (documentsSection) {
		documentsSection.forEach(item => {
			item.addEventListener('mouseover', function (e) {
				if (e.target.nodeName === 'A') {
					let parentElem = e.target.closest('.documentazione-page-section__content');
					let fileSizeElem = parentElem.querySelector('.documentazione-page__item-size span');
					fileSizeElem.textContent = e.target.getAttribute('data-size');
				}
			});
		});
	}
}