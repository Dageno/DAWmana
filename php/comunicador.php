<?php
include('array.php');
include('ponentes.php');
//Devolvemos el array pasado a JSON como objeto

    if($_GET['datos']=="actividades")
        echo json_encode($actividades['lunes']);
    else if($_GET['datos']=="ponentes")
        echo json_encode($ponentes);
    else
        echo json_encode($actividades[$_GET['datos']]);
?>