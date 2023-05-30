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
    case "GET":
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[4]) && is_numeric($path[4])) {
            $sql = "SELECT products.*, product_type.Product_type FROM products INNER JOIN product_type ON products.Product_type_id = product_type.Product_type_id WHERE products.Product_id = :Product_id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':Product_id', $path[4]);
            $stmt->execute();
            $product = $stmt->fetch(PDO::FETCH_ASSOC);
            echo json_encode($product);
        } else {
            $sql = "SELECT products.*, product_type.Product_type FROM products INNER JOIN product_type ON products.Product_type_id = product_type.Product_type_id";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($products);
        }
        break;
    default:
        echo json_encode(array('message' => 'Invalid request method.'));
        break;
}
