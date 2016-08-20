<?php
	include("./connection.php");
	$data=json_decode(file_get_contents("php://input"));


	$username=$data->username;
	$password=$data->password;

	$userInfo=$db->query("SELECT * FROM admin WHERE email='$username' AND password='$password'");
	$userInfo=$userInfo->fetchAll();

	

	if (count($userInfo) == 1)
	{
		//This means that the user is logged in and let's givem a token :D :D :D
		$token = $username . " | " . uniqid() . uniqid() . uniqid();

		$q = "UPDATE admin SET token=:token WHERE email=:email AND password=:password";
		$query = $db->prepare($q);
		$execute = $query->execute(array(
				":token" => $token,
				":email" => $username,
				":password" => $password
		)); 

    	echo json_encode($token);
    	
	} 

	else 
	{
		echo json_encode(null);
	}
	
?>