console.log('extension:main.js');
// Run code in the web page context
var script = document.createElement('script');
let code = document.createTextNode(`
console.log('ex');
// console.log('Extension',videojs.options.playbackRates);
// videojs.options.playbackRates = [0.5, 0.75, 1, 2, 3, 4];
// let popcorn = Popcorn('#podcast-audio-player_html5_api');

document.getElementById('podcast-audio-player').setAttribute('data-setup', '{ "playbackRates": [0.5, 0.75, 1], "controlBar": { "fullscreenToggle": false, "timeDivider": false, "download": true } }')
// let popcorn = Popcorn('#podcast-audio-player_html5_api');
// console.log('videojs',videojs);
// console.log(videojs(document.getElementById('podcast-audio-player_html5_api')));
`);
console.log(document.readyState);
script.appendChild(code);
document.addEventListener('DOMContentLoaded', ()=> {
  console.log('DOMContentLoaded');
  // document.head.appendChild(script);
  // var scr = document.querySelector('script[src="https://vjs.zencdn.net/6.0.1/video.js"]');
  // console.log('scr.parent',scr.parentNode);
  // scr.parentNode.removeChild(scr);
  document.head.prepend(script);
  document.body.appendChild('<script type="text/javascript" src="https://www.heavybit.com/wp-content/themes/heavybit/assets/js/popcorn.min.js"></script>');
  document.body.appendChild('<script src="https://vjs.zencdn.net/6.0.1/video.js"></script>');
});

// Space key function replacement
document.addEventListener('keypress', function(e) {
  if(e.keyCode==32){
    e.preventDefault()
    document.querySelector('.vjs-play-control').click()
  }
});
