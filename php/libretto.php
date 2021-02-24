<?php
    session_start();
    include 'db_info.php';

    // se l'utente non è loggato torna alla pagina accedi
    if (!isset($_SESSION['loggedin'])) {    // variabile definita in autenticate.php
    	header('Location: index.html');
    	exit;
    }
?>

<html>
    <head>
        <title>LibrettoWeb</title>
        <link rel="stylesheet" href="../css/libretto.css">
        <link rel="shortcut icon" href="../img/notebooks.ico" type="image/x-icon">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
    <body onload="mostraVoti()">
        <?php
            print '<h1>Il libretto di '.$_SESSION['name'].'</h1>';
        ?>
        <table id="riepilogo_voti">
            <h3>Riepilogo Voti</h3>
            <tr>
                <th>Esame</th>
                <th>Voto</th>
                <th>CFU</th>
                <th>anno</th>
            </tr>
        </table>
        <form id="aggiungi_voto" action="add_voto.php" method="post">
            <h3>Aggiungi un voto</h3>
                <input type="text" name="esame" placeholder="Nome Esame"><br>
                <input type="text" name="voto" placeholder="Voto"><br>
                <input type="text" name="cfu" placeholder="CFU"><br>
                <input type="text" name="anno" placeholder="anno di corso"><br>
                <input type="submit" name="submit">
        </form>
        
        <div id="analytics">
            <h3>Statistiche:</h3>
        </div>
        <div id="simulazione">
            <input type="text" id="voto_sim" placeholder="Voto"><br>
            <input type="text" id="cfu_sim" placeholder="CFU"><br>
            <button onclick="addvoto()">AGGIUNGI <br> VOTO</button>
            <button onclick="reset_simulazione()">RESET <br> SIMULAZIONE</button>
            <div id="div_risultato"></div>
        </div>
        
        <?php
            echo '<p id="anni_laurea">'.$_SESSION['anni_laurea'].'</p>' 
        ?>
        <script src="../js/gestioneVoti.js"></script>
    </body>
</html>