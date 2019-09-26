import { getContainer } from '../globals/parallax';
import { getIsScrolled } from '../globals/utility';

let backToTop;

const domReady = () => {
  backToTop = document.querySelector('[data-component="back-to-top"]');
  const parallaxContainer = getContainer();

  let container;
  let timeOut;
  let distance = -5;
  let time = 20;
  
  const scrollToTop = () => {
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
      container = window;
    } else if (parallaxContainer && parallaxContainer.scrollTop != 0) {
      container = parallaxContainer;
    } else {
      container = null;
    }

    if (container) {
      if (time < 0) {
        time = 0;
      }
  
      container.scrollBy(0, distance);
      timeOut = setTimeout(scrollToTop, time);
  
      if (distance > -60) {
        distance = distance - 2;
        time = time - 1
      } else {
        distance = -150;
        time = 0;
      }
  
    } else {
      clearTimeout(timeOut);
      distance = -5;
      time = 20;
    }
  }

  if (backToTop) {
    backToTop.addEventListener('click', scrollToTop);
  }
};

const onScroll = () => {
  backToTop.style.opacity = getIsScrolled() ? 1 : 0;
};

export default {
  domReady,
  onScroll,
}
