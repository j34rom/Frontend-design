document.getElementById('passwordForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const password = document.getElementById('password').value;
  const correctPassword = "barangay123"; // change this to whatever password you want

  if (password === correctPassword) {
    window.location.href = "portal.html"; // the reports page you'll build next
  } else {
    alert("Incorrect password. Please try again.");
  }
});