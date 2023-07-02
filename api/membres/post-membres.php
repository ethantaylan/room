<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
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

$conn->close();

?>