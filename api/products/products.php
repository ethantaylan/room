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
    // Retrieve all products
    $sql = "SELECT * FROM produits";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Convert the results to an associative array
        $products = array();
        while ($row = $result->fetch_assoc()) {
            $products[] = $row;
        }

        // Display the results in JSON format
        echo json_encode($products);
    } else {
        echo "No products found.";
    }
} elseif ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve the data from the POST request
    $id_salle = $_POST["id_salle"];
    $date_arrivee = $_POST["date_arrivee"];
    $date_depart = $_POST["date_depart"];
    $prix = $_POST["prix"];
    $etat = $_POST["etat"];

    // Insert the new product into the database
    $sql = "INSERT INTO produits (id_salle, date_arrivee, date_depart, prix, etat)
            VALUES ($id_salle, '$date_arrivee', '$date_depart', $prix, '$etat')";

    if ($conn->query($sql) === TRUE) {
        echo "New product added successfully.";
    } else {
        echo "Error adding product: " . $conn->error;
    }
}

// Close the database connection
$conn->close();

?>
