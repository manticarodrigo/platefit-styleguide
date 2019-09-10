document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('[data-component="parallax-container"]');
  const navbar = document.querySelector('[data-component="navbar"]');

  const getIsScrolled = () => {
    if (window.innerWidth > 950) {
      return container.scrollTop > 61;
    } else {
      return window.pageYOffset > 61;
    }
  }

  const setNavOpacity = () => {
    const opacity = getIsScrolled() ? 0.75 : 1;
    navbar.style.opacity = opacity;
  };


  container.addEventListener('scroll', setNavOpacity);
  window.addEventListener('scroll', setNavOpacity);

  navbar.onmouseenter = () => {
    if (!getIsScrolled()) return;

    navbar.style.opacity = 1;
  };
  
  navbar.onmouseleave = () => {
    if (!getIsScrolled()) return;

    navbar.style.opacity = 0.75;
  };
});
