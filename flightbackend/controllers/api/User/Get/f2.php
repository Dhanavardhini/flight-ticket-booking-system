<?php

$modelsPath = '../../../../models/get.php';
$headersPath = '../../../../config/header.php';


if (!file_exists($modelsPath) || !file_exists($headersPath)) {
    respondWithError(500, 'Required files are missing');
}


require_once $modelsPath;
require_once $headersPath;


$data = json_decode(file_get_contents('php://input'));
$obj = new Get();


$result = $obj->firstclass();


if ($result === false) {
    respondWithError(500, 'Internal server error');
}


echo json_encode($result);

/**

 *
 * @param object $data 
 *
 * @return bool 
 */


/**
 * 
 *
 * @param int    $statusCode
 * @param string $message    
 */
function respondWithError($statusCode, $message) {
    http_response_code($statusCode);
    echo json_encode(['error' => $message]);
    exit();
}
?>
