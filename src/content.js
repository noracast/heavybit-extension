// Replace playback rates
let interval = setInterval(()=> {
  let player = document.getElementById('podcast-audio-player')
  if(player) {

    clearInterval(interval)

    // Replace playbackRates
    // ---------------------------------

    let attr = JSON.parse(player.getAttribute('data-setup'))
    attr.playbackRates = [0.7, 0.8, 1]
    player.setAttribute('data-setup', JSON.stringify(attr))

    // Toggle play/pause with space key
    // ---------------------------------

    document.addEventListener('keydown', (e)=> {
      if(e.keyCode==32) {
        e.preventDefault()
        document.querySelector('.vjs-play-control').click()
      }
    })

    // Colored Name
    // ------------
    const colors = ['ff8b6a', '6b76ff', 'f9fd50', 'dd6b4d', '74b49b']
    let elements = document.querySelectorAll('strong')
    classnames = []
    elements.forEach((el)=> {
      const name = el.textContent.slice(0,-1) // remove ':'
      let mathes = name.match(/^(\S+)/i)
      if(mathes) {
        let classname = mathes[1].replace(':','').toLowerCase()
        el.classList.add(classname)
        if(classname!='brian' && !classnames.includes(classname)) {
          classnames.push(classname)
        }
      }
    })
    let sheets = 'strong.brian { color: #33a1bb }\n'
    classnames.forEach((name, idx)=> {
      sheets += `strong.${name} { color: #${colors[idx]} }\n`
    })
    let css = document.createTextNode(sheets)
    let style = document.createElement('style')
    style.appendChild(css)
    document.body.appendChild(style)
  }
}, 1)

let code = document.createTextNode(`
const STEP_SECONDS = 7
document.addEventListener('keydown', function(e) {
  let player = videojs.players['podcast-audio-player']
  if(player.paused() || Boolean(e.shiftKey)){
    return
  }
  if(e.keyCode==37) { // [left arrow]
    player.currentTime(player.currentTime() - STEP_SECONDS)
  }
  else if(e.keyCode==39) { // [right arrow]
    player.currentTime(player.currentTime() + STEP_SECONDS)
  }
  else if(e.keyCode==83) { // "s"
    // Skip intro.
    player.currentTime(50)
  }
});`)
// TODO 上記、こういう書き方で外部ファイル化できないか？
// let code = document.createTextNode(`\`${require('./injection.js')}\``);
let script = document.createElement('script')
script.appendChild(code)
window.addEventListener('load', ()=> {
  document.body.appendChild(script);
})
