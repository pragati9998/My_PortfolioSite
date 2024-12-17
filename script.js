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


(function () {
            // Initialize EmailJS with your Public Key
            emailjs.init("TZoj-pabIy4yeOcQ7");
        })();

        document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form's default behavior

            // Form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Send email using EmailJS
            emailjs.send('service_anf7chi', 'template_d4ug05s', formData)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    document.getElementById('form-status').innerText = "Message sent successfully!";
                }, function (error) {
                    console.error('FAILED...', error);
                    document.getElementById('form-status').innerText = "Failed to send message. Please try again.";
                });
        });