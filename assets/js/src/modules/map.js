export default function googleMap() {
	const mapDiv = document.querySelector('.map');
	const iframe = `
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.044007110071!2d10.169405215538026!3d44.881753379098335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47805d1fb522da7f%3A0x1a71b631c1b61e61!2sCibarium%20Salsamenteria!5e0!3m2!1sit!2s!4v1608309760346!5m2!1sit!2s" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
	`;
	if (document.body.classList.contains('home')) {
		setTimeout(() => {
			mapDiv.innerHTML = iframe;
		}, 2000);
	} else {
		mapDiv.innerHTML = iframe;
	}

}