# 🚀 MK Payment Portal

A futuristic cyber-themed UPI payment gateway with advanced features, interactive effects, and automated receipt collection.

![Version](https://img.shields.io/badge/version-3.0-brightgreen)
![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Installation](#-installation)
- [File Structure](#-file-structure)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Features Breakdown](#-features-breakdown)
- [Browser Support](#-browser-support)
- [Deployment](#-deployment)
- [Customization](#-customization)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

## ✨ Features

### 🔐 Privacy & Security
- **Masked Mobile Number**: Last 5 digits hidden with glowing smoke effect (+91 894XXXXX)
- **Hidden UPI IDs**: Not visible on page, only accessible via copy button or QR scan
- **Encrypted Display**: Professional privacy-focused interface

### 💰 Payment Features
- **Dual Bank Support**: Union Bank of India & State Bank of India
- **Amount Input**: Pre-fill payment amount before initiating UPI payment
- **QR Code Generation**: Instant QR codes for both banks
- **One-Click Copy**: Copy UPI IDs to clipboard with visual feedback
- **Direct UPI Integration**: Opens user's UPI app automatically

### 📱 Auto WhatsApp Receipt
- **Automatic Message**: Opens WhatsApp after payment with pre-filled greeting "Hi😺😉"
- **Payment Details**: Auto-includes amount, bank, date/time
- **Receipt Upload**: Customer just attaches screenshot and sends
- **Manual Option**: "SEND RECEIPT NOW" button for manual submission

### 🎨 Cyber Theme Design
- **Animated Grid Background**: Moving matrix-style grid
- **Glowing Effects**: Neon green, cyan, and magenta colors
- **MK Logo**: Animated hexagonal logo with orbiting dots
- **Virus Blast Effects**: Interactive touch explosions on click/tap
- **Responsive Design**: Works on desktop, tablet, and mobile

### 🎮 Interactive Features
- **Touch Effects**: Virus blast animation on every click/tap
- **Multi-touch Support**: Each finger creates separate blast
- **Glow Animation Stop**: First click stops auto-animations
- **Button Feedback**: Visual feedback on all interactions

## 🎬 Demo

**Live Features:**
- Click anywhere on the page → Virus blast effect appears
- Enter amount → Click PAY NOW → UPI app opens
- After payment → WhatsApp opens automatically
- Click SEND RECEIPT NOW → Send greeting message

## 📦 Installation

### Quick Start (Local)

1. **Download all files** to a folder:
   ```
   your-folder/
   ├── index.html
   ├── style.css
   └── script.js
   ```

2. **Open `index.html`** in your web browser
   - Double-click the file, or
   - Right-click → Open with → Chrome/Firefox/Safari

3. **That's it!** The portal is ready to use.

### Web Hosting

Upload all three files to your web server:
```bash
# Via FTP/SFTP
upload index.html
upload style.css
upload script.js

# Via Git
git add .
git commit -m "Add MK Payment Portal"
git push
```

## 📁 File Structure

```
MK-Payment-Portal/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # All functionality and interactions
└── README.md          # This file
```

### File Dependencies

**index.html**
- Links to `style.css` for styling
- Links to `script.js` for functionality
- Loads QRCode.js from CDN (external library)

**style.css**
- Standalone CSS file
- No external dependencies
- All animations included

**script.js**
- Requires QRCode.js library (loaded in HTML)
- All payment, WhatsApp, and effect functions

## ⚙️ Configuration

### Update Payment Information

Edit these values in `index.html` and `script.js`:

#### 1. UPI IDs (in HTML)
```html
<!-- Union Bank -->
onclick="copyUPI('8940091624@naviaxis', this)"
onclick="initiatePayment('8940091624@naviaxis', 'Union Bank of India', 'amount-union')"

<!-- State Bank -->
onclick="copyUPI('8940091624-1@naviaxis', this)"
onclick="initiatePayment('8940091624-1@naviaxis', 'State Bank of India', 'amount-sbi')"
```

#### 2. WhatsApp Number (in script.js)
```javascript
// Line ~100 and ~120
const whatsappNumber = '918940091624';  // Change this
```

#### 3. Email Address (in HTML)
```html
<!-- Header section -->
<div class="terminal-line" style="color: #ff00ff;">Contact: mrmk1624@hi2.in</div>

<!-- Footer section -->
mrmk1624@hi2.in
```

#### 4. Bank Names
```javascript
// In QR generation (script.js)
text: "upi://pay?pa=YOUR_UPI@naviaxis&pn=YOUR BANK NAME&cu=INR"
```

#### 5. Masked Number Display (in HTML)
```html
+91 894<span class="masked-digits">XXXXX</span>
```
Change `894` to your first 3 digits.

## 🎯 Usage

### For Customers

1. **Open the portal** (via link you share)
2. **Choose bank account** (Union Bank or State Bank)
3. **Enter payment amount** in the ₹ field
4. **Click one of three options:**
   - **📋 COPY UPI**: Copies UPI ID to clipboard
   - **💾 SAVE QR**: Downloads QR code as PNG image
   - **📱 PAY NOW**: Opens UPI app with pre-filled amount
5. **Complete payment** in their UPI app
6. **WhatsApp auto-opens** with greeting and payment details
7. **Attach receipt screenshot** and send

### For You (Business Owner)

1. **Share portal link** with customers
2. **Receive WhatsApp notification** with:
   - "Hi😺😉" greeting
   - Payment amount
   - Bank name
   - Date/time
   - Receipt screenshot
3. **Confirm and process** the order

## 🌟 Features Breakdown

### 1. Masked Mobile Number with Smoke Effect

**Location:** Footer section  
**Display:** `+91 894XXXXX`  
**Effect:** Glowing green smoke animation on the X's

**CSS Animation:**
```css
.masked-digits {
    animation: smokeGlow 3s ease-in-out infinite;
}
```

**Customization:**
- Change color: Modify `#00ff41` in CSS
- Change speed: Adjust `3s` duration
- Disable: Remove animation property

### 2. Virus Blast Touch Effects

**Trigger:** Click or tap anywhere on screen  
**Duration:** 1 second per blast  
**Components:**
- Core flash (center glow)
- 3 expanding rings (green, cyan, magenta)
- Shock wave (fast circle)
- 4 rotating hexagons
- 12 shooting particles

**Customization:**
```javascript
// Change particle count
const particleCount = 12;  // Increase for more particles

// Change colors
const colors = ['#00ff41', '#00ccff', '#ff00ff'];

// Change blast size
const distance = 80 + Math.random() * 40;  // Min 80px, max 120px
```

### 3. Auto WhatsApp Integration

**After Payment Message:**
```
Hi😺😉

✅ Payment Completed

💰 Amount: ₹500.00
🏦 Bank: Union Bank of India
📅 Date: 21/03/2026, 10:30 AM

[Payment receipt/screenshot attached]
```

**Manual Button Message:**
```
Hi😺😉
```

**Customization:**
```javascript
// Change greeting
const message = encodeURIComponent(`Your Custom Greeting`);

// Add more fields
`💰 Amount: ₹${amount}\n` +
`🏦 Bank: ${bankName}\n` +
`📅 Date: ${new Date().toLocaleString('en-IN')}\n` +
`🆔 Order ID: ${orderId}\n`  // Add custom field
```

### 4. QR Code Generation

**Library:** QRCode.js (from CDN)  
**Size:** 180x180 pixels  
**Error Correction:** High (H level)

**Customization:**
```javascript
new QRCode(document.getElementById("qr-union"), {
    text: "upi://pay?pa=8940091624@naviaxis&pn=Union Bank&cu=INR",
    width: 200,        // Change size
    height: 200,       // Change size
    colorDark: "#000",  // QR color
    colorLight: "#fff", // Background color
    correctLevel: QRCode.CorrectLevel.H  // Error correction: L, M, Q, H
});
```

### 5. MK Logo Animation

**Components:**
- Hexagonal background (rotating)
- "MK" text with gradient
- 2 orbital rings with dots
- Pulsing glow effect

**Stop Animation:**
- First click/touch stops all logo animations
- Page becomes static for better focus

**Customization:**
```css
/* Logo size */
.mk-logo {
    width: 140px;  /* Change size */
    height: 140px;
}

/* Text size */
.mk-text {
    font-size: 48px;  /* Change size */
}

/* Rotation speed */
@keyframes hexRotate {
    animation-duration: 10s;  /* Change speed */
}
```

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 80+ | ✅ Full |
| Firefox | 75+ | ✅ Full |
| Safari | 13+ | ✅ Full |
| Edge | 80+ | ✅ Full |
| Opera | 67+ | ✅ Full |
| Mobile Safari | iOS 13+ | ✅ Full |
| Chrome Mobile | Android 8+ | ✅ Full |

**Required Features:**
- CSS animations
- CSS clip-path
- JavaScript ES6+
- Web Animations API
- Clipboard API
- Touch events

## 🚀 Deployment

### Option 1: GitHub Pages (Free)

1. Create GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select branch: main
5. Your site: `https://yourusername.github.io/repo-name/`

### Option 2: Netlify (Free)

1. Drag and drop folder to Netlify
2. Get instant HTTPS link
3. Optional: Add custom domain

### Option 3: Vercel (Free)

```bash
npm i -g vercel
vercel
```

### Option 4: Traditional Web Hosting

Upload via FTP to your hosting:
```
public_html/
├── index.html
├── style.css
└── script.js
```

### Option 5: Google Drive/Dropbox (Simple Share)

1. Upload files to Drive/Dropbox
2. Get shareable link
3. Share with customers

**Note:** Some features may not work when opened directly from cloud storage.

## 🎨 Customization

### Change Color Scheme

**Primary Colors:**
```css
/* In style.css */
--color-primary: #00ff41;   /* Green */
--color-secondary: #00ccff; /* Cyan */
--color-accent: #ff00ff;    /* Magenta */
--color-dark: #0a0e27;      /* Dark blue */
```

**Update throughout CSS:**
- Replace `#00ff41` with your primary color
- Replace `#00ccff` with your secondary color
- Replace `#ff00ff` with your accent color

### Change Fonts

```css
/* In style.css */
body {
    font-family: 'Your Font', monospace;
}
```

**Recommended Cyber Fonts:**
- 'Courier New', monospace
- 'Consolas', monospace
- 'Monaco', monospace
- 'Share Tech Mono', monospace (Google Fonts)

### Disable Specific Features

**Turn Off Virus Blast Effects:**
```javascript
// In script.js, comment out or remove:
// document.addEventListener('click', function(e) { ... });
// document.addEventListener('touchstart', function(e) { ... });
```

**Turn Off Background Animation:**
```css
/* In style.css */
.cyber-bg {
    animation: none;  /* Add this */
}
```

**Turn Off Logo Animations:**
```css
.mk-logo::before {
    animation: none;
}

.mk-text {
    animation: none;
}
```

### Add More Banks

1. **Duplicate a payment card** in `index.html`:
```html
<div class="payment-card">
    <div class="bank-header">
        <div class="bank-icon">ICICI</div>
        <div class="bank-name">ICICI Bank</div>
    </div>
    <!-- Rest of the card structure -->
</div>
```

2. **Add QR generation** in `script.js`:
```javascript
new QRCode(document.getElementById("qr-icici"), {
    text: "upi://pay?pa=YOUR_UPI@icici&pn=ICICI Bank&cu=INR",
    width: 180,
    height: 180,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
```

## 🐛 Troubleshooting

### QR Codes Not Appearing

**Issue:** Blank white boxes instead of QR codes  
**Solution:** Check that QRCode.js library is loading:
```html
<!-- In index.html, before script.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
```

**Alternative CDN:**
```html
<script src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"></script>
```

### WhatsApp Not Opening

**Issue:** WhatsApp link doesn't work  
**Solutions:**
1. Check WhatsApp is installed on device
2. Verify number format: `918940091624` (country code + number, no +)
3. Test link manually: `https://wa.me/918940091624`

### Copy Button Not Working

**Issue:** "Failed to copy" alert appears  
**Solution:** Clipboard API requires HTTPS or localhost
- Deploy to HTTPS site, or
- Test on `http://localhost`

### Animations Laggy on Mobile

**Issue:** Slow performance on older phones  
**Solution:** Reduce animation complexity:
```javascript
// In script.js, reduce particles
const particleCount = 6;  // Instead of 12
```

```css
/* In style.css, disable some animations */
.cyber-bg {
    animation: none;
}
```

### Styles Not Loading

**Issue:** Page looks unstyled  
**Solution:** 
1. Check `style.css` is in same folder as `index.html`
2. Verify link tag: `<link rel="stylesheet" href="style.css">`
3. Check file name spelling (case-sensitive on servers)

### UPI App Not Opening

**Issue:** PAY NOW button doesn't open UPI app  
**Solution:**
1. Verify UPI ID format: `username@bankname`
2. Check UPI app is installed
3. Try scanning QR code instead

## 📊 Analytics & Tracking

### Add Google Analytics

Add before `</head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Track Button Clicks

Add to `script.js`:
```javascript
function trackEvent(action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': 'Payment',
            'event_label': label
        });
    }
}

// In existing functions:
function copyUPI(upiId, button) {
    trackEvent('copy_upi', upiId);  // Add this
    // ... rest of function
}

function initiatePayment(upiId, bankName, amountInputId) {
    trackEvent('initiate_payment', bankName);  // Add this
    // ... rest of function
}
```

## 📄 License

MIT License - Free to use, modify, and distribute

## 🤝 Support

For issues or questions:
- **Email:** mrmk1624@hi2.in
- **WhatsApp:** +91 8940091624

## 🔄 Version History

### v3.0 (Current)
- Added masked mobile number with smoke effect
- Auto "Hi😺😉" greeting message
- Email display in header and footer
- Automatic receipt submission
- Virus blast touch effects
- Glow animation stop on first interaction

### v2.0
- Added amount input fields
- Auto WhatsApp integration
- Copy UPI button
- Hidden UPI IDs

### v1.0
- Initial release
- Basic payment portal
- QR code generation
- Dual bank support

---

**Made with 💚 by MK**

*Cyber-themed payment portal for the future of digital transactions*
