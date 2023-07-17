<?php

header("Access-Control-Allow-Origin: *");

// Allow the specific headers required for the request
header("Access-Control-Allow-Headers: Content-Type");

// Allow the specific HTTP methods required for the request
header("Access-Control-Allow-Methods: POST, GET");

// Connection to the database
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "room";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Failed to connect to the database: " . $conn->connect_error);
}

// Set the HTTP response header to JSON
header("Content-Type: application/json");

// Retrieve all products
$sql = "SELECT * FROM produits p INNER JOIN salles s on p.id_salle = s.id_salle";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Convert the results to an associative array
    $products = array();
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }

    // Display the results in JSON format
    echo json_encode($products);
} else {
    echo "No products found.";
}

// Close the database connection
$conn->close();
