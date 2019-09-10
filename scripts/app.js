import { getContainer } from './globals/parallax';
import Navbar from './partials/navbar';
import Video from './partials/video';
import BackToTop from './partials/back-to-top';
import './partials/sprites'

const onScroll = () => {
  Navbar.onScroll();
  BackToTop.onScroll();
};

const domReady = () => {
  const parallaxContainer = getContainer();

  if (parallaxContainer) {
    parallaxContainer.addEventListener('scroll', onScroll);
  }

  Navbar.domReady();
  Video.domReady();
  BackToTop.domReady();
};

document.addEventListener('DOMContentLoaded', domReady);
window.addEventListener('scroll', onScroll);
