<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
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
} elseif ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Récupération des données de la requête POST
    $pseudo = $_POST["pseudo"];
    $mdp = $_POST["mdp"];
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $email = $_POST["email"];
    $civilite = $_POST["civilite"];
    $statut = $_POST["statut"];
    $date_enregistrement = date("Y-m-d H:i:s");

    // Insertion du nouveau membre dans la base de données
    $sql = "INSERT INTO membres (pseudo, mdp, nom, prenom, email, civilite, statut, date_enregistrement)
            VALUES ('$pseudo', '$mdp', '$nom', '$prenom', '$email', '$civilite', $statut, '$date_enregistrement')";

    if ($conn->query($sql) === TRUE) {
        echo "Nouveau membre ajouté avec succès.";
    } else {
        echo "Erreur lors de l'ajout du membre : " . $conn->error;
    }
}

// Fermeture de la connexion à la base de données
$conn->close();

?>
