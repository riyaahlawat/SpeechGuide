// JavaScript for handling navigation and showing content
function showContent(section) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');
    
    document.getElementById(section).style.display = 'block';

    // Remove active class from all links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // Add active class to clicked link
    event.target.classList.add('active');
}

// JavaScript for handling speech exercise
function playTwister() {
    const utterance = new SpeechSynthesisUtterance("She sells seashells by the seashore.");
    speechSynthesis.speak(utterance);
}

function startSpeechRecognition() {
    // Check if the browser supports the Web Speech API
    if (!('webkitSpeechRecognition' in window)) {
        alert("Your browser does not support speech recognition. Please try using Chrome.");
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = function() {
        document.getElementById('result-message').innerHTML = "Listening...";
    };

    recognition.onresult = function(event) {
        const userSpeech = event.results[0][0].transcript;
        document.getElementById('user-speech').innerHTML = "You said: " + userSpeech;
        
        // Check if user said the correct tongue twister
        if (userSpeech.toLowerCase() === "she sells seashells by the seashore") {
            document.getElementById('result-message').innerHTML = "Great job! You said it correctly!";
        } else {
            document.getElementById('result-message').innerHTML = "Oops! Try again.";
        }
    };

    recognition.onerror = function(event) {
        document.getElementById('result-message').innerHTML = "Error occurred in recognition: " + event.error;
    };

    recognition.start();
}

// Function to switch between sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => section.style.display = 'none');
    
    document.getElementById(sectionId).style.display = 'block';
}

// Exercise 1: Tongue Twister
function playTwister() {
    const utterance = new SpeechSynthesisUtterance("She sells seashells by the seashore.");
    speechSynthesis.speak(utterance);
}

function startSpeechRecognition() {
    // Similar logic as in the previous code, adapted for Exercise 1
    startRecognition("She sells seashells by the seashore", 'user-speech', 'result-message');
}

// Exercise 2: Sentence Practice
function playTwister2() {
    const utterance = new SpeechSynthesisUtterance("The quick brown fox jumps over the lazy dog.");
    speechSynthesis.speak(utterance);
}

function startSpeechRecognition2() {
    startRecognition("The quick brown fox jumps over the lazy dog", 'user-speech2', 'result-message2');
}

// Exercise 3: Word Pronunciation
function playTwister3() {
    const utterance = new SpeechSynthesisUtterance("Supercalifragilisticexpialidocious");
    speechSynthesis.speak(utterance);
}

function startSpeechRecognition3() {
    startRecognition("Supercalifragilisticexpialidocious", 'user-speech3', 'result-message3');
}

// Common function to handle speech recognition
function startRecognition(correctPhrase, userSpeechElementId, resultMessageElementId) {
    if (!('webkitSpeechRecognition' in window)) {
        alert("Your browser does not support speech recognition.");
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = function() {
        document.getElementById(resultMessageElementId).innerHTML = "Listening...";
    };

    recognition.onresult = function(event) {
        const userSpeech = event.results[0][0].transcript;
        document.getElementById(userSpeechElementId).innerHTML = "You said: " + userSpeech;
        
        if (userSpeech.toLowerCase() === correctPhrase.toLowerCase()) {
            document.getElementById(resultMessageElementId).innerHTML = "Great job! You said it correctly!";
        } else {
            document.getElementById(resultMessageElementId).innerHTML = "Oops! Try again.";
        }
    };

    recognition.onerror = function(event) {
        document.getElementById(resultMessageElementId).innerHTML = "Error occurred in recognition: " + event.error;
    };

    recognition.start();
}

// Functions for Exercise 4: Number Pronunciation
function playTwister4() {
    const utterance = new SpeechSynthesisUtterance("Eight, Thirty-five, Two hundred, Forty-one");
    speechSynthesis.speak(utterance);
}

function startSpeechRecognition4() {
    startRecognition("Eight, Thirty-five, Two hundred, Forty-one", 'user-speech4', 'result-message4');
}

// Functions for Exercise 5: Paragraph Reading
function playTwister5() {
    const utterance = new SpeechSynthesisUtterance("Once upon a time, in a land far, far away, there lived a young prince...");
    speechSynthesis.speak(utterance);
}

function startSpeechRecognition5() {
    startRecognition("Once upon a time, in a land far, far away, there lived a young prince who loved to explore the enchanted forest...", 'user-speech5', 'result-message5');
}
