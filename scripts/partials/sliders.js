import Glide from '@glidejs/glide';
import { getIsBreakpoint } from '../globals/utility';

const onDomReady = () => {
  const slider = new Glide('[data-component="slider"]', {
    type: 'carousel',
    perView: 1,
    peek: getIsBreakpoint('lg') ? 50 : 250,
  });

  slider.mount();
};

export default {
  onDomReady,
};
