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
        echo "No avis found.";
    }
} 
// elseif ($_SERVER["REQUEST_METHOD"] === "POST") {
//     // Retrieve the data from the POST request
//     $id_membre = $_POST["id_membre"];
//     $id_avis = $_POST["id_avis"];
//     $id_salle = $_POST["id_salle"];
//     $commentaire = $_POST["commentaire"];
//     $note = $_POST["note"];
//     $date_enregistrement = $_POST["date_enregistrement"];

//     // Insert the new avis into the database
//     $sql = "INSERT INTO avis (id_membre, id_salle, commentaire, note, date_enregistrement)
//             VALUES ($id_membre, $id_salle, '$commentaire', $note, '$date_enregistrement')";

//     if ($conn->query($sql) === TRUE) {
//         echo "New avis added successfully.";
//     } else {
//         echo "Error adding avis: " . $conn->error;
//         echo ("Request Method: " . $_SERVER["REQUEST_METHOD"]);
//         echo ("SQL Query: " . $sql);
//     }
// }

// Close the database connection
$conn->close();
