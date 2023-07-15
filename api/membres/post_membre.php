<?php

include('../api-template.php');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Récupération des données de la requête POST
    $pseudo = $json["pseudo"];
    $mdp = $json["mdp"];
    $nom = $json["nom"];
    $prenom = $json["prenom"];
    $email = $json["email"];
    $civilite = $json["civilite"];
    $statut = $json["statut"];
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

$conn->close();
