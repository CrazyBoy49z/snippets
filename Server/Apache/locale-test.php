<?php
    // Bevorzugte locale testen
    $loc_de = setlocale (LC_ALL, 'de_DE@euro', 'de_DE', 'de', 'ge');
    echo "Preferred locale for german on this system is '$loc_de'";
?>