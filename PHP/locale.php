<?php

//Bevorzugte Locale
$loc_de = setlocale (LC_ALL, 'de_DE@euro', 'de_DE', 'de', 'ge');
echo "Preferred locale for german on this system is '$loc_de'";

//bei Probleme mit den Umlauten in Monatsnamen

setlocale (LC_ALL, 'de_DE@euro.UTF-8', 'de_DE.UTF-8', 'de.UTF-8', 'ge.UTF-8');

