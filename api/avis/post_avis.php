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
$dbname = "salles";

error_reporting(E_ALL);

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Failed to connect to the database: " . $conn->connect_error);
}

// Set the HTTP response header to JSON
header("Content-Type: application/json");

$json = json_decode(file_get_contents('php://input'), true);

$id_membre = $json["id_membre"];
$id_avis = $json["id_avis"];
$id_salle = $json["id_salle"];
$commentaire = $json["commentaire"];
$note = $json["note"];
$date_enregistrement = $json["date_enregistrement"];


// Insert the new avis into the database
$sql = "INSERT INTO avis (id_membre, id_salle, commentaire, note)
        VALUES ($id_membre, $id_salle, '$commentaire', $note)";

if ($conn->query($sql) === TRUE) {
    echo "New avis added successfully.";
} else {
    // echo "Error adding avis: " . $conn->error;
    // echo ("Request Method: " . $_SERVER["REQUEST_METHOD"]);
    echo ("SQL Query: " . $sql);
}

$conn->close();
