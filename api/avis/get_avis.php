<?php

include('../api-template.php');

// Check the request method
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    // Retrieve all avis
    $sql = "SELECT * FROM avis";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Convert the results to an associative array
        $avis = array();
        while ($row = $result->fetch_assoc()) {
            $avis[] = $row;
        }

        // Display the results in JSON format
        echo json_encode($avis);
    } else {
        echo json_encode([]);
    }
}
// Close the database connection
$conn->close();
