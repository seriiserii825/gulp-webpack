import {tns} from '../../../../node_modules/tiny-slider/src/tiny-slider';

export default function gallery () {
  const slider = tns({
    container: '.gallery__wrap',
    items: 1,
    slideBy: 1,
    nav: false,
    responsive: {
      640: {
        gutter: 20,
        items: 2,
      },
      1200: {
        items: 3
      }
    }
  });
}
