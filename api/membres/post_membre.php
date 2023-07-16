<?php

include('../api-template.php');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Récupération des données de la requête POST
    $pseudo = $json["pseudo"];
    $mdp = $json["mdp"];
    $nom = $json["nom"];
    $prenom = $json["prenom"];
    $email = $json["email"];
    $statut = $json["statut"];
    $date_enregistrement = date("Y-m-d H:i:s");

    // Check if the pseudo already exists in the database
    $sql_check = "SELECT COUNT(*) AS count FROM membres WHERE pseudo = '$pseudo'";
    $result = $conn->query($sql_check);
    $row = $result->fetch_assoc();
    $count = $row["count"];

    if ($count > 0) {
        // Pseudo already exists, return an error message to the frontend
        echo "Le pseudo '$pseudo' est déjà pris. Veuillez en choisir un autre.";
        http_response_code(404);

    } else {
        // Insert the new member into the database
        $sql = "INSERT INTO membres (pseudo, mdp, nom, prenom, email, statut, date_enregistrement)
                VALUES ('$pseudo', '$mdp', '$nom', '$prenom', '$email', $statut, '$date_enregistrement')";

        if ($conn->query($sql) === TRUE) {
            echo "Nouveau membre ajouté avec succès.";
            http_response_code(200);
            ;
        } else {
            echo "Erreur lors de l'ajout du membre : " . $conn->error;
            
        }
    }
}

$conn->close();
