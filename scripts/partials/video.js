const domReady = () => {
  const video = document.querySelector('.video');
  const videoButton = document.querySelector('.video__button');
  const videoContainer = document.querySelector('.video__container');
  
  function playOrPauseVideo() {
    if (video.paused === true) {
      video.play();
      videoButton.style.display = 'none';
    } else {
      video.pause();
      videoButton.style.display = 'block';
    }
  };

  if (videoContainer) {
    videoContainer.addEventListener('click', playOrPauseVideo);
  }
};

export default {
  domReady,
}
