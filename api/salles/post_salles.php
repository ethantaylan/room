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

$titre = $json["titre"];
$description = $json["description"];
$photo = $json["photo"];
$pays = $json["pays"];
$ville = $json["ville"];
$adresse = $json["adresse"];
$cp = $json["cp"];
$capacite = $json["capacite"];
$categorie = $json["categorie"];


// Insert the new avis into the database
$sql = "INSERT INTO salles (titre, description, photo, pays, ville, adresse, cp, capacite, categorie)
VALUES ('$titre', '$description', '$photo', '$pays', '$ville', '$adresse', $cp, $capacite, '$categorie')";

if ($conn->query($sql) === true) {
    echo "New salle added successfully.";
} else {
    echo "Error adding avis: " . $conn->error;
    // You can also check the query that failed by echoing the SQL statement
    // echo ("SQL Query: " . $sql);
}

$conn->close();
