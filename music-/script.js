let song=document.getElementById('song');
let progress=document.getElementById('progress');
let controlIcon=document.getElementById('mid');

song.onloadedmetadata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}

function playPause(){
    if(controlIcon.classList.contains("fa-play")){
        song.pause();
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");
        
    }
    else{
        song.play();
        controlIcon.classList.add("fa-play");
        controlIcon.classList.remove("fa-pause");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500)
}

progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    controlIcon.classList.add("pause");
    controlIcon.classList.remove("play");
}