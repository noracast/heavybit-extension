const STEP_SECONDS = 7

// Replace playback rates
let interval = setInterval(()=>{
  let player = document.getElementById('podcast-audio-player')
  if(player) {
    let attr = JSON.parse(player.getAttribute('data-setup'))
    attr.playbackRates = [0.7, 0.8, 1]
    player.setAttribute('data-setup', JSON.stringify(attr))
    // Toggle play/pause with space key
    document.addEventListener('keydown', function(e) {
      if(e.keyCode==32) {
        e.preventDefault()
        document.querySelector('.vjs-play-control').click()
      }
    });
    clearInterval(interval)
  }
}, 1)

let code = document.createTextNode(`
document.addEventListener('keydown', function(e) {
  let player = videojs.players['podcast-audio-player']
  if(e.keyCode==37) {
    player.currentTime(player.currentTime() - ${STEP_SECONDS})
  }
  else if(e.keyCode==39) {
    player.currentTime(player.currentTime() + ${STEP_SECONDS})
  }
});
`);
let script = document.createElement('script')
script.appendChild(code)
window.addEventListener('load', ()=> {
  document.body.appendChild(script);
});
