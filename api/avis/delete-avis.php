<?php

header("Access-Control-Allow-Origin: *");

// Allow the specific headers required for the request
header("Access-Control-Allow-Headers: Content-Type");

// Allow the specific HTTP methods required for the request
header("Access-Control-Allow-Methods: DELETE");

// Connection to the database
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "salles";

error_reporting(E_ALL);

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Failed to connect to the database: " . $conn->connect_error);
}

// Set the HTTP response header to JSON
header("Content-Type: application/json");

// Check the request method
if ($_SERVER["REQUEST_METHOD"] === "DELETE") {
    // Get the request body as JSON
    $requestData = json_decode(file_get_contents('php://input'), true);

    // Check if the required data is present
    if (isset($requestData['id_avis'])) {
        $id_avis = $requestData['id_avis'];

        // Prepare and execute the SQL statement
        $stmt = $conn->prepare("DELETE FROM avis WHERE id_avis = id_avis");
        $stmt->bind_param("i", $id_avis);
        $stmt->execute();

        // Check the affected rows to determine if the deletion was successful
        if ($stmt->affected_rows > 0) {
            // Return a success message
            echo json_encode(array("message" => "Avis deleted successfully"));
        } else {
            // Return an error message if the avis does not exist
            echo json_encode(array("message" => "Avis not found"));
        }
    } else {
        // Return an error message if the required data is missing
        echo json_encode(array("message" => "Missing required data"));
    }
} else {
    // Return an error message for unsupported request methods
    echo json_encode(array("message" => "Unsupported request method"));
}

// Close the database connection
$conn->close();
