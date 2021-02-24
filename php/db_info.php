
<?php
        // connessione al db
		$con = new mysqli("localhost", "root", "", "libretto");

		if (mysqli_connect_errno()) {
		    printf("Connect failed: %s\n", mysqli_connect_error());
		    exit();
		}


?>
