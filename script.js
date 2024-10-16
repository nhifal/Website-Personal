document.addEventListener('DOMContentLoaded', function() {
    // Handle Buy Now button clicks
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for your interest! The functionality for purchasing is coming soon.');
        });
    });

    // Handle Read More button clicks
    document.querySelectorAll('.btn-outline-primary').forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for your interest in our blog! You will be redirected to the full article soon.');
        });
    });

    // Navigation to different sections
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form submission
    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;

        if (name && email && message) {
            alert('Thank you for reaching out, ' + name + '! We will get back to you shortly.');
            // Here you can add code to send form data to your server
            this.reset(); // Reset the form fields
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
});
