<?php
// Define paths to required files
$modelsPath = '../../../../models/post.php';
$headersPath = '../../../../config/header.php';

// Check if required files exist and include them
if (!file_exists($modelsPath) || !file_exists($headersPath)) {
    http_response_code(500);
    echo json_encode(['error' => 'Required files are missing']);
    exit();
}

require_once $modelsPath;
require_once $headersPath;

// Decode the incoming JSON data
$data = json_decode(file_get_contents('php://input'));

// Validate JSON data
if ($data === null) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input']);
    exit();
}

// Debugging: Log the incoming data to the error log
error_log(print_r($data, true));  // Log the incoming data to the PHP error log

// Create an instance of the Post class
$obj = new Post();

// Insert achievement data
$result = $obj->fbook(
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

// Handle errors
if ($result === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Internal server error']);
    exit();
}

// Send the result
echo json_encode($result);
?>
