const STEP_SECONDS = 7

document.addEventListener('keydown', function(e) {
  let player = videojs.players['podcast-audio-player']
  if(e.keyCode==37) {
    player.currentTime(player.currentTime() - STEP_SECONDS)
  }
  else if(e.keyCode==39) {
    player.currentTime(player.currentTime() + STEP_SECONDS)
  }
});