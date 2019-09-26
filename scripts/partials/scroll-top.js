import { getIsScrolled } from '../globals/utility';

let backToTop;

const onDomReady = () => {
  backToTop = document.querySelector('[data-component="scroll-top"]');

  let container;
  let timeOut;
  let distance = -5;
  let time = 20;
  
  const scrollToTop = () => {
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
      container = window;
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
  onDomReady,
  onScroll,
};
