<?php
session_start();

$username = $_POST['name'];
$email= $_POST["email"];
$password = $_POST['password'];

$conn = mysqli_connect("localhost", $username="Jaipal", $password="root", $database="data");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

mysqli_query($conn, "CREATE TABLE if not exists userData(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name varchar(15),
    email varchar(20),
    passwd varchar(10)
)");
$sql = "INSERT INTO userData(name, email, passwd) VALUES('$username', '$email', '$password')";
$conn->query($sql);
$conn->close();

header("Location: Codding_hub.html");
?>
