// Live Clock
function updateClock(){
  const now=new Date();
  let h=String(now.getHours()).padStart(2,'0');
  let m=String(now.getMinutes()).padStart(2,'0');
  let s=String(now.getSeconds()).padStart(2,'0');
  document.getElementById('clock').innerText=`${h}:${m}:${s}`;
  document.getElementById('date').innerText=now.toDateString();
}
setInterval(updateClock,1000);
updateClock();

// Stopwatch
let timer=null;
let seconds=0;
function formatTime(sec){
  let h=String(Math.floor(sec/3600)).padStart(2,'0');
  let m=String(Math.floor((sec%3600)/60)).padStart(2,'0');
  let s=String(sec%60).padStart(2,'0');
  return `${h}:${m}:${s}`;
}
function start(){
  if(timer) return;
  timer=setInterval(()=>{seconds++;document.getElementById('stopwatch').innerText=formatTime(seconds)},1000);
}
function stop(){clearInterval(timer);timer=null}
function reset(){clearInterval(timer);timer=null;seconds=0;document.getElementById('stopwatch').innerText='00:00:00'}
