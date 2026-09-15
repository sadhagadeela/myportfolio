const songs = [
 {title:"Summer Vibes",artist:"Audio Library",src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",cover:"https://picsum.photos/300/300?random=1"},
 {title:"Chill Beat",artist:"Free Music",src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",cover:"https://picsum.photos/300/300?random=2"},
 {title:"Night Drive",artist:"Beats",src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",cover:"https://picsum.photos/300/300?random=3"}
];
let songIndex = 0;
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const playIcon = document.getElementById('playIcon');
const progress = document.getElementById('progress');

function loadSong(i){
 title.innerText = songs[i].title;
 artist.innerText = songs[i].artist;
 audio.src = songs[i].src;
 cover.src = songs[i].cover;
}
loadSong(songIndex);

function playPause(){
 if(audio.paused){audio.play(); playIcon.className='fa-solid fa-pause'}
 else{audio.pause(); playIcon.className='fa-solid fa-play'}
}
function nextSong(){songIndex=(songIndex+1)%songs.length; loadSong(songIndex); audio.play(); playIcon.className='fa-solid fa-pause'}
function prevSong(){songIndex=(songIndex-1+songs.length)%songs.length; loadSong(songIndex); audio.play(); playIcon.className='fa-solid fa-pause'}

audio.addEventListener('timeupdate',(e)=>{
 const {duration, currentTime} = e.target;
 const percent = (currentTime/duration)*100;
 progress.style.width = `${percent}%`;
 document.getElementById('currTime').innerText = formatTime(currentTime);
 document.getElementById('durTime').innerText = formatTime(duration || 0);
});
document.getElementById('progressContainer').addEventListener('click',function(e){
 const width = this.clientWidth;
 const clickX = e.offsetX;
 const duration = audio.duration;
 audio.currentTime = (clickX/width)*duration;
});
function formatTime(s){
 let min = Math.floor(s/60);
 let sec = Math.floor(s%60);
 if(sec<10) sec=`0${sec}`;
 return `${min}:${sec}`;
}
audio.addEventListener('ended',nextSong);
