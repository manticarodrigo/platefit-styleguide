import smoothscroll from 'smoothscroll-polyfill';
import { getIsScrolled } from '../globals/utility';

smoothscroll.polyfill();

let scrollTop;

const onDomReady = () => {
  scrollTop = document.querySelector('[data-component="scroll-top"]');

  _watchBackToTopClick();
  _watchFragmentClick();
}

const onScroll = () => {
  if (scrollTop) {
    scrollTop.style.opacity = getIsScrolled() ? 1 : 0;
  }
};

const _watchBackToTopClick = () => {
  const _scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', _scrollToTop);
  }
};

const _watchFragmentClick = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const href = this.getAttribute('href');

        if (!href || href === '#') return;

        const link = document.querySelector();

        if (!link) return;

        const yCoordinate = link.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; 

        window.scrollTo({
          top: yCoordinate + yOffset,
          behavior: 'smooth'
        });
    });
  });
};

export default {
  onDomReady,
  onScroll,
};
