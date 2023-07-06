<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET");
header('Content-Type: application/json; charset=utf-8');

$input = file_get_contents('php://input');
$data = json_decode($input);

//subject is a honeypot for bots. It must NOT be set!
//good is set by angular, it must be true!

if ($data->subject == "" && $data->good == true) {
  if (isset($data->name) && isset($data->email) && isset($data->message)) {
    $headers = "From: " . $data->name . " <" . $data->email . ">" . PHP_EOL;
    $headers .= "Reply-To: " . $data->name . " <" . $data->email . ">" . PHP_EOL;
    $headers .= "X-Mailer: PHP/" . phpversion();

    mail('chris.m.barr@gmail.com', 'Website Contact Form', $data->message, $headers);

    echo json_encode(array('result' => 'success'));
  } else {
    echo json_encode(array('result' => 'invalid'));
  }
} else {
  echo json_encode(array('result' => 'fail'));
}
?>
