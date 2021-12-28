let video = document.querySelector('video')
let audio = document.querySelector('audio')
let img = document.querySelector('.audioController')

function audioController() {
    if (audio.paused) {
        img.setAttribute('src', 'resources/audioControllerOff.png')
        audio.play();
        video.play()
    } else {
        img.setAttribute('src', 'resources/audioControllerOn.png')
        audio.pause();
        video.pause();
    }
}
