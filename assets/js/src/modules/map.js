export default function googleMap() {
	const mapDiv = document.querySelector('.map');
	const iframe = `
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.044567283043!2d10.171359416130098!3d44.88174197909838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47805d1f932f5695%3A0x9d2180f19e43cc32!2sVia%20Guglielmo%20Marconi%2C%2025%2C%2043012%20Fontanellato%20PR%2C%20Italia!5e0!3m2!1sit!2s!4v1613468553171!5m2!1sit!2s" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
	`;
	if (document.body.classList.contains('home')) {
		setTimeout(() => {
			mapDiv.innerHTML = iframe;
		}, 2000);
	} else {
		mapDiv.innerHTML = iframe;
	}

}
