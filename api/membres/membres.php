<?php

header("Access-Control-Allow-Origin: *");

// Allow the specific headers required for the request
header("Access-Control-Allow-Headers: Content-Type");

// Allow the specific HTTP methods required for the request
header("Access-Control-Allow-Methods: DELETE");

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
    // Récupération de tous les membres
    $sql = "SELECT * FROM membres";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Conversion des résultats en tableau associatif
        $members = array();
        while ($row = $result->fetch_assoc()) {
            $members[] = $row;
        }

        // Affichage des résultats en JSON
        echo json_encode($members);
    } else {
        echo "Aucun membre trouvé.";
    }
} 

// Fermeture de la connexion à la base de données
$conn->close();

?>
