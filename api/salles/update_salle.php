<?php

include('../api-template.php');

$id_salle = $json["idSalle"];
$titre = $json["titre"];
$description = $json["description"];
$photo = $json["photo"];
$pays = $json["pays"];
$ville = $json["ville"];
$adresse = $json["adresse"];
$cp = $json["cp"];
$capacite = $json["capacite"];
$categorie = $json["categorie"];

// Update the salle in the database
$sql = "UPDATE salles SET titre = '$titre', description = '$description', photo = '$photo', pays = '$pays', ville = '$ville', adresse = '$adresse', cp = $cp, capacite = $capacite, categorie = '$categorie' WHERE id_salle = $id_salle";

if ($conn->query($sql) === true) {
    echo "Salle updated successfully.";
} else {
    echo "Error updating salle: " . $conn->error;
    // You can also check the query that failed by echoing the SQL statement
    // echo ("SQL Query: " . $sql);
}

$conn->close();
