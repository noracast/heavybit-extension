// Replace playback rates
let interval = setInterval(()=> {
  let player = document.getElementById('podcast-audio-player')
  if(player) {

    clearInterval(interval)

    // Toggle play/pause with space key
    // ---------------------------------

    let attr = JSON.parse(player.getAttribute('data-setup'))
    attr.playbackRates = [0.7, 0.8, 1]
    player.setAttribute('data-setup', JSON.stringify(attr))
    document.addEventListener('keydown', (e)=> {
      if(e.keyCode==32) {
        e.preventDefault()
        document.querySelector('.vjs-play-control').click()
      }
  }
}, 1)

let code = document.createTextNode(require('./injection.js'));
let script = document.createElement('script')
script.appendChild(code)
window.addEventListener('load', ()=> {
  document.body.appendChild(script);
})
