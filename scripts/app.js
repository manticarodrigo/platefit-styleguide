import { jarallax } from 'jarallax';

import Navbar from './partials/navbar';
import Video from './partials/video';
import ScrollTop from './partials/scroll-top';
import './partials/sprites';

const onScroll = () => {
  Navbar.onScroll();
  BackToTop.onScroll();
};

const onDomReady = () => {
  Navbar.onDomReady();
  Video.onDomReady();
  ScrollTop.onDomReady();

  jarallax(document.querySelectorAll('.bg-cover'), { speed: 0.5 });
};

document.addEventListener('DOMContentLoaded', onDomReady);
window.addEventListener('scroll', onScroll);
