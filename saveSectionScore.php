<?php
	include("./connection.php");
	$data=json_decode(file_get_contents("php://input"));

	$token=$data->token;
	$sectionsScore=$data->sectionsScore;
	$subSectionsScore=$data->subSectionsScore;

		$userInfo=$db->query("SELECT userId FROM users WHERE token=$token");
		$userInfo=$userInfo->fetchAll();

		$q = "INSERT INTO sectionScores VALUES (:userId,:Communication,:Adaptability,:Emotional_Intelligence,:Interpersonal_Skills,:Work_Ethics)";
		$query = $db->prepare($q);
		$execute = $query->execute(array(
				":userId" => $userInfo[0][userId],
				":Communication" => $sectionsScore[0],
				":Adaptability" => $sectionsScore[1],
				":Emotional_Intelligence" => $sectionsScore[2],
				":Interpersonal_Skills" => $sectionsScore[3],
				":Work_Ethics" => $sectionsScore[4]
		));

		$q = "INSERT INTO subSectionScores VALUES (:userId,:Verbal,:Written,:Verbal_Written,:Presentation,:Adaptability,:Stress,:Self_Awareness,:Social_Skills,:Motivation,:Empathy,:Workplace_Attire,:Workplace_Ettiquette,:Initiative,:Accountability,:Trustworthiness)";
		$query = $db->prepare($q);
		$execute = $query->execute(array(
				":userId" => $userInfo[0][userId],
				":Verbal" => $subSectionsScore[0][0],
				":Written" => $subSectionsScore[0][1],
				":Verbal_Written" => $subSectionsScore[0][2],
				":Presentation" => $subSectionsScore[0][3],
				":Adaptability" => $subSectionsScore[1][0],
				":Stress" => $subSectionsScore[1][1],
				":Self_Awareness" => $subSectionsScore[2][0],
				":Social_Skills" => $subSectionsScore[2][1],
				":Motivation" => $subSectionsScore[2][2],
				":Empathy" => $subSectionsScore[2][3],
				":Workplace_Attire" => $subSectionsScore[3][0],
				":Workplace_Ettiquette" => $subSectionsScore[3][1],
				":Initiative" => $subSectionsScore[4][0],
				":Accountability" => $subSectionsScore[4][1],
				":Trustworthiness" => $subSectionsScore[4][2]
		));

	echo json_encode(SECCESS);
    
?>