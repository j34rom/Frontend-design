// 1. Select the form element and confirmation container
const enrollmentForm = document.getElementById('enrollmentForm');

// 2. Create a container dynamically to display the results if it doesn't exist
let confirmationMessage = document.getElementById('confirmationMessage');
if (!confirmationMessage) {
    confirmationMessage = document.createElement('div');
    confirmationMessage.id = 'confirmationMessage';
    enrollmentForm.parentNode.insertBefore(confirmationMessage, enrollmentForm.nextSibling);
}

// 3. Listen for the form submission event
enrollmentForm.addEventListener('submit', function(event) {
    // Prevent the default browser action (reloading the page)
    event.preventDefault();

    // Read user inputs from the form fields
    const studentName = document.getElementById('nameForm').value;
    const studentAge = document.getElementById('ageForm').value;
    const studentAddress = document.getElementById('addressForm').value;
    const studentStatus = document.getElementById('civilstatusForm').value;

    // Build an HTML summary card with the captured data
    confirmationMessage.innerHTML = `
        <div class="summary-card">
            <h3>Enrollment Submitted Successfully!</h3>
            <p><strong>Name:</strong> ${studentName}</p>
            <p><strong>Age:</strong> ${studentAge}</p>
            <p><strong>Address:</strong> ${studentAddress}</p>
            <p><strong>Civil Status:</strong> ${studentStatus}</p>
        </div>
    `;

    // Clear all form inputs after submission
    enrollmentForm.reset();
});
