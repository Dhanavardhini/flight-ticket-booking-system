<?php
$modelsPath = '../../../../models/put.php';
$headersPath = '../../../../config/header.php';
if (!file_exists($modelsPath) || !file_exists($headersPath)) {
    handleResponse(500, 'Required files are missing');
    return;
}
require_once $modelsPath;
require_once $headersPath;
function handleResponse($statusCode, $message) {
    http_response_code($statusCode);
    echo json_encode(['error' => $message]);
    exit();
}
$data = json_decode(file_get_contents('php://input'));
$requiredFields = ['id', 'name', 'email', 'phone', 'departure', 'destination', 'tickets', 'date', 'price', 'status'];
foreach ($requiredFields as $field) {
    if (!isset($data->$field)) {
        handleResponse(400, "Missing required field: $field");
    }
}
$obj = new Put();
$result = $obj->fbook(
    $data->id,
    $data->name,
    $data->email,
    $data->phone,
    $data->departure,
    $data->destination,
    $data->tickets,
    $data->date,
    $data->price,
    $data->status
);
echo json_encode($result);
