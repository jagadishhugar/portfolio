document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Array Intersection Evaluation for Section Nav Highlighting
    const sections = document.querySelectorAll('.content-section');
    const menuItems = document.querySelectorAll('.menu-item');

    window.addEventListener('scroll', () => {
        let activeScope = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 220)) {
                activeScope = section.getAttribute('id');
            }
        });

        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === activeScope) {
                item.classList.add('active');
            }
        });
    });

    // 2. Invisible Google Form Interceptor and Live Logger Engine
    const secureForm = document.getElementById('secure-form');
    const logBox = document.getElementById('terminal-log-box');
    const textFlow = document.getElementById('terminal-text-flow');
    
    if (secureForm && logBox && textFlow) {
        secureForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Blocks Google from taking over the window
            
            const pushBtn = secureForm.querySelector('.cyber-btn');
            if (pushBtn) pushBtn.disabled = true;
            
            logBox.style.display = 'block'; // Make the interactive console block visible
            textFlow.innerHTML = ''; // Reset terminal output stream

            // Extract the user values dynamically from text fields
            const nameValue = secureForm.querySelector('input[placeholder="Recruiter / Project Lead"]').value;
            const emailValue = secureForm.querySelector('input[placeholder="lead@enterprise.com"]').value;
            const messageValue = secureForm.querySelector('textarea').value;

            // Helper utility to write out timed log arrays on your interface frame
            const printLog = (text, delay) => {
                return new Promise(resolve => setTimeout(() => {
                    textFlow.innerHTML += text + '\n';
                    resolve();
                }, delay));
            };

            // Phase 1: Print customized execution processes directly on the terminal card
            await printLog(`> Initializing socket sync to target database node...`, 100);
            await printLog(`> Structuring data frame matrix [Identity: "${nameValue}"]`, 350);
            await printLog(`> Mapping transaction authorization keys [Endpoint: "${emailValue}"]`, 250);
            await printLog(`> Deploying data packet payload via background workers...`, 400);

            // 🚨 CONFIGURATION: Replace these dummy variables with your true values from Step 5!
            const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdwYzgK_Ns6CTh-tTnEB3XTRzBeMBK1j_MoBsUzEJcx7C4rAQ/formResponse";
            
            const hiddenPayload = new FormData();
            hiddenPayload.append("entry.355204745", nameValue);    // Change entry number to your Name ID
            hiddenPayload.append("entry.2044133355", emailValue);   // Change entry number to your Email ID
            hiddenPayload.append("entry.666904480", messageValue); // Change entry number to your Message ID

            // Phase 2: Transmit hidden payload seamlessly in the background
            try {
                await fetch(GOOGLE_FORM_URL, {
                    method: "POST",
                    mode: "no-cors", // Bypasses cross-origin restrictions, allowing silent storage
                    body: hiddenPayload
                });

                // Phase 3: Print exit response statements directly inside the interface
                await printLog(`\n[✔] SUCCESS: Handshake finalized. Core data payload synced 100%.`, 400);
                await printLog(`[✔] AGENT EXIT CODE: 0x00 // Systems returning to standby state.`, 200);
                
                secureForm.reset(); // Safely clear your entry boxes
            } catch (error) {
                console.error(error);
                textFlow.innerHTML += `\n<span style="color: #ff4444;">[🗙] CRITICAL FAILURE: Connection dropped. Stream terminated.</span>\n`;
            } finally {
                if (pushBtn) pushBtn.disabled = false;
            }
        });
    }
});
