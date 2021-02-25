<?php
require ("header.php");
require ("config.php");
$deleteItem =  $_POST['id'];
$query = $pdo->query("DELETE FROM `recordings` WHERE id = '$deleteItem'");
?>