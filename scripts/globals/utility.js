import { getContainer } from './parallax';

export const getIsScrolled = () => {
  const parallaxContainer = getContainer();
  const isMobile = window.innerWidth > 950;

  if (isMobile && parallaxContainer) {
    return parallaxContainer.scrollTop > 61;
  } else {
    return window.pageYOffset > 61;
  }
}
