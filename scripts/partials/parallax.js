import { jarallax } from 'jarallax';
import { getIsMobile } from '../globals/utility';

const onDomReady = () => {
  const coverElements = document.querySelectorAll('[data-parallax="cover"]');
  const containElements = document.querySelectorAll('[data-parallax="contain"]');

  jarallax(coverElements, { speed: 0.5 });
  jarallax(containElements, { speed: 0.8, imgSize: getIsMobile() ? '60%' : '90%' });
};

export default {
  onDomReady,
};
