const textarea = document.querySelector(".text")
const btn = document.querySelector(".btn")
let  isSpeaking = true


const texttospeech = () => {
          const synth = window.speechSynthesis;
          const text = textarea.value;

          if (!synth.speaking && text) {
                    const utternace = new SpeechSynthesisUtterance(text)
                    synth.speak(utternace)
          }
          if (text.length > 50) {
                    if (synth.speaking && isSpeaking) {
                              btn.innerHTML = "pause"
                              synth.resume();
                              isSpeaking = false

                    } else {
                              btn.innerHTML = "Resume"
                              synth.pause();
                              isSpeaking = true
                    }
          }
}






btn.addEventListener("click", texttospeech);