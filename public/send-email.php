<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $name = htmlspecialchars($input['name']);
    $email = htmlspecialchars($input['email']);
    $message = htmlspecialchars($input['message']);
    
    $to = 'altsupport1@gmail.com';
    $cc = 'contact-page@alternativesupportcare.com';
    $subject = 'Contact Form Submission from ' . $name;
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: contact-page@alternativesupportcare.com\r\nReply-To: $email\r\n";
    
    if (mail($cc, $subject, $body, $headers)) {
        mail($to, $subject, $body, $headers);
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
} else {
    echo json_encode(['success' => false]);
}
?>