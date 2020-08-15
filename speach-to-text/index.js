class SpeechRecognition{
     constructor (options) {
          const SpeechToText = window.SpeechRecognition || window.webkitSpeechRecognition;
          this.SpeechApi = new SpeechToText();
          this.output = options.output ? options.output : document.createElement('div');
          this.SpeechApi.continuous = true;
          this.SpeechApi.interimResults = false;
          this.SpeechApi.onresult = (event) => {
               var resultIndex = event.resultIndex;
               var transcript = event.results[resultIndex][0].transcript;
               this.output.textContent += transcript;
          };
     }

     start(){
          this.SpeechApi.start();
     }

     stop(){
          this.SpeechApi.stop();
     }
}


window.onload = function() {
     
     var speech = new SpeechRecognition({
          output: document.querySelector('.output')
     });
     var startButton = document.querySelector(".startButton");
     var stopButton = document.querySelector(".stopButton");
     stopButton.disabled = true;

     startButton.addEventListener('click', () => {
          startButton.disabled = true;
          stopButton.disabled = false;
          startButton.textContent = "Recording...";
          speech.start();
     });

     stopButton.addEventListener('click', () => {
          stopButton.disabled = true;
          startButton.disabled = false;
          startButton.textContent = "Start Recording";
          speech.stop();
     })
}