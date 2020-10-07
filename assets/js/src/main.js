import documentItemHover from "./modules/document-item";
import counterUp from "./modules/counter-up";
import filterTabs from "./modules/filter-tabs";
import filterReferenze from "./modules/filter-referenze";
import mixitupFilter from "./modules/filter-mixitup";
import gsapAnimation from "./modules/animation";
import pageIntroAnimation from "./modules/page-intro-animation";
import touchMenu from "./modules/touch-menu";
import equalHeight from "./modules/equal-height";

document.addEventListener('DOMContentLoaded', function () {
	if (window.document.documentMode) {
		// alert('Internet Explorer');
		console.log('internet expolorer');
	} else {
		gsapAnimation();
		touchMenu();
	}
	documentItemHover();
	counterUp();
	filterReferenze();
	mixitupFilter();
	pageIntroAnimation();
	if(window.innerWidth > 992){
		equalHeight('.taxonomies .produzione-post__content', '.taxonomies .produzione-post__img');
	}
	if (document.querySelector('.filter__header')) {
		filterTabs('.filter__header', '.filter__header .filter__button', '.filter__item', 'btn--light');
	}
});