<?php 

include('../api-template.php');

$id_salle = $json['id_salle'];

$sql = "DELETE FROM salles WHERE id_salle = $id_salle";

if($conn->query($sql) === TRUE) {
    echo json_encode("Deleted salle with id: $id_salle");
} else {
    echo json_encode("Error when deleting salle $id_salle");
}

$conn->close();