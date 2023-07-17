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

error_reporting(E_ALL);

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Failed to connect to the database: " . $conn->connect_error);
}

// Set the HTTP response header to JSON
header("Content-Type: application/json");

// Check the request method
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    // Retrieve all avis
    $sql = "SELECT * FROM avis";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Convert the results to an associative array
        $avis = array();
        while ($row = $result->fetch_assoc()) {
            $avis[] = $row;
        }

        // Display the results in JSON format
        echo json_encode($avis);
    } else {
        echo json_encode([]);
    }
}
// Close the database connection
$conn->close();
