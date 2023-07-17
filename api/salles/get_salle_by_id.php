<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET");

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "room";

error_reporting(E_ALL);

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Failed to connect to the database: " . $conn->connect_error);
}

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    if (isset($_GET['id_salle'])) {
        $id_salle = $_GET['id_salle'];

        $sql = "SELECT * FROM salles WHERE id_salle = $id_salle";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $salle = $result->fetch_assoc();

            echo json_encode($salle);
        } else {
            echo json_encode("Aucune salle trouvée avec cet ID.");
        }
    } else {
        echo json_encode("L'ID de la salle est manquant dans la requête.");
    }
}

$conn->close();
