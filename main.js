(function(){
  document.addEventListener('keypress', function(e) {
    if(e.keyCode==32){
      e.preventDefault()
      document.querySelector('.vjs-play-control').click()
    }
  }
)})();