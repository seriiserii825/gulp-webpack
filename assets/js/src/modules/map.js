export default function googleMap() {
	let iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.122659149275!2d10.98080671555754!3d45.46733297910094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781e20b0805c3f1%3A0x7db4cf5e7b96867a!2sVia%20della%20Consortia%2C%202%2C%2037127%20Verona%20VR%2C%20Italia!5e0!3m2!1sit!2s!4v1600771259702!5m2!1sit!2s" width="936" height="314" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
	const mapDiv = document.querySelector('.map');

	if (typeof (mapDiv) != 'undefined' && mapDiv != null) {
		const mapTimeOut = setTimeout(() => {
			mapDiv.innerHTML = iframe;
			clearTimeout(mapTimeOut);
		}, 1000);
	}

}