<?php
//require_once("config.php");

// send email
if($_POST['type'] == "1") {

	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$body = $_POST['message'];

	if (mail($email, $subject, $body)) {
	
	echo("Message successfully sent!");
	} else {
	echo("Message delivery failed.  Please try again.");
	}

}

?>
