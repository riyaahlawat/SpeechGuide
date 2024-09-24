// JavaScript to handle dynamic updates for the progress bar and streak system

// Progress Bar Logic
function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    let progress = 75; // Replace with dynamic value from server if needed
  
    // Update progress bar width and text
    progressBar.style.width = `${progress}%`;
    progressBar.innerHTML = `${progress}%`;
  }
  
  // Streak Box Activation Logic
  function activateStreakBoxes() {
    const streakBoxes = document.querySelectorAll('.streak-box');
    
    // Example: Activate first 5 streak boxes
    const streakCount = 5; // This can be dynamic based on user data
    
    for (let i = 0; i < streakCount; i++) {
      streakBoxes[i].classList.add('active');
    }
  }
  
  // Execute functions on page load
  window.onload = function() {
    updateProgressBar();
    activateStreakBoxes();
  };
  