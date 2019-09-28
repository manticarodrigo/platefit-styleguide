import { getIsScrolled } from '../globals/utility';

let navbar;

const onDomReady = () => {
  navbar = document.querySelector('[data-component="navbar"]');

  const setOpacity = (entering) => {
    if (!getIsScrolled()) return;

    navbar.style.opacity = entering ? 1 : 0.75;
  };

  if (navbar) {
    navbar.onmouseenter = () => setOpacity(true);
    navbar.onmouseleave = () => setOpacity(false);
  }
};

const onScroll = () => {
  if (navbar) {
    navbar.style.opacity = getIsScrolled() ? 0.75 : 1;
  }
}

export default {
  onDomReady,
  onScroll,
};
