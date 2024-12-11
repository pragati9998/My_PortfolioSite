// Select the button and body
const toggleBtn = document.getElementById('toggle-dark-mode');
const body = document.body;

// Add an event listener to toggle dark mode when the button is clicked
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');  // Toggle the dark-mode class
    // Change the button icon based on the current mode
    toggleBtn.textContent = body.classList.contains('dark-mode') ? '🌞' : '🌙';
});
