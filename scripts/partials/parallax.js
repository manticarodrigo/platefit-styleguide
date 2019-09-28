import { jarallax } from 'jarallax';

const onDomReady = () => {
  jarallax(document.querySelectorAll('.bg-cover'), { speed: 0.5 });
};

export default {
  onDomReady,
};
