// Wait for the DOM to completely load
document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-links a, .hero-cta a');
    const navPill = document.getElementById('nav-pill');
    const mobileMenuBtn = document.getElementById('mobile-menu');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            // Only perform custom smooth scroll if targeting an internal ID section
            if (targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }

            // Close the mobile menu after a link is clicked
            if (navPill && navPill.classList.contains('active')) {
                navPill.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');

                const menuIcon = mobileMenuBtn.querySelector('i');
                if (menuIcon) {
                    menuIcon.classList.add('fa-bars');
                    menuIcon.classList.remove('fa-times');
                }
            }
        });
    });

    // 2. Mobile Menu Toggle
    if (mobileMenuBtn && navPill) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = navPill.classList.toggle('active');
            mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));

            const menuIcon = mobileMenuBtn.querySelector('i');
            if (menuIcon) {
                menuIcon.classList.toggle('fa-bars', !isOpen);
                menuIcon.classList.toggle('fa-times', isOpen);
            }
        });
    }

    // 3. Contact Form Handler — sends submissions to a Google Form
    //
    // SETUP REQUIRED — this will NOT work until you plug in your own values:
    //   1. Create a Google Form with 3 short-answer questions: Name, Email, Message.
    //   2. Open the live form, right-click -> "View Page Source" (or open dev tools),
    //      and search for "entry." — you'll find three IDs like entry.123456789,
    //      one per question. Copy them into the three lines below.
    //   3. Get the submission URL: take your form's normal share link, e.g.
    //      https://docs.google.com/forms/d/e/XXXXXXXX/viewform
    //      and change "viewform" at the end to "formResponse". Paste that as
    //      GOOGLE_FORM_URL below.
    //   4. Responses will land in the linked Google Sheet (Responses tab -> green
    //      sheet icon) or in the form's own "Responses" tab.
    //
    // Until you do this, the placeholders below will safely fail silently
    // rather than send data anywhere.
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdwYzgK_Ns6CTh-tTnEB3XTRzBeMBK1j_MoBsUzEJcx7C4rAQ/formResponse"; // .../formResponse
        const FIELD_IDS = {
            name: "entry.355204745",       // e.g. entry.123456789
            email: "entry.2044133355",     // e.g. entry.987654321
            message: "entry.666904480"  // e.g. entry.456789123
        };

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const isConfigured = GOOGLE_FORM_URL.startsWith('https://')
                && Object.values(FIELD_IDS).every(id => id.startsWith('entry.'));

            const submitBtn = document.getElementById('submit-btn');
            const nameInput = document.getElementById('form-name');
            const emailInput = document.getElementById('form-email');
            const messageInput = document.getElementById('form-message');

            if (!isConfigured) {
                console.warn(
                    'Contact form is not connected yet. Add your Google Form URL and entry IDs in script.js (see comments above).'
                );
                alert('Thanks! (Note: form submission isn\'t connected yet — see script.js setup notes.)');
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

            // "no-cors" mode means we can't read the response, so success/failure
            // here really only reflects whether the network request went out.
            fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            })
                .then(() => {
                    alert('Thank you for reaching out! Your message has been sent.');
                    contactForm.reset();
                })
                .catch((error) => {
                    console.error('Contact form submission error:', error);
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

    // 4. Navbar background toggle on scroll (throttled via requestAnimationFrame)
    const navbar = document.querySelector('.navbar');
    let ticking = false;

    function updateNavbar() {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });

    // 5. Sliding nav indicator + scroll-spy
    const sections = document.querySelectorAll('main section[id]');
    const sectionNavLinks = document.querySelectorAll('.nav-links a[data-section]');
    const indicator = document.getElementById('nav-indicator');

    let activeLink = null;   // link matching the section currently in view
    let isHovering = false;

    function placeIndicator(link) {
        if (!indicator) return;

        if (!link) {
            indicator.style.opacity = '0';
            return;
        }

        const pillRect = navPill.getBoundingClientRect();
        const linkRect = link.getBoundingClientRect();

        indicator.style.width = `${linkRect.width}px`;
        indicator.style.left = `${linkRect.left - pillRect.left}px`;
        indicator.style.opacity = '1';
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
        });

        navPill.addEventListener('mouseleave', () => {
            isHovering = false;
            placeIndicator(activeLink);
            setTextState(activeLink);
        });

        window.addEventListener('resize', () => {
            if (!isHovering) placeIndicator(activeLink);
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
            rootMargin: '-45% 0px -45% 0px', // triggers when section is near vertical center
            threshold: 0
        });

        sections.forEach(section => observer.observe(section));
    }

    // 6. Auto-update footer year
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});

