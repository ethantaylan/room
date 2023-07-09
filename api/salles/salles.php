<?php

include('../api-template.php');

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
