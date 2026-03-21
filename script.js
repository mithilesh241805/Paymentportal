// Generate QR codes on page load
document.addEventListener('DOMContentLoaded', function() {
    // Union Bank QR
    new QRCode(document.getElementById("qr-union"), {
        text: "upi://pay?pa=8940091624@naviaxis&pn=Union Bank of India&cu=INR",
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // State Bank QR
    new QRCode(document.getElementById("qr-sbi"), {
        text: "upi://pay?pa=8940091624-1@naviaxis&pn=State Bank of India&cu=INR",
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});

// Download QR code function
function downloadQR(elementId, filename) {
    const canvas = document.querySelector(`#${elementId} canvas`);
    if (canvas) {
        const url = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.download = filename;
        link.href = url;
        link.click();
    }
}

// Copy UPI ID to clipboard
function copyUPI(upiId, button) {
    navigator.clipboard.writeText(upiId).then(() => {
        // Change button appearance
        const span = button.querySelector('span');
        const originalText = span.textContent;
        span.textContent = '✓ COPIED';
        button.classList.add('copied');
        
        // Reset after 2 seconds
        setTimeout(() => {
            span.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        alert('Failed to copy UPI ID. Please copy manually: ' + upiId);
    });
}

// Initiate payment with amount
function initiatePayment(upiId, bankName, amountInputId) {
    const amountInput = document.getElementById(amountInputId);
    const amount = amountInput.value.trim();
    
    if (!amount || parseFloat(amount) <= 0) {
        alert('⚠️ Please enter a valid amount to proceed with payment.');
        amountInput.focus();
        return;
    }
    
    // Create UPI payment link with amount
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(bankName)}&am=${amount}&cu=INR`;
    
    // Store payment details for WhatsApp
    sessionStorage.setItem('lastPaymentAmount', amount);
    sessionStorage.setItem('lastPaymentBank', bankName);
    
    // Open UPI app
    window.location.href = upiLink;
    
    // Show payment confirmation and WhatsApp option
    setTimeout(() => {
        showPaymentConfirmation(amount, bankName);
    }, 1000);
}

// Show payment confirmation with WhatsApp option
function showPaymentConfirmation(amount, bankName) {
    // Automatically open WhatsApp for receipt after a short delay
    setTimeout(() => {
        sendReceiptAutomatic(amount, bankName);
    }, 500);
}

// Auto-send receipt via WhatsApp after payment
function sendReceiptAutomatic(amount, bankName) {
    const whatsappNumber = '918940091624';
    const message = encodeURIComponent(
        `Hi😺😉\n\n` +
        `✅ *Payment Completed*\n\n` +
        `💰 Amount: ₹${amount}\n` +
        `🏦 Bank: ${bankName}\n` +
        `📅 Date: ${new Date().toLocaleString('en-IN')}\n\n` +
        `[Payment receipt/screenshot attached]`
    );
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}

// Send greeting when clicking SEND RECEIPT NOW button
function sendGreeting() {
    const whatsappNumber = '918940091624';
    const message = encodeURIComponent(`Hi😺😉`);
    
    // Open WhatsApp with greeting
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}

// Virus Blast Touch Effect
let firstInteraction = true;

function stopGlowEffects() {
    if (firstInteraction) {
        // Stop MK logo animations
        document.querySelector('.mk-logo::before')?.style?.setProperty('animation', 'none');
        document.querySelector('.mk-text')?.style?.setProperty('animation', 'none');
        
        // Stop orbit animations
        document.querySelectorAll('.orbit').forEach(orbit => {
            orbit.style.animation = 'none';
        });
        
        // Stop title pulse
        document.querySelector('.title')?.style?.setProperty('animation', 'none');
        
        // Stop status dot blink
        document.querySelectorAll('.status-dot').forEach(dot => {
            dot.style.animation = 'none';
            dot.style.opacity = '1';
        });
        
        firstInteraction = false;
    }
}

function createVirusBlast(x, y) {
    const blast = document.createElement('div');
    blast.className = 'virus-blast';
    blast.style.left = x + 'px';
    blast.style.top = y + 'px';
    
    // Create core flash
    const core = document.createElement('div');
    core.className = 'blast-core';
    blast.appendChild(core);
    
    // Create expanding rings
    const colors = ['#00ff41', '#00ccff', '#ff00ff'];
    for (let i = 0; i < 3; i++) {
        const ring = document.createElement('div');
        ring.className = 'blast-ring';
        ring.style.borderColor = colors[i];
        ring.style.animationDelay = (i * 0.1) + 's';
        blast.appendChild(ring);
    }
    
    // Create shock wave
    const wave = document.createElement('div');
    wave.className = 'blast-wave';
    blast.appendChild(wave);
    
    // Create rotating hexagons
    for (let i = 0; i < 4; i++) {
        const hex = document.createElement('div');
        hex.className = 'blast-hex';
        hex.style.animationDelay = (i * 0.15) + 's';
        blast.appendChild(hex);
    }
    
    // Create particles
    const particleCount = 12;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'blast-particle';
        
        const angle = (Math.PI * 2 * i) / particleCount;
        const distance = 80 + Math.random() * 40;
        const duration = 0.8 + Math.random() * 0.4;
        
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;
        
        particle.style.left = '0px';
        particle.style.top = '0px';
        
        // Randomize colors
        const particleColors = ['#00ff41', '#00ccff', '#ff00ff'];
        const color = particleColors[Math.floor(Math.random() * particleColors.length)];
        particle.style.background = color;
        particle.style.boxShadow = `0 0 10px ${color}`;
        
        particle.animate([
            { 
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            { 
                transform: `translate(${endX}px, ${endY}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'ease-out'
        });
        
        blast.appendChild(particle);
    }
    
    document.body.appendChild(blast);
    
    // Remove blast after animation completes
    setTimeout(() => {
        blast.remove();
    }, 1000);
}

// Add click/touch event listeners
document.addEventListener('click', function(e) {
    stopGlowEffects();
    
    // Don't create blast if clicking on buttons or inputs
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT' || e.target.closest('button')) {
        return;
    }
    createVirusBlast(e.clientX, e.clientY);
});

document.addEventListener('touchstart', function(e) {
    stopGlowEffects();
    
    // Don't create blast if touching buttons or inputs
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT' || e.target.closest('button')) {
        return;
    }
    
    // Create blast for each touch point
    for (let i = 0; i < e.touches.length; i++) {
        const touch = e.touches[i];
        createVirusBlast(touch.clientX, touch.clientY);
    }
});
