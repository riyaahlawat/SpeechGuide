function submitForm(event, formType) {
    event.preventDefault(); // Prevent form submission

    if (formType === 'login') {
        // Redirect to a different page after login
        window.location.href = './dashboard.html'; // Change this to your target page
    } else if (formType === 'register') {
        // Handle registration (you can redirect or perform other actions)
        alert('Registration successful!');
        window.location.href = './welcome.html'; // Example registration success page
    }
}

function toggleForm(formType) {
    const loginContainer = document.getElementById('login');
    const registerContainer = document.getElementById('register');

    if (formType === 'login') {
        loginContainer.style.display = 'block';
        registerContainer.style.display = 'none';
    } else if (formType === 'register') {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    }
}

// Function for back button
function goBack() {
    window.history.back();
}
// Store the selected role (patient, therapist, or supervisor) in localStorage
function storeRole(role) {
    localStorage.setItem('userRole', role);
}
// Handle form submission for login
function submitForm(event) {
    event.preventDefault(); // Prevent form submission to the server
    
    // Retrieve the user role from localStorage
    const userRole = localStorage.getItem('userRole');
    
    // Redirect the user based on their role
    if (userRole === 'patient') {
        window.location.href = 'homepatients.html'; // Redirect to Patient Dashboard
    } else if (userRole === 'therapist') {
        window.location.href = "therapists_dashboard.html"; // Redirect to Therapist Dashboard
    } else if (userRole === 'supervisor') {
        window.location.href = 'supervisor-home.html'; // Redirect to Supervisor Dashboard
    } else {
        // If no role is found, redirect to a default page or show an error
        window.location.href = 'error.html'; // Optional: error handling
    }
}
