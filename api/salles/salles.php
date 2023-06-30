<?php

header("Access-Control-Allow-Origin: http://localhost:8888:4200");

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
} elseif ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Récupération des données de la requête POST
    $titre = $_POST["titre"];
    $description = $_POST["description"];
    $photo = $_POST["photo"];
    $pays = $_POST["pays"];
    $ville = $_POST["ville"];
    $adresse = $_POST["adresse"];
    $cp = $_POST["cp"];
    $capacite = $_POST["capacite"];
    $categorie = $_POST["categorie"];

    // Insertion de la nouvelle salle dans la base de données
    $sql = "INSERT INTO salles (titre, description, photo, pays, ville, adresse, cp, capacite, categorie)
            VALUES ('$titre', '$description', '$photo', '$pays', '$ville', '$adresse', $cp, $capacite, '$categorie')";

    if ($conn->query($sql) === TRUE) {
        echo "Nouvelle salle ajoutée avec succès.";
    } else {
        echo "Erreur lors de l'ajout de la salle : " . $conn->error;
    }
}

// Fermeture de la connexion à la base de données
$conn->close();

?>
