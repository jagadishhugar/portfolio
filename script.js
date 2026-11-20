document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.querySelector('.navbar');
    const navPill = document.getElementById('nav-pill');
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuBtn ? mobileMenuBtn.querySelector('i') : null;
    const navLinks = document.querySelectorAll('.nav-links a, .hero-cta a');
    const sectionNavLinks = document.querySelectorAll('.nav-links a[data-section]');
    const sections = document.querySelectorAll('main section[id]');
    const indicator = document.getElementById('nav-indicator');
    const contactForm = document.getElementById('contact-form');
    const yearEl = document.getElementById('current-year');

    // 1. Mobile Menu Toggle
    function setMobileMenu(isOpen) {
        if (!navPill || !mobileMenuBtn) return;
        navPill.classList.toggle('active', isOpen);
        mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
        if (menuIcon) {
            menuIcon.classList.toggle('fa-bars', !isOpen);
            menuIcon.classList.toggle('fa-times', isOpen);
        }
    }

    if (mobileMenuBtn && navPill) {
        mobileMenuBtn.addEventListener('click', () => {
            setMobileMenu(!navPill.classList.contains('active'));
        });
    }

    // 2. Smooth Scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }

            if (navPill && navPill.classList.contains('active')) {
                setMobileMenu(false);
            }
        });
    });

    // 3. Contact Form Submission
    if (contactForm) {
        const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdwYzgK_Ns6CTh-tTnEB3XTRzBeMBK1j_MoBsUzEJcx7C4rAQ/formResponse";
        const FIELD_IDS = {
            name: "entry.355204745",
            email: "entry.2044133355",
            message: "entry.666904480"
        };
        const isConfigured = GOOGLE_FORM_URL.startsWith('https://')
            && Object.values(FIELD_IDS).every(id => id.startsWith('entry.'));

        const submitBtn = document.getElementById('submit-btn');
        const nameInput = document.getElementById('form-name');
        const emailInput = document.getElementById('form-email');
        const messageInput = document.getElementById('form-message');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!isConfigured) {
                alert("Contact form is not configured yet.");
                contactForm.reset();
                return;
            }

            if (submitBtn) {
                submitBtn.innerText = 'Sending...';
                submitBtn.disabled = true;
            }

            const formData = new FormData();
            formData.append(FIELD_IDS.name, nameInput.value);
            formData.append(FIELD_IDS.email, emailInput.value);
            formData.append(FIELD_IDS.message, messageInput.value);

            fetch(GOOGLE_FORM_URL, { method: 'POST', mode: 'no-cors', body: formData })
                .then(() => {
                    alert('Thank you for reaching out! Your message has been sent.');
                    contactForm.reset();
                })
                .catch((error) => {
                    console.error('Submission error:', error);
                    alert('Something went wrong. Please check your connection and try again.');
                })
                .finally(() => {
                    if (submitBtn) {
                        submitBtn.innerText = 'Send Message';
                        submitBtn.disabled = false;
                    }
                });
        });
    }

    // 4. Navbar Background Update
    let scrollTicking = false;
    function updateNavbar() {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        scrollTicking = false;
    }

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (!scrollTicking) {
                window.requestAnimationFrame(updateNavbar);
                scrollTicking = true;
            }
        }, { passive: true });
    }

    // 5. Sliding Indicator & Scroll Spy
    let activeLink = null;
    let isHovering = false;

    function placeIndicator(link) {
        if (!indicator) return;

        if (!link) {
            indicator.style.opacity = '0';
            return;
        }

        window.requestAnimationFrame(() => {
            const pillRect = navPill.getBoundingClientRect();
            const linkRect = link.getBoundingClientRect();

            indicator.style.width = `${linkRect.width}px`;
            indicator.style.left = `${linkRect.left - pillRect.left}px`;
            indicator.style.opacity = '1';
        });
    }

    function setTextState(link) {
        sectionNavLinks.forEach(l => l.classList.remove('on-indicator'));
        if (link) link.classList.add('on-indicator');
    }

    if (indicator && navPill) {
        sectionNavLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                isHovering = true;
                placeIndicator(link);
                setTextState(link);
            });
            link.addEventListener('focus', () => {
                isHovering = true;
                placeIndicator(link);
                setTextState(link);
            });
        });

        navPill.addEventListener('mouseleave', () => {
            isHovering = false;
            placeIndicator(activeLink);
            setTextState(activeLink);
        });

        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (!isHovering) placeIndicator(activeLink);
            }, 100);
        });
    }

    if (sections.length && sectionNavLinks.length && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    activeLink = document.querySelector(`.nav-links a[data-section="${id}"]`) || null;

                    if (!isHovering) {
                        placeIndicator(activeLink);
                        setTextState(activeLink);
                    }
                }
            });
        }, {
            rootMargin: '-45% 0px -45% 0px',
            threshold: 0
        });

        sections.forEach(section => observer.observe(section));
    }

    // 6. Dynamic Footer Year
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});