const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voices"]');
const options = document.querySelectorAll('[type="range"],[name="text"]');
const buttonSPEAK = document.querySelector('#speak');
const buttonSTOP = document.querySelector('#stop');


msg.text = document.querySelector('[name="text"]').value;

speechSynthesis.addEventListener("voiceschanged",function(){
     voices = this.getVoices();
     voicesDropdown.innerHTML = voices
     .filter(voice => voice.lang.includes('en')) //I want to get the english speakers only
     .map(voice => `<option value="${voice.name}">${voice.name} - ${voice.lang}</option>`).join('');
});

voicesDropdown.addEventListener('change', function(){
     msg.voice = voices.find(voice => voice.name === this.value);
     toggle();
});

options.forEach(options => options.addEventListener('change', function(){
     msg[this.name] = this.value;
     toggle(false);
}));

buttonSPEAK.addEventListener('click', toggle);
buttonSTOP.addEventListener('click', () => toggle(false));

function toggle(startOver = true){
     speechSynthesis.cancel();
     if(startOver){
          speechSynthesis.speak(msg);
     }
}
