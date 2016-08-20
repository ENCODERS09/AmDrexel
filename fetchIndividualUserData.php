<?php
	include("./connection.php");

	$data = json_decode(file_get_contents("php://input"));
	$searchTerm = $data->searchTerm;

	$userInfo=$db->query("SELECT users.email, users.score, sectionScores.Communication, sectionScores.Adaptability, sectionScores.Emotional_Intelligence, sectionScores.Interpersonal_Skills, sectionScores.Work_Ethics, subSectionScores.Verbal, subSectionScores.Written, subSectionScores.Verbal_Written, subSectionScores.Presentation, subSectionScores.Adaptability, subSectionScores.Stress, subSectionScores.Self_Awareness, subSectionScores.Social_Skills, subSectionScores.Motivation, subSectionScores.Empathy, subSectionScores.Workplace_Attire, subSectionScores.Workplace_Ettiquette, subSectionScores.Initiative, subSectionScores.Accountability, subSectionScores.Trustworthiness  FROM users INNER JOIN sectionScores ON users.userID=sectionScores.userId INNER JOIN subSectionScores ON sectionScores.userID=subSectionScores.userId WHERE email='$searchTerm'");
	$userInfo=$userInfo->fetchAll();

	if (count($userInfo) == 1)
	{
    	echo json_encode($userInfo);	
	} 

	else 
	{
		echo json_encode(null);
	}
	
?>