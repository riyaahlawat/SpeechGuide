const therapistData = {
    therapist1: {
      completedSessions: 8,
      pendingSessions: 2,
      therapyHours: '12 hours',
      completionRate: '80%',
      recentActivity: [
        'Session 8 completed on 15th September 2024',
        'Session 7 completed on 12th September 2024'
      ],
      pendingReports: [
        'Submit progress report for Session 9 (Due: 20th September 2024)',
        'Review feedback for Session 7'
      ]
    },
    therapist2: {
      completedSessions: 10,
      pendingSessions: 1,
      therapyHours: '15 hours',
      completionRate: '90%',
      recentActivity: [
        'Session 10 completed on 14th September 2024',
        'Session 9 completed on 10th September 2024'
      ],
      pendingReports: [
        'Submit progress report for Session 11 (Due: 22nd September 2024)'
      ]
    },
    therapist3: {
      completedSessions: 5,
      pendingSessions: 3,
      therapyHours: '8 hours',
      completionRate: '60%',
      recentActivity: [
        'Session 5 completed on 10th September 2024',
        'Session 4 completed on 5th September 2024'
      ],
      pendingReports: [
        'Submit progress report for Session 6 (Due: 20th September 2024)'
      ]
    }
  };
  
  function updateTherapistData() {
    const selectedTherapist = document.getElementById('doctor-select').value;
  
    document.getElementById('completed-sessions').innerText = therapistData[selectedTherapist].completedSessions;
    document.getElementById('pending-sessions').innerText = therapistData[selectedTherapist].pendingSessions;
    document.getElementById('therapy-hours').innerText = therapistData[selectedTherapist].therapyHours;
    document.getElementById('completion-rate').innerText = therapistData[selectedTherapist].completionRate;
  
    const recentActivityList = document.getElementById('recent-activity-list');
    recentActivityList.innerHTML = '';
    therapistData[selectedTherapist].recentActivity.forEach(activity => {
      const listItem = document.createElement('li');
      listItem.textContent = activity;
      recentActivityList.appendChild(listItem);
    });
  
    const pendingReportsList = document.getElementById('pending-reports-list');
    pendingReportsList.innerHTML = '';
    therapistData[selectedTherapist].pendingReports.forEach(report => {
      const listItem = document.createElement('li');
      listItem.textContent = report;
      pendingReportsList.appendChild(listItem);
    });
  }
  