document.addEventListener('load', () => {
  const playButton = document.querySelector('.player__play-button');
  const video = document.querySelector('.player__screen');
  const volume = document.querySelector('.player__volume');
  const speed = document.querySelector('.player__speed');
  const rew = document.querySelector('.player__rewind');
  const ff = document.querySelector('.player__forward');
  const progressBar = document.querySelector('.player__progress-bar');

  const switchvideo = () => {
    playButton.classList.toggle('player__play-button--pause');
    if (playButton.classList.contains('player__play-button--pause')) {
      video.play();
    } else {
      video.pause();
    }
  };

  video.addEventListener('loadedmetadata', () => {
    progressBar.max = video.duration;
    progressBar.min = 0;
  });

  video.addEventListener('timeupdate', () => {
    progressBar.value = video.currentTime;
  });

  video.addEventListener('ended', () => {
    playButton.classList.toggle('player__play-button--pause');
    video.currentTime = 0;
  });

  volume.addEventListener('input', () => {
    video.volume = volume.value / 10;
  });

  speed.addEventListener('input', () => {
    video.playbackRate = speed.value / 5;
  });

  progressBar.addEventListener('input', () => {
    video.currentTime = progressBar.value;
  });

  ff.addEventListener('click', () => {
    video.currentTime += 25;
  });

  rew.addEventListener('click', () => {
    video.currentTime -= 10;
  });

  playButton.addEventListener('click', switchvideo);
  video.addEventListener('click', switchvideo);
});
