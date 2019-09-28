import Glide from '@glidejs/glide'

const onDomReady = () => {
  const slider = new Glide('[data-component="slider"]', {
    type: 'carousel',
    perView: 1,
    peek: 150,
  });

  slider.mount();
};

export default {
  onDomReady,
};
