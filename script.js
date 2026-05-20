document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. FLUID PILL LAYOUT SLIDER ENGINE
    // ==========================================================================
    const navbar = document.querySelector('.navbar-pill');
    const items = document.querySelectorAll('.nav-item');
    const indicator = document.getElementById('indicator');

    function moveIndicator(element) {
        if (window.innerWidth <= 768 || !indicator || !navbar) return;

        const navbarRect = navbar.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();

        // Calculate location positions inside the white base container
        const leftPos = elementRect.left - navbarRect.left;
        
        indicator.style.left = `${leftPos}px`;
        indicator.style.width = `${elementRect.width}px`;
    }

    let currentActiveItem = document.querySelector('.nav-item.active');
    
    // Smooth layout calculation timeout
    setTimeout(() => {
        if (currentActiveItem && window.innerWidth > 768) {
            moveIndicator(currentActiveItem);
        }
    }, 150);

    items.forEach(item => {
        // Hover element tracking controls
        item.addEventListener('mouseenter', (e) => {
            if (window.innerWidth <= 768) return;
            items.forEach(i => i.classList.remove('active', 'hovered'));
            e.target.classList.add('hovered');
            moveIndicator(e.target);
        });

        // Hover container escape reset controls
        item.addEventListener('mouseleave', () => {
            if (window.innerWidth <= 768) return;
            items.forEach(i => i.classList.remove('hovered'));
            if (currentActiveItem) {
                currentActiveItem.classList.add('active');
                moveIndicator(currentActiveItem);
            }
        });
        
        // Final section link update routing
        item.addEventListener('click', (e) => {
            items.forEach(i => i.classList.remove('active'));
            e.target.classList.add('active');
            currentActiveItem = e.target;
            
            if (window.innerWidth > 768) {
                moveIndicator(currentActiveItem);
            } else {
                if (navbar) navbar.classList.remove('active');
                const menuIcon = document.querySelector('#mobile-menu i');
                if (menuIcon) {
                    menuIcon.classList.add('fa-bars');
                    menuIcon.classList.remove('fa-times');
                }
            }
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && currentActiveItem) {
            indicator.style.display = "block";
            moveIndicator(currentActiveItem);
        } else if (indicator) {
            indicator.style.display = "none";
        }
    });

    // ==========================================================================
    // 2. RESPONSIVE MOBILE SIDEMENU ENGINE
    // ==========================================================================
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenu && navbar) {
        mobileMenu.addEventListener('click', () => {
            navbar.classList.toggle('active');
            
            const menuIcon = mobileMenu.querySelector('i');
            if (menuIcon) {
                menuIcon.classList.toggle('fa-bars');
                menuIcon.classList.toggle('fa-times');
            }
        });
    }

    // ==========================================================================
    // 3. SECURE DATA PIPELINE (GOOGLE FORMS API ENGINE)
    // ==========================================================================
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
