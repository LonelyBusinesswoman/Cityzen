<?php
	$name = $_POST["name"];
	$tel = $_POST["tel"];
	$email = $_POST["email"];
	$message = "Имя: %s \nТелефон: %s \ne-mail: %s";
	$message = sprintf($message, $name, $tel, $email);
	mail("test@mail.ru", "Заявка с сайта", $message);
 ?>