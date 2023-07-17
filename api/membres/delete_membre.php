<?php

include('../api-template.php');

$id_membre = $json['id_membre'];

$sql = "DELETE FROM membres WHERE id_membre = $id_membre";

if($conn->query($sql) === TRUE) {
    echo json_encode("Deleted membre with id: $id_membre");
} else {
    echo json_encode("Error when deleting membre $id_membre");
}

$conn->close();