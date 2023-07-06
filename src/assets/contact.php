<?php
$DEBUG = false; //TESTING PURPOSES ONLY!

if ($DEBUG) {
  header("Access-Control-Allow-Origin: *");
}
header("Access-Control-Allow-Methods: POST, GET");
header('Content-Type: application/json; charset=utf-8');

$input = file_get_contents('php://input');
$data = json_decode($input);
$result = "fail";

$toAddress = "chris.m.barr@gmail.com";
$subject = "Website Contact Form";
$fromDomain = $_SERVER['SERVER_NAME'];
$fromAddress = "web-contact-form@chrisbarr.me";
$params = "-f" . $fromAddress;

//`subject` is a honeypot for bots. It must NOT be set!
//`good` is set by angular, it must be true!
if ($data->subject == "" && $data->good == true) {
  if (isset($data->name) && isset($data->email) && isset($data->message)) {
    $headers = "MIME-Version: 1.0" . PHP_EOL;
    $headers .= "Content-type: text/plain; charset=iso-8859-1" . PHP_EOL;
    $headers .= "Sender: " . $fromAddress . PHP_EOL;
    $headers .= "From: Website Contact Form <" . $fromAddress . ">" . PHP_EOL;
    $headers .= "Reply-To: " . $data->name . " <" . $data->email . ">" . PHP_EOL;
    $headers .= "Organization: " . $fromDomain . PHP_EOL;
    $headers .= "Content-Transfer-encoding: 8bit" . PHP_EOL;
    $headers .= "Message-ID: <".md5(uniqid(time()))."@{$fromDomain}>" . PHP_EOL;
    $headers .= "X-Sender: " . $fromAddress . PHP_EOL;
    $headers .= "X-AntiAbuse: Servername - {$fromDomain}" . PHP_EOL;
    $headers .= "X-AntiAbuse: " . $fromAddress . PHP_EOL;
    $headers .= "X-MSmail-Priority: Normal" . PHP_EOL;
    $headers .= "X-Mailer: PHP/" . phpversion();

    mail($toAddress, $subject, $data->message, $headers, $params);

    $result = "success";
  } else {
    $result = "invalid";
  }
} else {
  $result = "fail";
}

if ($DEBUG) {
  echo json_encode(array('result' => $result, 'data' => $data, 'headers' => $headers));
} else {
  echo json_encode(array('result' => $result));
}
?>
