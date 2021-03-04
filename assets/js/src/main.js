import gsapAnimation from "./modules/animation";
import touchMenu from "./modules/touch-menu";

document.addEventListener("DOMContentLoaded", function () {
  if (window.document.documentMode) {
    // alert('Internet Explorer');
    console.log("internet expolorer");
  } else {
    // gsapAnimation();
    // touchMenu();
  }
});
