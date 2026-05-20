document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu View Toggle (Keeps your navbar responsive)
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Data Pipeline & Success Modal Selectors
    const contactForm = document.getElementById('contact-form');
    const logBox = document.getElementById('terminal-log-box');
    const textFlow = document.getElementById('terminal-text-flow');
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    
    if (contactForm && logBox && textFlow && successModal) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Stifles default browser page reloads entirely
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.disabled = true; // Prevents spam double-clicks
            
            logBox.style.display = 'block'; // Make terminal console active
            textFlow.innerHTML = ''; // Wipe previous logs cleanly

            // Extract what your recruiter/visitor typed out in your HTML inputs
            const nameValue = contactForm.querySelector('input[type="text"]').value;
            const emailValue = contactForm.querySelector('input[type="email"]').value;
            const messageValue = contactForm.querySelector('textarea').value;

            // Micro-helper function to output text lines with specific typing delays
            const printTerminalLog = (text, delay) => {
                return new Promise(resolve => setTimeout(() => {
                    textFlow.innerHTML += text + '\n';
                    resolve();
                }, delay));
            };

            // Run real-time typewriter logging steps on the UI
            await printTerminalLog(`> Initializing secure connection to target database cell...`, 100);
            await printTerminalLog(`> Compiling packet structural matrix [Identity: "${nameValue}"]`, 350);
            await printTerminalLog(`> Validating transmission authorization keys [Endpoint: "${emailValue}"]`, 250);
            await printTerminalLog(`> Pushing background payload packet stream to pipeline array...`, 400);

            // 🚨 CONFIGURATION: Replace these dummy variables with your true values from Step 5!
            const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdwYzgK_Ns6CTh-tTnEB3XTRzBeMBK1j_MoBsUzEJcx7C4rAQ/formResponse";
            
            const hiddenPayload = new FormData();
            hiddenPayload.append("entry.355204745", nameValue);    // Change entry number to your Name ID
            hiddenPayload.append("entry.2044133355", emailValue);   // Change entry number to your Email ID
            hiddenPayload.append("entry.666904480", messageValue); // Change entry number to your Message ID

            // Execute the backend web transaction silently
            try {
                await fetch(GOOGLE_FORM_URL, {
                    method: "POST",
                    mode: "no-cors", // Tells browser to pass data invisibly without a redirection page
                    body: hiddenPayload
                });

                // Finish terminal interface updates
                await printTerminalLog(`\n[✔] SUCCESS: Handshake finalized. Data package safely absorbed.`, 400);
                await printTerminalLog(`[✔] SYSTEM STATUS: Data logged to master sheet structure.`, 200);
                
                // Trigger the beautiful modal popup block
                setTimeout(() => {
                    successModal.classList.add('active');
                }, 300);

                contactForm.reset(); // Safely clear form boxes
            } catch (error) {
                console.error("Pipeline Transmission Error: ", error);
                textFlow.innerHTML += `\n<span style="color: #ff5555;">[🗙] DATA_PIPELINE_ERROR: Stream disconnected. Transfer timeout.</span>\n`;
            } finally {
                if (submitBtn) submitBtn.disabled = false; // Restore submission controls
            }
        });
    }

    // 3. Modal Close Trigger Action
    if (closeModalBtn && successModal) {
        closeModalBtn.addEventListener('click', () => {
            successModal.classList.remove('active');
        });
    }
});
