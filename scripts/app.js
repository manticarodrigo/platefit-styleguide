function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('../assets/svgs/', true, /\.svg$/));

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('[data-component="parallax-container"]') || window;
  const navbar = document.querySelector('[data-component="navbar"]');

  const getIsScrolled = () => container.scrollTop > 61;

  const setNavOpacity = () => {
    const opacity = getIsScrolled() ? 0.75 : 1;
    navbar.style.opacity = opacity;
  };


  const onScroll = () => setNavOpacity();

  container.addEventListener('scroll', onScroll);

  navbar.onmouseenter = () => {
    if (!getIsScrolled()) return;

    navbar.style.opacity = 1;
  };
  
  navbar.onmouseleave = () => {
    if (!getIsScrolled()) return;

    navbar.style.opacity = 0.75;
  };
});
