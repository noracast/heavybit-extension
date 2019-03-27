// Replace playback rates
let interval = setInterval(()=>{
  let player = document.getElementById('podcast-audio-player')
  if(player) {
    let attr = JSON.parse(player.getAttribute('data-setup'))
    attr.playbackRates = [0.7, 0.8, 1]
    player.setAttribute('data-setup', JSON.stringify(attr))
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
