<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['name'];
    $email= $_POST["email"];
    $password = $_POST['password'];

    $host = "localhost";
    $user = "Jaipal";
    $passwd = "root";
    $dbname = "myDB";

    $conn = mysqli_connect($host, $user, $passwd, $dbname);

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
    $result = mysqli_query($conn, $sql);
    mysqli_close($conn);
}
header("Location: Codding_hub.html");
?>