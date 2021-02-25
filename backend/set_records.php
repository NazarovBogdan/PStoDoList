<?php
require ("header.php");
require ("config.php");
$idDay =  $_GET['id'];
$query = $pdo->query("SELECT * FROM `recordings` WHERE `parentId` = '$idDay'");
$Recordings = [];
    while($row = $query->fetch(PDO::FETCH_OBJ)) {
        
        for ($id=0; $id < strlen($id); $id++) {
            array_push($Recordings, $row);   
        };
    };      
    echo json_encode($Recordings, JSON_UNESCAPED_UNICODE);
?>