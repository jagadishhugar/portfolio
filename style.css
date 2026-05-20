/* ==========================================================================
   1. GLOBAL VARIABLES & RESET MATRIX
   ========================================================================== */
:root {
    --bg-dark: #0a192f;        
    --bg-light-dark: #112240;  
    --text-light: #ccd6f6;     
    --text-white: #ffffff;     
    --accent: #64ffda;         
    --transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-light);
    font-family: 'Inter', 'Segoe UI', sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
    padding-top: 90px; 
}

.accent {
    color: var(--accent);
}

/* ==========================================================================
   2. SCREEN FLOATING BLACK SLIDING PILL NAVBAR STYLE
   ========================================================================== */
.navbar-global {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(10, 25, 47, 0.85);
    backdrop-filter: blur(12px);
    z-index: 1000;
    border-bottom: 1px solid rgba(100, 255, 218, 0.08);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-white);
    text-decoration: none;
    letter-spacing: 1px;
}

/* Main capsule frame base */
.navbar-pill {
    position: relative;
    display: flex;
    align-items: center;
    background-color: #ffffff; /* Matches white container from your screenshot */
    padding: 8px;
    border-radius: 50px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    z-index: 1;
}

/* Links inside pill */
.nav-item {
    position: relative;
    text-decoration: none;
    color: #000000; /* Dark text matching screenshot base state */
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.5px;
    padding: 14px 28px;
    border-radius: 40px;
    z-index: 3; /* Elevated above background slider */
    transition: color 0.3s ease;
}

/* White active text tracking rule */
.nav-item.active,
.nav-item.hovered {
    color: #ffffff !important; /* Turns white over active black pill backgrounds */
}

/* Sliding pill background tracker */
.nav-indicator {
    position: absolute;
    background-color: #000000; /* Matches the black active pill from screenshot */
    border-radius: 40px;
    top: 8px;
    left: 8px;
    height: calc(100% - 16px);
    width: 0;
    z-index: 2;
    transition: var(--transition); 
}

.menu-toggle {
    display: none;
    color: var(--accent);
    font-size: 1.6rem;
    cursor: pointer;
}

/* ==========================================================================
   3. HERO BLOCK PRESENTATION
   ========================================================================== */
.hero {
    min-height: calc(85vh - 90px);
    display: flex;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 40px;
}

.hero-subtitle {
    color: var(--accent);
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: 20px;
    letter-spacing: 1px;
}

.hero-title {
    color: var(--text-white);
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 1.1;
}

.hero-slug {
    color: #8892b0;
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 25px;
}

.hero-description {
    max-width: 600px;
    margin-bottom: 45px;
    font-size: 1.1rem;
}

.hero-cta {
    display: flex;
    gap: 20px;
}

.btn {
    display: inline-block;
    padding: 14px 28px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    transition: var(--transition);
}

.btn-primary {
    background-color: transparent;
    color: var(--accent);
    border: 1px solid var(--accent);
}

.btn-primary:hover {
    background-color: rgba(100, 255, 218, 0.1);
}

.btn-secondary {
    background-color: rgba(100, 255, 218, 0.05);
    color: var(--text-white);
    border: 1px solid transparent;
}

.btn-secondary:hover {
    color: var(--accent);
}

/* ==========================================================================
   4. CONTENT LAYOUT BLOCKS
   ========================================================================== */
.section {
    padding: 100px 40px;
    max-width: 1100px;
    margin: 0 auto;
}

.bg-light {
    background-color: rgba(17, 34, 64, 0.3);
}

.section-title {
    font-size: 2rem;
    font-weight: 600;
    color: var(--text-white);
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    gap: 15px;
}

.section-title::after {
    content: "";
    display: block;
    height: 1px;
    width: 250px;
    background-color: rgba(204, 214, 246, 0.1);
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    max-width: 800px;
}

