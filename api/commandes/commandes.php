<?php

header("Access-Control-Allow-Origin: http://localhost:8888:4200");

// Connection to the database
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "salles";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Failed to connect to the database: " . $conn->connect_error);
}

// Set the HTTP response header to JSON
header("Content-Type: application/json");

// Check the request method
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    // Retrieve all commandes
    $sql = "SELECT * FROM commandes";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Convert the results to an associative array
        $commandes = array();
        while ($row = $result->fetch_assoc()) {
            $commandes[] = $row;
        }

        // Display the results in JSON format
        echo json_encode($commandes);
    } else {
        echo "No commandes found.";
    }
} elseif ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve the data from the POST request
    $id_membre = $_POST["id_membre"];
    $id_produit = $_POST["id_produit"];
    $date_enregistrement = $_POST["date_enregistrement"];

    // Insert the new commande into the database
    $sql = "INSERT INTO commandes (id_membre, id_produit, date_enregistrement)
            VALUES ($id_membre, $id_produit, '$date_enregistrement')";

    if ($conn->query($sql) === TRUE) {
        echo "New commande added successfully.";
    } else {
        echo "Error adding commande: " . $conn->error;
    }
}

// Close the database connection
$conn->close();

?>
