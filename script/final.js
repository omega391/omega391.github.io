
var sound = new Howl ({
   src:['media/bg.mp3'], 
   volume: 0.3,
   loop:true,

});
var music = document.getElementById('bg_music');
$(document).ready(function() {
    // document is loaded and DOM is ready
     music.volume = 0.2;
   display_c();
  
  
   
});
function pauseAudio() {  
    if(music.playing(true)){
        music.pause();
    }else{
        music.play();
    }
} 

function display_c(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
var x = new Date()
document.getElementById('ct').innerHTML = x;
display_c();
 }