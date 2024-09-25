function submitRating(event) {
    event.preventDefault(); 
    
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;
    
    if (rating < 1 || rating > 5) {
      alert('Please provide a rating between 1 and 5.');
      return;
    }
    
    alert(`Rating submitted: ${rating}\nComments: ${comments}`);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rating-form');
    form.addEventListener('submit', submitRating);
  });
  