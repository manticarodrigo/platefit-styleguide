document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.video');
  const videoButton = document.querySelector('.video__button');
  const videoContainer = document.querySelector('.video__container');
  
  videoContainer.addEventListener('click', () => {
    if (video.paused === true) {
      video.play();
      videoButton.style.display = 'none';
    } else {
      video.pause();
      videoButton.style.display = 'block';
    }
  });
});