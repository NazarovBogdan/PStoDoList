<?php
require ("header.php");
require ("config.php");
require ("check.php");
$changeRecords =  $_POST['id'];
$sql = "UPDATE recordings SET recording = :recording  WHERE id = '$changeRecords'";
$query = $pdo->prepare($sql);
$query->execute([
    'recording' => RECORDING, 
]);
var_dump($_POST);
?>