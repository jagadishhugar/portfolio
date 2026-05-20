document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Drawer Navigation Logic
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        // Toggle slide-out screen when clicking the menu bar icon
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Morph the fontawesome icon class between bars and an X mark
            const menuIcon = mobileMenu.querySelector('i');
            if (menuIcon) {
                menuIcon.classList.toggle('fa-bars');
                menuIcon.classList.toggle('fa-times');
            }
        });
        
        // Automatically slide away the panel whenever a menu link is tapped
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                
                const menuIcon = mobileMenu.querySelector('i');
                if (menuIcon) {
                    menuIcon.classList.add('fa-bars');
                    menuIcon.classList.remove('fa-times');
                }
            });
        });
    }

    // Google Form Background Submission Pipeline
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submit-btn');
            if (submitBtn) {
                submitBtn.innerText = "Sending...";
                submitBtn.disabled = true;
            }

            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const message = document.getElementById('form-message').value;

            const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdwYzgK_Ns6CTh-tTnEB3XTRzBeMBK1j_MoBsUzEJcx7C4rAQ/formResponse";
            
            const formData = new FormData();
            formData.append("entry.355204745", name);
            formData.append("entry.2044133355", email);
            formData.append("entry.666904480", message);

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
                console.error("Pipeline Transmission Error:", error);
                alert("Something went wrong. Please check your network connection.");
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.innerText = "Send Message";
                    submitBtn.disabled = false;
                }
            });
        });
    }
});
