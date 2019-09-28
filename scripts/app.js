import Navbar from './partials/navbar';
import Video from './partials/video';
import SmoothScroll from './partials/smooth-scroll';
import Parallax from './partials/parallax';
import './partials/maps';
import './partials/sprites';

const onScroll = () => {
  Navbar.onScroll();
  SmoothScroll.onScroll();
};

const onDomReady = () => {
  Navbar.onDomReady();
  Video.onDomReady();
  SmoothScroll.onDomReady();
  Parallax.onDomReady();
};

document.addEventListener('DOMContentLoaded', onDomReady);
window.addEventListener('scroll', onScroll);
