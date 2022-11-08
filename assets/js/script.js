var stream = document.getElementById('stream');
var playButton = document.getElementById('playButton');

playButton.addEventListener('click', playOrPause, false);

function playOrPause(){
    if(!stream.paused && !stream.ended){
        stream.pause();
        playButton.style.backgroundImage = 'url(assets/img/player.gif)';
    }else{
        stream.play();
        playButton.style.backgroundImage = 'url(assets/img/pause.png)';
    }
}