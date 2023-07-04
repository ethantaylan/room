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
    // Vérification si l'adresse e-mail est fournie
    if (isset($_GET["email"])) {
        $email = $_GET["email"];

        // Récupération du membre avec l'adresse e-mail spécifiée
        $sql = "SELECT * FROM membres WHERE email = '$email'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // Conversion du résultat en tableau associatif
            $member = $result->fetch_assoc();

            // Affichage du résultat en JSON
            echo json_encode($member);
        } else {
            echo "Aucun membre trouvé avec cette adresse e-mail.";
        }
    } else {
        echo "L'adresse e-mail n'est pas fournie.";
    }
} 

// Fermeture de la connexion à la base de données
$conn->close();

?>
