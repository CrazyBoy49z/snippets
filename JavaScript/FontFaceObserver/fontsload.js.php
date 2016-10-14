<?php

/* Snippet für MODx Evo [[fontsload.js]], verlangt [[albisClass]] */

$albisFonts = new Albis;
    if (!isset($_COOKIE['fonts'])) {
        /* Inkludiert beim ersten Aufruf eine JS-Datei zur Steuerung des Webfonts-Aufrufs. */
        $albisFonts->includePath = "/path-to/ffo.js";
        $albisFonts->fileInclude();
    }
?>