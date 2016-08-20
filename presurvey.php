<?php
	include("./connection.php");
	$data=json_decode(file_get_contents("php://input"));

	$token=$data->token;
	$com=$data->com;
    $ada=$data->ada;
    $emo=$data->emo;
    $inter=$data->inter;
    $wor=$data->wor;

    $userInfo=$db->query("SELECT userId FROM users WHERE token=$token");
	$userInfo=$userInfo->fetchAll();

	$q = "INSERT INTO presurvey VALUES (:userId,:com,:ada,:emo,:inter,:wor)";
		$query = $db->prepare($q);
		$execute = $query->execute(array(
				":userId" => $userInfo[0][userId],
				":com" => $com,
				":ada" => $ada,
				":emo" => $emo,
				":inter" => $inter,
				":wor" => $wor
		));

    echo json_encode(SECCESS);
?>


