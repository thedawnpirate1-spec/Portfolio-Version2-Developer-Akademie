<?php
/**
 * send_mail.php — nimmt die Kontaktformular-Daten (JSON) entgegen und
 * verschickt sie per Mail. Muss auf einem PHP-faehigen Webhost laufen
 * (der Angular-Dev-Server fuehrt KEIN PHP aus -> lokal schlaegt der Versand
 * fehl, die try/catch-Fehlerbehandlung in Angular faengt das ab).
 */

// --- CORS ---------------------------------------------------------------
// '*' ist fuer den Start ok. In Produktion besser die eigene Domain eintragen.
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=UTF-8');

// Preflight-Anfrage des Browsers sofort beantworten.
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// --- Eingaben lesen + validieren ---------------------------------------
$data    = json_decode(file_get_contents('php://input'), true) ?? [];
$name    = trim($data['name'] ?? '');
$email   = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $message === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Invalid input']);
    exit;
}

// --- Mail bauen + senden -----------------------------------------------
$recipient = 'leonlammerich@gmx.de';            // deine Empfaengeradresse
$subject   = "Portfolio-Kontakt von $name";
$body      = "Name: $name\nE-Mail: $email\n\nNachricht:\n$message";

// From muss eine Adresse deiner eigenen Domain sein, sonst blockieren Hoster.
$headers  = "From: noreply@deine-domain.de\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($recipient, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Mail could not be sent']);
}