.about-text p {
    margin-bottom: 20px;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.skills-category {
    background-color: var(--bg-light-dark);
    padding: 30px;
    border-radius: 6px;
    border: 1px solid rgba(100, 255, 218, 0.03);
}

.skills-category h3 {
    color: var(--text-white);
    font-size: 1.2rem;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.skill-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.chip {
    background-color: rgba(10, 25, 47, 0.5);
    color: var(--accent);
    padding: 6px 14px;
    border-radius: 4px;
    font-size: 0.85rem;
    border: 1px solid rgba(100, 255, 218, 0.05);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
}

.project-card {
    background-color: var(--bg-light-dark);
    border-radius: 6px;
    padding: 30px;
    transition: var(--transition);
    border: 1px solid rgba(100, 255, 218, 0.02);
    display: flex;
}

.project-card:hover {
    transform: translateY(-6px);
    border-color: rgba(100, 255, 218, 0.15);
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
}

.project-content {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.project-icon {
    color: var(--accent);
    font-size: 2rem;
    margin-bottom: 20px;
}

.project-card h3 {
    color: var(--text-white);
    font-size: 1.3rem;
    margin-bottom: 12px;
}

.project-card p {
    font-size: 0.95rem;
    margin-bottom: 20px;
    color: #a8b2d1;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: auto;
    margin-bottom: 20px;
}

.project-tags span {
    font-size: 0.75rem;
    letter-spacing: 0.5px;
    color: #8892b0;
}

.project-links a {
    color: var(--text-white);
    text-decoration: none;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: var(--transition);
}

.project-links a:hover {
    color: var(--accent);
}

/* ==========================================================================
   5. ASYNC CONTACT PIPE FORMS
   ========================================================================== */
.contact-subtitle {
    max-width: 500px;
    margin-bottom: 40px;
}

.contact-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 600px;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    background-color: var(--bg-light-dark);
    border: 1px solid rgba(100, 255, 218, 0.1);
    border-radius: 4px;
    padding: 16px;
    color: var(--text-white);
    font-family: inherit;
    font-size: 0.95rem;
    transition: var(--transition);
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 10px rgba(100, 255, 218, 0.05);
}

.contact-form button {
    align-self: flex-start;
    cursor: pointer;
    background-color: transparent;
    color: var(--accent);
    border: 1px solid var(--accent);
    padding: 14px 32px;
    font-weight: 600;
    border-radius: 4px;
    transition: var(--transition);
}

.contact-form button:hover:not(:disabled) {
    background-color: rgba(100, 255, 218, 0.1);
}

.contact-form button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.social-links {
    display: flex;
    gap: 25px;
}

.social-links a {
    color: var(--text-light);
    font-size: 1.4rem;
    transition: var(--transition);
}

.social-links a:hover {
    color: var(--accent);
    transform: translateY(-3px);
}

footer {
    text-align: center;
    padding: 40px 20px;
    border-top: 1px solid rgba(204, 214, 246, 0.03);
    font-size: 0.85rem;
    color: #8892b0;
}

/* ==========================================================================
   6. RESPONSIVE COMPONENT LAYOUT MATRIX (MOBILE RECTIFICATION)
   ========================================================================== */
@media (max-width: 768px) {
    .nav-container { padding: 15px 25px; }
    .section { padding: 60px 25px; }
    
    .hero-title { font-size: 2.8rem; }
    .hero-slug { font-size: 2.1rem; }
    .hero-cta { flex-direction: column; gap: 15px; }

    .menu-toggle { 
        display: block; 
        z-index: 1002;
    }

    /* Convert capsule to side menu drawer on touch displays */
    .navbar-pill {
        position: fixed;
        top: 0;
        right: -100%; 
        width: 75%;
        height: 100vh;
        background-color: #112240; 
        border-radius: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 80px 0 0 0;
        gap: 25px;
        box-shadow: -10px 0px 40px rgba(2, 12, 27, 0.6);
        transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 1001;
    }

    .navbar-pill.active {
        right: 0;
    }

    .nav-item {
        color: #ccd6f6;
        font-size: 1.15rem;
        padding: 14px 40px;
        width: 80%;
        text-align: center;
        border-radius: 4px;
    }

    /* Shut off sliding canvas calculations on mobile */
    .nav-indicator {
        display: none !important;
    }

    .nav-item.active,
    .nav-item:hover {
        background-color: rgba(100, 255, 218, 0.08);
        color: var(--accent) !important;
    }
}
