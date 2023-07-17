<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET");

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "room";

error_reporting(E_ALL);

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Failed to connect to the database: " . $conn->connect_error);
}

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['pseudo']) && isset($data['mdp'])) {
        $pseudo = $data['pseudo'];
        $mdp = $data['mdp'];

        $sql = "SELECT * FROM membres WHERE pseudo = '$pseudo' AND mdp = '$mdp'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $updateSql = "UPDATE membres WHERE pseudo = '$pseudo'";
            $conn->query($updateSql);

            // Fetch the user's data
            $userSql = "SELECT * FROM membres WHERE pseudo = '$pseudo'";
            $userResult = $conn->query($userSql);
            $user = $userResult->fetch_assoc();

            echo json_encode($user);
        } else {
            http_response_code(401);
            echo json_encode(['error' => 'Invalid credentials']);
        }
    } else {
        echo json_encode(['error' => 'Missing credentials']);
    }
} else {
    echo json_encode(['error' => 'Invalid request method']);
}

$conn->close();
