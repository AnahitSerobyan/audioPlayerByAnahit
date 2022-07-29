var data = {
    title: [
        "Ed Sheeran-Shape of You",
        "Imagine Dragons-Beliver",
        "Jaymes-young-infinity",
        "Sean Paul-No Lie",
        "Sia-unstoppable",
        "The Chainsmokers,Halsey-Closer"],

    song: [
        "music/Song1.mp3",
        " music/Song2.mp3",
        "music/Song3.mp3",
        "music/Song4.mp3",
        "music/Song5.mp3",
        "music/Song6.mp3",
    ],

    poster: [
        "http://d279m997dpfwgl.cloudfront.net/wp/2021/12/GettyImages-1305025883-1000x667.jpg",
        "https://64.media.tumblr.com/9a44bfb9571e0dbfa634db10715d7d5a/f07305e966e03dc8-90/s400x600/d4f5808f812cf15139e662dad84576091329dddc.gifv",
        "https://c.tenor.com/WLR2DmpjuzQAAAAC/music.gif",
        "https://i.gifer.com/ThjP.gif",
        "https://thumbs.gfycat.com/AcclaimedHeartfeltGoat-size_restricted.gif",
        "https://i.pinimg.com/originals/99/72/c8/9972c81204bc3135239187a934a693f9.gif",
    ]
}




var song = new Audio()
var currentSong = 0;
console.log(song);


window.onload = function () {
    playSong()
}

function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];

    let img = document.getElementById("row1");
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementById("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
}



function playOrPauseSong() {
    let play = document.getElementById("play");


    if (song.paused) {
        song.play();
        play.src = "images/pause.png" //pause
    } else {
        song.pause();
        play.src = "images/play-button-arrowhead.png" //play
    }

}



song.addEventListener("timeupdate", function () {
    // console.log(song.currentTime);
    // console.log(song.duration);

    let fill = document.getElementById("fill")

    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + "%";

    convertTime(song.currentTime)


    if (song.ended) {
        next()
    }

})


function convertTime(seconds) {
    let currentTime = document.getElementById("currentTime");

    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    currentTime.textContent = min + ":" + sec;


    totalTime(Math.round(song.duration))
}



function totalTime(seconds) {

    var min = Math.floor(seconds / 60)
    var sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;


    if (isNaN(min) || isNaN(sec)) {
        return false
    } else {

        currentTime.textContent += " / " + min + ":" + sec
    }

}



function next() {
    currentSong++;
    console.log(currentSong);
    if (currentSong == data.song.length) {
        currentSong = 0
    }

    playSong();
    play.src = "images/pause.png"
}

function pre() {
    currentSong--;

    if (currentSong < 0) {
        currentSong = data.song.length - 1
    }
    playSong();
    play.src = "images/pause.png"
}



function muted(){
    var mute = document.getElementById("mute")

    if(song.muted){
        song.muted = false;
        mute.src = "images/volume.png";
    }else{
        song.muted = true
        mute.src = "images/volume-mute.png"
    }
}



function decrease(){
    song.volume -= 0.2;
}

function increase(){
    song.volume += 0.2
}









