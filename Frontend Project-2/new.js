let songimg = document.getElementById("songimg")
let songname = document.getElementById("songname")
let artist = document.getElementById("artist")
let source = document.getElementById("source")

let ctrl = document.getElementById("ctrl")
let move = document.getElementById("move")

let a = document.getElementsByClassName("s1")
let b = document.getElementsByClassName("s2")
let c = document.getElementsByClassName("s3")
let d = document.getElementsByClassName("s4")
let e = document.getElementsByClassName("s5")
let f = document.getElementsByClassName("s6")
let g = document.getElementsByClassName("s7")

let currentTrackIndex = 0;

function loadTrack(current) {
    const playlist = [
        {
            name: "Urugi urugi",
            artist: "Siddhu Kumar, Vignesh Ramakrishna",
            img: "url('images/song1img.jpeg')",
            src: "audios/Urugi Urugi.mp3"
        },
        {
            name: "Sikkikita",
            artist: "Leno Jems",
            img: "url('images/song2img.jpeg')",
            src: "audios/Sikkikita-MassTamilan.dev.mp3"
        },
        {
            name: "Thangame",
            artist: "Anirudh Ravichandren",
            img: "url('images/song3img.jpeg')",
            src: "audios/Thangame.mp3"
        },
        {
            name: "Lovvu lovvu",
            artist: "Yuvan Shankar Raja, Andrea Jeremiah",
            img: "url('images/song4img.jpeg')",
            src: "audios/Lovvu-Lovvu-MassTamilan.io.mp3"
        },
        {
            name: "Vaadi en trip",
            artist: "Sean Roldan, ofRO",
            img: "url('images/song5img.jpeg')",
            src: "audios/Vaadi En Trip.mp3"
        },
        {
            name: "Heeriye",
            artist: "Jasleen Royal,Sudharshan Ashok",
            img: "url('images/song6img.jpeg')",
            src: "audios/Eeriye-MassTamilan.dev.mp3"
        },
        {
            name: "Yeppadi irundha",
            artist: "Tippu, Gopika Poornima, Viveka",
            img: "url('images/song7img.jpeg')",
            src: "audios/Yeppadi-Irruntha-MassTamilan.so.mp3"
        }
    ];

    songname.innerHTML = playlist[current].name;
    artist.innerHTML = playlist[current].artist;
    songimg.style.backgroundImage = playlist[current].img;
    source.src = playlist[current].src;
    audio.load();
    audio.play();
    ctrl.classList.remove("fa-play")
    ctrl.classList.add("fa-pause")

    if (current === 0) {
        a[0].style.backgroundColor = "rgb(255, 255, 24)";
        b[0].style.backgroundColor = "white";
        c[0].style.backgroundColor = "white";
        d[0].style.backgroundColor = "white";
        e[0].style.backgroundColor = "white";
        f[0].style.backgroundColor = "white";
        g[0].style.backgroundColor = "white";
    }
    else if (current === 1) {
        a[0].style.backgroundColor = "white";
        b[0].style.backgroundColor = "rgb(255, 255, 24)";
        c[0].style.backgroundColor = "white";
        d[0].style.backgroundColor = "white";
        e[0].style.backgroundColor = "white";
        f[0].style.backgroundColor = "white";
        g[0].style.backgroundColor = "white";
    }
    else if (current === 2) {
        a[0].style.backgroundColor = "white";
        b[0].style.backgroundColor = "white";
        c[0].style.backgroundColor = "rgb(255, 255, 24)";
        d[0].style.backgroundColor = "white";
        e[0].style.backgroundColor = "white";
        f[0].style.backgroundColor = "white";
        g[0].style.backgroundColor = "white";
    }
    else if (current === 3) {
        a[0].style.backgroundColor = "white";
        b[0].style.backgroundColor = "white";
        c[0].style.backgroundColor = "white";
        d[0].style.backgroundColor = "rgb(255, 255, 24)";
        e[0].style.backgroundColor = "white";
        f[0].style.backgroundColor = "white";
        g[0].style.backgroundColor = "white";
    }
    else if (current === 4) {
        a[0].style.backgroundColor = "white";
        b[0].style.backgroundColor = "white";
        c[0].style.backgroundColor = "white";
        d[0].style.backgroundColor = "white";
        e[0].style.backgroundColor = "rgb(255, 255, 24)";
        f[0].style.backgroundColor = "white";
        g[0].style.backgroundColor = "white";
    }
    else if (current === 5) {
        a[0].style.backgroundColor = "white";
        b[0].style.backgroundColor = "white";
        c[0].style.backgroundColor = "white";
        d[0].style.backgroundColor = "white";
        e[0].style.backgroundColor = "white";
        f[0].style.backgroundColor = "rgb(255, 255, 24)";
        g[0].style.backgroundColor = "white";
    }
    else {
        a[0].style.backgroundColor = "white";
        b[0].style.backgroundColor = "white";
        c[0].style.backgroundColor = "white";
        d[0].style.backgroundColor = "white";
        e[0].style.backgroundColor = "white";
        f[0].style.backgroundColor = "white";
        g[0].style.backgroundColor = "rgb(255, 255, 24)";
    }
}

loadTrack(currentTrackIndex);
audio.load();
audio.pause()
ctrl.classList.add("fa-play")
ctrl.classList.remove("fa-pause")

audio.onloadedmetadata = function () {
    move.max = audio.duration;
    move.value = audio.currentTime;
}

if (audio.play) {
    setInterval(() => {
        move.value = audio.currentTime;}, 500);
}

function change() {
    audio.play();
    audio.currentTime = move.value
    ctrl.classList.remove("fa-play")
    ctrl.classList.add("fa-pause")
}

audio.addEventListener('ended', function() {
    playNextTrack();
});

function playpause() {
    if (ctrl.classList.contains("fa-pause")) {
        audio.pause()
        ctrl.classList.remove("fa-pause")
        ctrl.classList.add("fa-play")
    }
    else {
        audio.play()
        ctrl.classList.remove("fa-play")
        ctrl.classList.add("fa-pause")
    }
}


function playPreviousTrack() {
    currentTrackIndex = (currentTrackIndex - 1);
    if(currentTrackIndex<=-1){
        currentTrackIndex=6
    }
    loadTrack(currentTrackIndex);
}

function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1);
    if(currentTrackIndex>=7){
        currentTrackIndex=0
    }
    loadTrack(currentTrackIndex);
}

function order1() {
    currentTrackIndex = 0;
    loadTrack(currentTrackIndex);
}
function order2() {
    currentTrackIndex = 1;
    loadTrack(currentTrackIndex);

}
function order3() {
    currentTrackIndex = 2;
    loadTrack(currentTrackIndex);
}
function order4() {
    currentTrackIndex = 3;
    loadTrack(currentTrackIndex);
}
function order5() {
    currentTrackIndex = 4;
    loadTrack(currentTrackIndex);
}
function order6() {
    currentTrackIndex = 5;
    loadTrack(currentTrackIndex);
}
function order7() {
    currentTrackIndex = 6;
    loadTrack(currentTrackIndex);
}