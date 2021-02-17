export default function homeIntro () {
  const homeIntroEl = document.querySelector('.home-intro');
  setTimeout(function () {
    homeIntroEl.classList.add('active');
  }, 2000);
}
