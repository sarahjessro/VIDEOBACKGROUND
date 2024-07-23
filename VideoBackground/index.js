var video = document.getElementById("myVideo");
var button = document.getElementById('pause');


function myFunction() {
    if (video.paused) {
        video.play();
        pause.innerHTML = "PAUSE";
    } else {
        video.pause();
        pause.innerHTML = "PLAY";
    }
}