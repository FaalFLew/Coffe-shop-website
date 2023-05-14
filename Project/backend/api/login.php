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
    case "GET":
        $sql = "SELECT * FROM product";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($products);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO customer(Email, First_name, Last_name, Password, Newsletter_subscribed) VALUES(:Email, :First_name, :Last_name, :Password, :Newsletter_subscribed)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':Email', $user->Email);
        $stmt->bindParam(':First_name', $user->First_name);
        $stmt->bindParam(':Last_name', $user->Last_name);
        $stmt->bindParam(':Password', $user->Password);
        $stmt->bindParam(':Newsletter_subscribed', $user->Newsletter_subscribed);
        if($stmt->execute()) {
            $response =['status' => 1, 'message'=> 'Record created succesfully'];
        }else {
            $response =['status' => 0, 'message'=> 'Failed to create record'];
        }
        echo json_encode($response);
        break;

}
