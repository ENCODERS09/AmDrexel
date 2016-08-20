<?php
	include("./connection.php");

	$userInfo=$db->query("SELECT users.email, users.score, sectionScores.Communication, sectionScores.Adaptability, sectionScores.Emotional_Intelligence, sectionScores.Interpersonal_Skills, sectionScores.Work_Ethics FROM users INNER JOIN sectionScores ON users.userID=sectionScores.userId");
	$userInfo=$userInfo->fetchAll();

	

	if (count($userInfo) >= 1)
	{
    	echo json_encode($userInfo);	
	} 

	else 
	{
		echo json_encode(null);
	}
	
?>