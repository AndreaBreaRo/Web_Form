<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<link rel="stylesheet" type="text/css" href="p1.css"/>
<script type="text/javascript" src="p1.js"></script>
</head>
<body>

<h1 class="titulo2">DATOS ENVIADOS DEL FORMULARIO</h1>
	<?php

	if($_SERVER['REQUEST_METHOD']=="POST"){
		
		$nombre = $_POST['cname'];
		$login = $_POST['clogin'];
		$psswd = $_POST['cpasswd'];
		$dni = $_POST['cdni'];
		$email = $_POST['cemail'];
		
		if (isset($_POST['cfile'])){
			echo $_POST['cfile'];
		}
		
		$edad = $_POST['cage'];
		
		if(isset($_POST['cgenre']) ){
			$checklist =$_POST['cgenre'];
		}
		else{
			$checklist=null;
		}
		
		$text = $_POST['ccomment'];
		$internet = $_POST['cInternet'];
		$navegador = $_POST['cbrowser'];
		$fecha = $_POST['cdate'];
		
		
		
		//Variables de entorno
		$puerto = $_SERVER['SERVER_PORT'];
		$host = $_SERVER["HTTP_HOST"];
		$dirrem = $_SERVER["REMOTE_ADDR"];
		$useragent = $_SERVER["HTTP_USER_AGENT"];
		$software = $_SERVER["SERVER_SOFTWARE"];
		$puertorem = $_SERVER["REMOTE_PORT"];
		$serverad = $_SERVER["SERVER_ADDR"];
		
		
	}else{
		
		$nombre = $_GET['cname'];
		$login = $_GET['clogin'];
		$psswd = $_GET['cpasswd'];
		$dni = $_GET['cdni'];
		$email = $_GET['cemail'];
		
		if (isset($_GET['cfile'])){
			echo $_GET['cfile'];
		}
		
		$edad = $_GET['cage'];
		
		if(isset($_GET['cgenre']) ){
			$checklist =$_GET['cgenre'];
		}
		else{
			$checklist=null;
		}
		
		$text = $_GET['ccomment'];
		$internet = $_GET['cInternet'];
		$navegador = $_GET['cbrowser'];
		$fecha = $_GET['cdate'];
		
		
		
		//Variables de entorno
		$puerto = $_SERVER['SERVER_PORT'];
		$host = $_SERVER["HTTP_HOST"];
		$dirrem = $_SERVER["REMOTE_ADDR"];
		$useragent = $_SERVER["HTTP_USER_AGENT"];
		$software = $_SERVER["SERVER_SOFTWARE"];
		$puertorem = $_SERVER["REMOTE_PORT"];
		$serverad = $_SERVER["SERVER_ADDR"];
			
	}

	
	phpinfo();
	
?>
	
<div class="firma">Andrea Brea Rodríguez</div><?php
?>

</body>
	
