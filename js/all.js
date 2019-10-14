function playPause() {
    var MyVideo = document.getElementById("video");
    if (MyVideo.paused) {
        MyVideo.play();
    }
    else {
        MyVideo.pause();
    }
}
function normalScreen() {
    var MyVideo = document.getElementById("video");
    MyVideo.width = 500;
}
function smallScreen() {
    var MyVideo = document.getElementById("video");
    MyVideo.width = 300;
}
function bigScreen() {
    var MyVideo = document.getElementById("video");
    MyVideo.width = 700;
}