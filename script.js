// Select the button and body
const toggleBtn = document.getElementById('toggle-dark-mode');
const body = document.body;

// Add an event listener to toggle dark mode when the button is clicked
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');  // Toggle the dark-mode class
    // Change the button icon based on the current mode
    toggleBtn.textContent = body.classList.contains('dark-mode') ? '🌞' : '🌙';
});



 // JavaScript for scroll functionality
        var backToTopButton = document.getElementById("backToTop");

        // Show the button when the user scrolls down 100px
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        };

        // Function to scroll back to the top smoothly
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }