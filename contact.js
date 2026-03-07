document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Email only on click
    const emailLink = document.getElementById('secure-email-link');
    emailLink.addEventListener('click', function(e) {
        e.preventDefault();
        const user = "totchris786";
        const domain = "gmail.com";
        const fullEmail = user + "@" + domain;
        
        this.href = "mailto:" + fullEmail;
        this.textContent = fullEmail; // Displays your email to the user
        window.location.href = this.href;
    });

    // 2. Button feedback
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function() {
            const btn = document.getElementById('submit-btn');
            btn.innerText = "Sending...";
            btn.style.opacity = "0.7";
        });
    }
});
