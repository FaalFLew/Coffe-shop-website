<?php
error_reporting(E_ALL);
ini_set('display_errors',1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO newsletter(Email) VALUES(:Email)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':Email', $user->Email);
        
       // Check if the email is already registered
       $checkSql = "SELECT COUNT(*) FROM newsletter WHERE Email = :Email";
       $checkStmt = $conn->prepare($checkSql);
       $checkStmt->bindParam(':Email', $user->Email);
       $checkStmt->execute();
       $emailExists = $checkStmt->fetchColumn();

       if ($emailExists) {
           http_response_code(409); // Conflict
           $response = ['status' => 0, 'message' => 'Email is already registered'];
       } else {
           if ($stmt->execute()) {
               $response = ['status' => 1, 'message' => 'Record created successfully'];
           } else {
               $response = ['status' => 0, 'message' => 'Failed to create record'];
           }
       }
       echo json_encode($response);
       break;
}
