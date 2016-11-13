# Update

## Umzug auf einen neuen Server mit Update

* **altes MODx** kontrollieren, dass `<base href="[(site_url)]">` hält kontrollieren und keien hart codierte Adresseenthält und nicht hart codiert wurde
* **altes MODx** Nutzer sperren
* **altes MODx** Liste der Snippets und Plugins
* **altes MODx** Cache löschen
* **altes MODx** Protokolle löschen
* **alter Server** Dateien herunterladen
* **neuer Server** Verzeichnis einrichten
* **neuer Server** (Sub)Domain anlegen und auf das Verzeichnis richten)
* **neuer Server** Datenbank anlegen, alte Datenbank übertragen, in phpMyAdmin Tabelle optimieren und reparieren
* **neuer Server** Daten von lokal hochladen
* **neuer Server** neue MODx-Installation hochladen, dabei ausklammern `assets/galleries assets/images assets/drimages assets/cache assets/docs assets/files assets/media assets/.thumbs assets/backup` und ähnliche ausklammern, Daten *nicht* überschreiben, sondern nur aktualiseren und ergänzen, überflüssige Snippets und Plugins weglassen
* **neuer Server** obige Ordner auf chmod 775 setzen, darin enthalten chmod 644, `assets/cache/siteCache.idx.php` und `assets/cache/sitePublishing.idx.php` chmod 777
* **neuer Server** `/manager/includes/config.inc.php` chmod 777
* **neuer Server** `.htaccess`anpassen
* **neues MODx** Installation starten: Fortgeschrittenen Modus wählen, neue Datenbankverbindung auswählen, alle Chunks und Tempalte Variablen abwählen, bei Bedarf Rechte korrigieren
* **neues MODx** Login, `assets`-Pfade in der Konfiguration anpassen
* **neues MODx** Frontend aufrufen. Häufige Probleme: falsche Berechtigung, dann zunächst einfach für die entsprechende Bilddatei korriergieren. Wnn Snippets mit dem include-Snippet aufgerufen wurden, kann vor allem Wayfinder herumzicken - dann direkt aufrufen
* **neues MODx**: `/install` löschen, möglichst überflüssige Plugins und Snippets in `/assets` löschen
* **neues MODx**: Dateien in `/manager` und `/assets/` chmod 644, anschließend `/assets/cache/sitePublishing.idx.php` und `/assets/cache/siteCache.idx.php`chmod 777; `/manager/includes/config.inc.php`, `/index.php` und `.htaccess` chmod 444; Verzeichnis, dass die Isntallation enthält, chmod 445
* **eigener Rechner** `manager/includes/config.inc.php` löschen


## GitHub ignore

CVS
assets/cache
assets/files
manager/includes/config.inc.php
assets/images
assets/drgalleries
assets/docs
asstes/files
assets/media 
assets/.thumbs
assets/backup