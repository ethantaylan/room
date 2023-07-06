<?php

header("Access-Control-Allow-Origin: *");

// Allow the specific headers required for the request
header("Access-Control-Allow-Headers: Content-Type");

// Allow the specific HTTP methods required for the request
header("Access-Control-Allow-Methods: POST, GET");

// Connexion à la base de données
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "salles";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Échec de la connexion à la base de données : " . $conn->connect_error);
}

// Définition de l'en-tête de la réponse HTTP en JSON
header("Content-Type: application/json");

// Vérification de la méthode de la requête
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    // Récupération de toutes les salles
    $sql = "SELECT * FROM salles";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Conversion des résultats en tableau associatif
        $salles = array();
        while ($row = $result->fetch_assoc()) {
            $salles[] = $row;
        }

        // Affichage des résultats en JSON
        echo json_encode($salles);
    } else {
        echo "Aucune salle trouvée.";
    }
}
