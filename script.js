document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. DYNAMIC SLIDING PILL NAVIGATION LOGIC ENGINE
    // ==========================================================================
    const navbar = document.querySelector('.navbar-pill');
    const items = document.querySelectorAll('.nav-item');
    const indicator = document.getElementById('indicator');

    function moveIndicator(element) {
        // Prevent layout calculation bugs if the menu is closed/hidden on mobile viewports
        if (window.innerWidth <= 768 || !indicator || !navbar) return;

        const navbarRect = navbar.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();

        // Calculate explicit exact pixel horizontal offset parameters relative to the pill frame
        const leftPos = elementRect.left - navbarRect.left;
        
        indicator.style.left = `${leftPos}px`;
        indicator.style.width = `${elementRect.width}px`;
    }

    // Capture standard initialization active target layer (ABOUT) on initial pipeline launch
    let currentActiveItem = document.querySelector('.nav-item.active');
    
    // Delayed initialization guarantees viewport layout bounds have completely rendered
    setTimeout(() => {
        if (currentActiveItem && window.innerWidth > 768) {
            moveIndicator(currentActiveItem);
        }
    }, 150);

    // Track state variations across the responsive link arrays
    items.forEach(item => {
        // Event Loop A: Mouse Hover Enter Action Link Tracking
        item.addEventListener('mouseenter', (e) => {
            if (window.innerWidth <= 768) return;
            items.forEach(i => i.classList.remove('active', 'hovered'));
            e.target.classList.add('hovered');
            moveIndicator(e.target);
        });

        // Event Loop B: Mouse Hover Boundary Drop Restoration
        item.addEventListener('mouseleave', () => {
            if (window.innerWidth <= 768) return;
            items.forEach(i => i.classList.remove('hovered'));
            if (currentActiveItem) {
                currentActiveItem.classList.add('active');
                moveIndicator(currentActiveItem);
            }
        });
        
        // Event Loop C: Component Selection Target Override Updates
        item.addEventListener('click', (e) => {
            items.forEach(i => i.classList.remove('active'));
            e.target.classList.add('active');
            currentActiveItem = e.target;
            
            if (window.innerWidth > 768) {
                moveIndicator(currentActiveItem);
            } else {
                // Instantly collapse the mobile drawer view matrix panel when selecting links
                if (navbar) navbar.classList.remove('active');
                const menuIcon = document.querySelector('#mobile-menu i');
                if (menuIcon) {
                    menuIcon.classList.add('fa-bars');
                    menuIcon.classList.remove('fa-times');
                }
            }
        });
    });

    // Re-verify positions seamlessly if browser display boundaries scale dynamically
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && currentActiveItem) {
            indicator.style.display = "block";
            moveIndicator(currentActiveItem);
        } else if (indicator) {
            indicator.style.display = "none";
        }
    });

    // ==========================================================================
    // 2. MOBILE SIDEBAR DRAWER PANEL STATE LOGIC
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
    // 3. GOOGLE FORM DISPATCH TRANSMISSION PIPELINE
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
