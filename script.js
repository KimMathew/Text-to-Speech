//create a speech object to control text-to-speech
let speech = new SpeechSynthesisUtterance();

//an array to store the voices
let voices = [];

//get the HTML element for voice selection
let voiceSelect = document.querySelector("select");

//get the list of voices and puts them in the 'voices' array
//set the first voice as the default
//goes through each voice and adds it to the dropdown list
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

//Picks the voice selected by the user and sets it to speaking
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () =>{
    //takes the text the user putted in the text area and gets it ready for the computer to speak
    speech.text = document.querySelector("textarea").value;
    //tells the computer to speak the text
    window.speechSynthesis.speak(speech);
})