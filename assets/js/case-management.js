document.addEventListener("DOMContentLoaded", function() {
    const cases = [
      { id: "P001", name: "Raman Gupta", therapist: "Dr. Amit", status: "In Progress" },
      { id: "P002", name: "Seema Jain", therapist: "Dr. Rakesh", status: "Completed" },
      { id: "P003", name: "Gaurav A", therapist: "Dr. Riya", status: "Pending" },
      { id: "P004", name: "Nishant Shah", therapist: "Dr. Madhav", status: "In Progress" },
      { id: "P005", name: "Mitali Garg", therapist: "Dr. Tarun", status: "Pending" }
    ];
  
    const caseList = document.getElementById("case-list");
  
    cases.forEach(caseInfo => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${caseInfo.id}</td>
        <td>${caseInfo.name}</td>
        <td>${caseInfo.therapist}</td>
        <td>${caseInfo.status}</td>
        <td>
          <button onclick="viewDetails('${caseInfo.id}')">View Details</button>
          <button onclick="addComments('${caseInfo.id}')">Add Comments</button>
        </td>
      `;
      caseList.appendChild(row);
    });
  });
  