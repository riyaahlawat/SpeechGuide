function generateReport() {
    alert('Generating detailed report...');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.querySelector('button[onclick="generateReport()"]');
    generateButton.addEventListener('click', generateReport);
  });
  