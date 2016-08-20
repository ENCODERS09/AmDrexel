<?php
	include("./connection.php");
	$data=json_decode(file_get_contents("php://input"));

	$token=$data->token;
	$score=$data->score;

		$userInfo=$db->query("SELECT userId FROM users WHERE token=$token");
		$userInfo=$userInfo->fetchAll();

		$q = "UPDATE users SET score=:score, test_taken=1 WHERE userId=:userId";
		$query = $db->prepare($q);
		$execute = $query->execute(array(
				":score" => $score,
				":userId" => $userInfo[0][userId]
		));

	echo json_encode($execute);
    
?>