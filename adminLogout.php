<?php 
	include('./connection.php');
	$data = json_decode(file_get_contents("php://input"));
	$token = $data->token;
	
	$db->query("UPDATE admin SET token='LOGGED OUT' WHERE token=$token");
	echo SUCCESS;
?>