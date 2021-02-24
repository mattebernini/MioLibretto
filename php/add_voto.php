<?php
    session_start();
    include 'db_info.php';

    // controllo se l'utente ha inserito tutto
    if ( !isset($_POST['voto'], $_POST['esame'], $_POST['cfu']) ) {
    	header('input non valido!');
    }
    if($_POST['voto'] < 18 | $_POST['voto'] > 33){
    	exit('input non valido!');
    }
    if(!$_POST['voto'] | !$_POST['cfu'])
        exit('input non valido!');

    $nomeUtente = $_SESSION['name'];
    $voto = $_POST['voto'];
    $esame = $_POST['esame'];
    $cfu = $_POST['cfu'];
    $anno = $_POST['anno'];
    
    $query = "INSERT INTO valutazione(username, voto, cfu, esame, anno)
        VALUES('{$nomeUtente}','{$voto}','{$cfu}','{$esame}','{$anno}')";

    if ($result = $con->query($query)) {
        echo $esame."  ".$voto ;
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($con);
    }
?>