<?php

include('../api-template.php');

$titre = $json["titre"];
$description = $json["description"];
$photo = $json["photo"];
$pays = $json["pays"];
$ville = $json["ville"];
$adresse = $json["adresse"];
$cp = $json["cp"];
$capacite = $json["capacite"];
$categorie = $json["categorie"];


// Insert the new avis into the database
$sql = "INSERT INTO salles (titre, description, photo, pays, ville, adresse, cp, capacite, categorie)
VALUES ('$titre', '$description', '$photo', '$pays', '$ville', '$adresse', $cp, $capacite, '$categorie')";

if ($conn->query($sql) === true) {
    echo "New salle added successfully.";
} else {
    echo "Error adding avis: " . $conn->error;
}

$conn->close();
