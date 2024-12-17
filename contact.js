// Initialize EmailJS with your public key
(function() {
    emailjs.init("TZoj-pabIy4yeOcQ7"); // Replace with your public key from EmailJS
})();

// Get the form and submit button
const form = document.getElementById('contact-form');
const submitButton = document.getElementById('submit-btn');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Disable the button to prevent multiple submissions
    submitButton.disabled = true;
    submitButton.innerText = "Sending...";

    // Define EmailJS service and template IDs
    const serviceID = 'service_anf7chi';  // Replace with your service ID
    const templateID = 'template_d4ug05s'; // Replace with your template ID

    // Send the form data using EmailJS
    emailjs.sendForm(serviceID, templateID, form)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('form-status').innerText = "Message sent successfully!";
            form.reset(); // Reset the form after successful submission
            submitButton.innerText = "Send Message";
            submitButton.disabled = false;
        }, function(error) {
            console.error('FAILED...', error);
            document.getElementById('form-status').innerText = "Failed to send message. Please try again.";
            submitButton.innerText = "Send Message";
            submitButton.disabled = false;
        });
});
