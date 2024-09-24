function initCharts() {
    // Line Chart for Therapy Progress
    new Chart(document.getElementById('therapyProgress'), { // Matched with HTML
        type: 'line',
        data: {
            labels: ['Session 1', 'Session 2', 'Session 3', 'Session 4'],
            datasets: [{
                label: 'Therapy Progress (%)',
                data: [25, 50, 70, 85],
                fill: false,
                borderColor: '#0077cc',
                backgroundColor: 'rgba(0, 119, 204, 0.3)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Bar Chart for Session Performance
    new Chart(document.getElementById('sessionPerformance'), { // Matched with HTML
        type: 'bar',
        data: {
            labels: ['Session 1', 'Session 2', 'Session 3', 'Session 4'],
            datasets: [{
                label: 'Performance Score',
                data: [60, 75, 85, 90],
                backgroundColor: '#34a0a4',
                borderColor: '#0077cc',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Pie Chart for Goal Completion
    new Chart(document.getElementById('goalCompletion'), { // Matched with HTML
        type: 'pie',
        data: {
            labels: ['Completed', 'In Progress', 'Pending'],
            datasets: [{
                data: [70, 20, 10],
                backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true
        }
    });

    // Line Chart for Speech Patterns
    new Chart(document.getElementById('speechPatterns'), { // Matched with HTML
        type: 'line',
        data: {
            labels: ['Session 1', 'Session 2', 'Session 3', 'Session 4'],
            datasets: [{
                label: 'Speech Improvement (%)',
                data: [30, 45, 60, 80],
                fill: false,
                borderColor: '#ff5722',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Bar Chart for Rating Distribution
    new Chart(document.getElementById('ratingDistribution'), { // Matched with HTML
        type: 'bar',
        data: {
            labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
            datasets: [{
                label: 'Ratings Count',
                data: [2, 1, 4, 8, 15],
                backgroundColor: ['#f44336', '#ff9800', '#ffeb3b', '#8bc34a', '#4caf50'],
                borderColor: '#0077cc',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

function updateStreak() {
    const streakCount = 15;  
    const lastMissedSession = 'August 25, 2024';  

    // Update the streak card content
    document.getElementById('streakCount').textContent = streakCount;
    document.getElementById('lastMissedSession').textContent = lastMissedSession;
}

// Call the function to update streak when the page loads
updateStreak();

// Bar Chart for Verbal Exercise Completion (added back)
const verbalExerciseBarChart = new Chart(document.getElementById('verbalExerciseBarChart'), {
    type: 'bar',
    data: {
        labels: ['Pronunciation Practice', 'Sentence Formation', 'Fluency Test','Accuracy Check','Word Recall'],
        datasets: [{
            label: 'Completion Percentage',
            data: [75, 60, 50,83,22],
            backgroundColor: ['#34a0a4', '#ffeb3b', '#f44336','#f44289','#0000FF'],
            borderColor: ['#004b6e', '#ff9800', '#f44336','#ff9800'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Event listener to update the bar chart based on the dropdown selection
document.getElementById('exerciseDropdown').addEventListener('change', function(event) {
    const selectedExercise = event.target.value;
    if (selectedExercise === 'exercise1') {
        verbalExerciseBarChart.data.datasets[0].data = [75];
        verbalExerciseBarChart.data.labels = ['Pronunciation Practice'];
    } else if (selectedExercise === 'exercise2') {
        verbalExerciseBarChart.data.datasets[0].data = [60];
        verbalExerciseBarChart.data.labels = ['Sentence Formation'];
    } else if (selectedExercise === 'exercise3') {
        verbalExerciseBarChart.data.datasets[0].data = [50];
        verbalExerciseBarChart.data.labels = ['Fluency Test'];
    }
    verbalExerciseBarChart.update();
});


window.onload = initCharts;