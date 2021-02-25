<?php
require("header.php");
require("config.php");
require("check.php");
$sql = "INSERT INTO recordings(recording, parentId, isChange, userId) VALUES (:recording, :parentId, :isChange, :userId)";
$query = $pdo->prepare($sql);
$query->execute([
    'recording' => RECORDING, 
    'parentId' => PARENTID,
    'isChange' => ISCHANGE,
    'userId' => USERID
]);
echo json_encode($_POST, JSON_UNESCAPED_UNICODE);
?>