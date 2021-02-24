<?php
    include 'db_info.php';
    session_start();

    $voti = array();

    $query = "SELECT voto, cfu, esame, anno FROM valutazione
              WHERE username = '{$_SESSION['name']}'
              ORDER BY voto DESC";
	$result = $con->query($query);

    $i = 0;

    while($row = $result->fetch_array())
    {
        $voti[$i] = $row['voto'];
        $i++;
        $voti[$i] = $row['cfu'];
        $i++;
        $voti[$i] = $row['esame'];
        $i++;
        $voti[$i] = $row['anno'];
        $i++;
    }

    // '{}'

    print json_encode($voti);

?>