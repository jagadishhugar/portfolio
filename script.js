document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Navigation Dropdown Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Google Form Background Data Pipeline Engine
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submit-btn');
            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;

            // Reading element values securely via structural HTML IDs
            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const message = document.getElementById('form-message').value;

            const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdwYzgK_Ns6CTh-tTnEB3XTRzBeMBK1j_MoBsUzEJcx7C4rAQ/formResponse";
            
            const formData = new FormData();
            formData.append("entry.355204745", name);
            formData.append("entry.2044133355", email);
            formData.append("entry.666904480", message);

            // Transmitting payload packets natively via silent AJAX fetch hooks
            fetch(GOOGLE_FORM_URL, {
                method: "POST",
                mode: "no-cors",
                body: formData
            })
            .then(() => {
                alert("Message sent successfully!");
                contactForm.reset();
            })
            .catch((error) => {
                console.error("Transmission Pipeline Error:", error);
                alert("Something went wrong. Please check your network connection.");
            })
            .finally(() => {
                submitBtn.innerText = "Send Message";
                submitBtn.disabled = false;
            });
        });
    }
});
