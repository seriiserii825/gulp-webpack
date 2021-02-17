export default function fixedHeader () {
  const header = document.querySelector('.main-header');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      if (!header.classList.contains('active')) {
        header.classList.add('active');
        const headerActive = document.querySelector('.main-header.active');
        setTimeout(() => {
          header.classList.remove('main-header--hidden');
        }, 400);
      }
    } else {
      if (header.classList.contains('active')) {
        header.classList.remove('active');
      }
    }
  });
  
  function closeMenu () {
    document.querySelector('.main-menu').classList.remove('fixed');
    document.body.style.overflow = '';
    document.body.style.paddingRight = 'initial';
    document.querySelector('#js-sandwitch-wrap').classList.remove('sandwitch--active');
  }
  document.querySelectorAll('.main-menu a').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const blockId = item.getAttribute('href');
      const blockOffsetTop = document.querySelector(blockId).offsetTop;
      window.scrollTo({
        top: blockOffsetTop,
        behavior: "smooth"
      });
      closeMenu();
    });
  });
};
