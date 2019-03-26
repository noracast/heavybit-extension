// Replace playback rates
let interval = setInterval(()=>{
  let player = document.getElementById('podcast-audio-player')
  if(player) {
    player.setAttribute('data-setup', '{ "playbackRates": [0.8, 0.9, 1], "controlBar": { "fullscreenToggle": false, "timeDivider": false, "download": true } }')
    clearInterval(interval)
  }
}, 1)

// Toggle play/pause with space key
document.addEventListener('keypress', function(e) {
  if(e.keyCode==32){
    e.preventDefault()
    document.querySelector('.vjs-play-control').click()
  }
});
