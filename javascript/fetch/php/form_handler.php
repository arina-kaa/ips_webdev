<?php
$filePath = $_SERVER['DOCUMENT_ROOT'] . '/php/include/emails.txt';

$success = 0;
$email = (isset($_POST['email'])) ? $_POST['email'] : $_GET['email'];

$emails = [];
if (is_file($filePath)){
    $fileData = unserialize(file_get_contents($filePath));
    if ($fileData) {
        $emails = $fileData;
    }
}

if (!in_array($email, $emails)) {
    $success = 1;
    array_push($emails, $email);
    file_put_contents($filePath, serialize($emails));
}

echo $success;
