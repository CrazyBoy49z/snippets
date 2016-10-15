# FontsFaceObserver

* basiert auf <https://github.com/bramstein/fontfaceobserver>
* Zusätzlich wird das Skript nur beim ersten Aufruf geladen, dafür die PHP-Dateien anpassen (sind als Snippets für MODx Evo angelegt, lassen sich aber einfach anpassen.)
    

## Verwendung

Einbindung in MODx-Template

    <!DOCTYPE html>[!albisClass!][!fontsloaded!]<html>
    <head></head>
    <body>
    </body>
    [!fontsload.js!] 
    </html>

**Achtung!** Pfade in <a href="/JavaScript/FontFaceObserver/ffo.css">ffo.css</a>, <a href="/JavaScript/FontFaceObserver/ffo.js">ffo.js</a> <a href="/JavaScript/FontFaceObserver/fontsload.js.php">fontsloads.js.php</a> anpassen.

Hinweis: Maximal 3 Fonts verwenden und hier <http://www.fontsquirrel.com/fontface/generator> verkleinern.

Rückfall-Fonts möglichst mit Hilfe von <a href="/JavaScript/FontFaceObserver/fontsCompare.html">fontsCompare.html</a> passend auswählen.