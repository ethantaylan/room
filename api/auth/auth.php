<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET");

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "salles";

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
            // Generate a random token
            $token = bin2hex(random_bytes(16));

            // Update the member's token in the database
            $updateSql = "UPDATE membres SET token = '$token' WHERE pseudo = '$pseudo'";
            $conn->query($updateSql);

            // Fetch the user's data
            $userSql = "SELECT * FROM membres WHERE pseudo = '$pseudo'";
            $userResult = $conn->query($userSql);
            $user = $userResult->fetch_assoc();

            // Return the token and user data as a response
            echo json_encode(['token' => $token, 'user' => $user]);

            // Store the token in the localStorage
            echo "<script>localStorage.setItem('token', '$token');</script>";
        } else {
            echo json_encode(['error' => 'Invalid credentials']);
        }
    } else {
        echo json_encode(['error' => 'Missing credentials']);
    }
} else {
    echo json_encode(['error' => 'Invalid request method']);
}

$conn->close();
?>
