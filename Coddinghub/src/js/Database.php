<?php
$conn= mysqli_connect("localhost", $username ="Jaipal", $password="root");
$conn->query("CREATE DATABASE data");
$conn->query("USE data");
$conn->query("CREATE TABLE userData(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    name varchar(15), 
    email varchar(20), 
    passwd varchar(10) 
)");
$conn->commit();
$conn->close();
?>
