<?php
	include("./connection.php");
	$data=json_decode(file_get_contents("php://input"));
	$info=[];
	$arr=[];
	$avg=[];

	$userInfo=$db->query("SELECT userId FROM sectionScores");
	$userInfo=$userInfo->fetchAll();	
	for($i=0;$i<sizeof($userInfo);$i++)
	{
		$val=$userInfo[$i][0];
		array_push($arr, $val);
	}
	array_push($info, $arr);
	$arr=[];

	$userInfo=$db->query("SELECT Communication FROM sectionScores");
	$userInfo=$userInfo->fetchAll();
	for($i=0;$i<sizeof($userInfo);$i++)
	{
		$val=$userInfo[$i][0];
		array_push($arr, $val);
	}	
	array_push($avg, (array_sum($arr)/sizeof($arr))/2);
	array_push($info, $arr);
	$arr=[];

	$userInfo=$db->query("SELECT Adaptability FROM sectionScores");
	$userInfo=$userInfo->fetchAll();
	for($i=0;$i<sizeof($userInfo);$i++)
	{
		$val=$userInfo[$i][0];
		array_push($arr, $val);
	}
	array_push($avg, (array_sum($arr)/sizeof($arr))/2);
	array_push($info, $arr);
	$arr=[];

	$userInfo=$db->query("SELECT Emotional_Intelligence FROM sectionScores");
	$userInfo=$userInfo->fetchAll();
	for($i=0;$i<sizeof($userInfo);$i++)
	{
		$val=$userInfo[$i][0];
		array_push($arr, $val);
	}
	array_push($avg, (array_sum($arr)/sizeof($arr))/2);
	array_push($info, $arr);
	$arr=[];

	$userInfo=$db->query("SELECT Interpersonal_Skills FROM sectionScores");
	$userInfo=$userInfo->fetchAll();
	for($i=0;$i<sizeof($userInfo);$i++)
	{
		$val=$userInfo[$i][0];
		array_push($arr, $val);
	}
	array_push($avg, (array_sum($arr)/sizeof($arr))/2);
	array_push($info, $arr);
	$arr=[];

	$userInfo=$db->query("SELECT Work_Ethics FROM sectionScores");
	$userInfo=$userInfo->fetchAll();
	for($i=0;$i<sizeof($userInfo);$i++)
	{
		$val=$userInfo[$i][0];
		array_push($arr, $val);
	}
	array_push($avg, (array_sum($arr)/sizeof($arr))/2);
	array_push($info, $arr, $avg);
	$arr=[];

	if (count($userInfo) >= 1)
	{
		echo json_encode($info);
	} 

	else 
	{
		echo json_encode(null);
	}
	
?>