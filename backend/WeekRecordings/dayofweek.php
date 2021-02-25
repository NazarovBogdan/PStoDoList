<?php

require ("config.php");

$query = $pdo->query('SELECT * FROM `day`');

$Days = [];

    while($row = $query->fetch(PDO::FETCH_OBJ)) {
        
        for ($id=0; $id < strlen($id); $id++) {

            array_push($Days, $row);
             
        };
    };      
   
    echo json_encode($Days, JSON_UNESCAPED_UNICODE);
?>    