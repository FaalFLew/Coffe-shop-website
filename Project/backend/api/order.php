<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case "POST":
        // ...

        $data = json_decode(file_get_contents('php://input'), true);

        // Insert into orders table
        $orderSql = "INSERT INTO orders (Country, Street, Zip, Order_email, First_name, Last_name) VALUES (:Country, :Street, :Zip, :Order_email, :First_name, :Last_name)";
        $orderStmt = $conn->prepare($orderSql);
        $orderStmt->bindParam(':Country', $data['Country']);
        $orderStmt->bindParam(':Street', $data['Street']);
        $orderStmt->bindParam(':Zip', $data['Zip']);
        $orderStmt->bindParam(':Order_email', $data['Order_email']);
        $orderStmt->bindParam(':First_name', $data['First_name']);
        $orderStmt->bindParam(':Last_name', $data['Last_name']);
        
        $orderSuccess = $orderStmt->execute();
        $orderId = $conn->lastInsertId();
        
        // Insert into order_details table
        $orderDetailsSql = "INSERT INTO order_details (Orders_order_id, Products_product_id, Quantity) VALUES (:order_id, :product_id, :quantity)";
        $orderDetailsStmt = $conn->prepare($orderDetailsSql);
        
        foreach ($data['products'] as $product) {
            $orderDetailsStmt->bindParam(':order_id', $orderId);
            $orderDetailsStmt->bindParam(':product_id', $product['id']);
            $orderDetailsStmt->bindParam(':quantity', $product['count']);
            $orderDetailsStmt->execute();
        }

  
        if ($orderSuccess) {
            $response = ['status' => 1, 'message' => 'Record created successfully'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record'];
        }
        echo json_encode($response);
        break;
}

$userCountry = 'France';
$userCity = 'Paris';

// Get the time zone based on the user's country and city
$timezoneIdentifier = timezone_name_from_country_and_city($userCountry, $userCity);
$userTimeZone = new DateTimeZone($timezoneIdentifier);

// Get the current server time in UTC
$currentDateTime = new DateTime('now', new DateTimeZone('UTC'));

// Convert the server time to the user's time zone
$currentDateTime->setTimezone($userTimeZone);

// Get the user's current time in their time zone
$userCurrentTime = $currentDateTime->format('Y-m-d H:i:s');