console.log("welcome");
//initialize variables

let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let mastersong=document.getElementById('mastersong'); 
let songItem=Array.from(document.getElementsByClassName('songitem'));

let songs=[
    {songname:"tune1", filepath:"songs/1.mp3", coverPath:"covers/1.jpg"} , {songname:"tune2", filepath:"songs/2.mp3", coverPath:"covers/2.jpg"} ,{songname:"tune3", filepath:"songs/3.mp3", coverPath:"covers/3.jpg"} ,{songname:"tune4", filepath:"songs/4.mp3", coverPath:"covers/4.jpg"} ,{songname:"tune5", filepath:"songs/5.mp3", coverPath:"covers/5.jpg"} ,{songname:"tune6", filepath:"song/6.mp3", coverPath:"covers/6.jpg"} ,{songname:"tune7", filepath:"songs/7.mp3", coverPath:"covers/7.jpg"} ,{songname:"tune8", filepath:"songs/8.mp3", coverPath:"covers/8.jpg"}, {songname:"tune9", filepath:"songs/9.mp3", coverPath:"covers/9.jpg"}, {songname:"tune10", filepath:"songs/10.mp3", coverPath:"covers/10.jpg"}
]
songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName('title')[0].innerText=songs[i].songname;
})
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{ audioElement.pause();
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
       progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
       myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);

        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex}.mp3`;
        mastersong.innerText=songs[songIndex-1].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    mastersong.innerText=songs[songIndex-1].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    
    audioElement.src=`songs/${songIndex}.mp3`;
    mastersong.innerText=songs[songIndex-1].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})
