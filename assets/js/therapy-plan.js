function loadTherapyPlans() {
    const planList = document.getElementById('therapy-plan-list');
    therapyPlans.forEach(plan => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${plan.id}</td>
        <td>${plan.therapist}</td>
        <td>${plan.status}</td>
        <td><button>View</button></td>
      `;
      planList.appendChild(row);
    });
  }
  
  document.addEventListener('DOMContentLoaded', loadTherapyPlans);
  