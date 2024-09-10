// List of tongue twisters
const tongueTwisters = [
    "She sells seashells by the seashore.",
    "Peter Piper picked a peck of pickled peppers.",
    "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
    "I scream, you scream, we all scream for ice cream.",
    "Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair."
];
let currentTwister = '';
let correctCount = 0;
let totalCount = 0;
const maxPrompts = 5;

const promptElement = document.getElementById('prompt');
const resultElement = document.getElementById('result');
const finalScoreElement = document.getElementById('final-score');
const startButton = document.getElementById('start-btn');
const listenButton = document.getElementById('listen-btn');

// Function to prompt the user with a random tongue twister
function promptTwister() {
    const randomIndex = Math.floor(Math.random() * tongueTwisters.length);
    currentTwister = tongueTwisters[randomIndex];
    promptElement.textContent = `Say: "${currentTwister}"`;
    promptElement.style.animation = 'none'; // Reset animation
    setTimeout(() => {
        promptElement.style.animation = ''; // Restart animation for effect
    }, 10); 
}

// Play the correct pronunciation of the current tongue twister
function playPronunciation(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
}

// Start speech recognition
function startSpeechRecognition() {
    if (!('webkitSpeechRecognition' in window)) {
        alert('Your browser does not support speech recognition.');
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    function nextRound() {
        if (totalCount < maxPrompts) {
            promptTwister(); // Prompt the next twister
            recognition.start();
            listenButton.style.display = 'inline-block'; // Show the "Listen" button for each round
        } else {
            showFinalScore();
        }
    }

    recognition.onresult = function (event) {
        const spokenTwister = event.results[0][0].transcript.trim().toLowerCase();
        totalCount++;

        if (spokenTwister === currentTwister.toLowerCase()) {
            correctCount++;
            resultElement.textContent = `Correct! Score: ${correctCount}/${totalCount}`;
        } else {
            resultElement.textContent = `Incorrect! You said "${spokenTwister}". Score: ${correctCount}/${totalCount}`;
        }

        recognition.stop();
        nextRound();
    };

    recognition.onerror = function (event) {
        resultElement.textContent = `Error occurred in recognition: ${event.error}`;
    };

    recognition.onspeechend = function () {
        recognition.stop();
    };

    // Start the first round
    nextRound();
}

// Show the final score
function showFinalScore() {
    promptElement.textContent = "Game Over!";
    finalScoreElement.textContent = `Final Score: ${correctCount}/${maxPrompts}`;
    resultElement.textContent = "";
    listenButton.style.display = 'none'; // Hide the "Listen" button when the game is over
}

// Event listener for the start button
startButton.addEventListener('click', () => {
    correctCount = 0;
    totalCount = 0;
    resultElement.textContent = '';
    finalScoreElement.textContent = '';
    startSpeechRecognition();
});

// Event listener for the listen button to play the correct pronunciation
listenButton.addEventListener('click', () => {
    playPronunciation(currentTwister);
});
