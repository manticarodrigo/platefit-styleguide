const domReady = () => {
  const video = document.querySelector('.video');
  const videoContainer = document.querySelector('.video-container');
  
  function playOrPauseVideo() {
    if (video.paused === true) {
      video.play();
      videoContainer.classList.add('is-playing');
    } else {
      video.pause();
      videoContainer.classList.remove('is-playing');
    }
  };

  if (videoContainer) {
    videoContainer.addEventListener('click', playOrPauseVideo);
  }
};

export default {
  domReady,
}
