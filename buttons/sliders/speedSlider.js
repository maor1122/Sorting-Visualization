const speedSlider = document.getElementById("Speed");
speedSlider.value=1001-time;
const speedText=document.getElementById("SpeedText");
speedText.innerHTML=speedSlider.value;
speedSlider.oninput = function(){
  time=1001-this.value;
  speedText.innerHTML=speedSlider.value;
}
