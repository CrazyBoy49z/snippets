# Update

## Umzug auf einen neuen Server mit Update

Bedarf der Überabreitung.

* **altes MODx** kontrollieren, dass  `<base>` keine hart codierte URL enthält, ansonsten durch `<base href="[(site_url)]">`
* **altes MODx** eventuell Nutzer sperren
* **altes MODx** Liste der genutzten Snippets und Plugins (Screenshots vom Backend)
* **altes MODx** Cache löschen
* **altes MODx** Protokolle löschen
* **alter Server** DB: Tabellen optimieren und reparieren, DB sichern
* **alter Server** Dateien herunterladen
* **neuer Server** Verzeichnis einrichten
* **neuer Server** (Sub)Domain anlegen und auf das Verzeichnis richten)
* **neuer Server** Datenbank anlegen, alte Datenbank übertragen, in phpMyAdmin Tabelle optimieren und reparieren
* **neuer Server** Daten von lokal hochladen, `/manager` bis auf `/manager/includes/config,inc.php` ignorerien
* **neuer Server** neue MODx-Installation hochladen
* **neuer Server** siehe security.md
* **eigener Rechner** `manager/includes/config.inc.php` löschen


## GitHub ignore

CVS
assets/cache
assets/files
manager/includes/config.inc.php
assets/images
assets/drgalleries
assets/docs
assets/files
assets/media 
assets/.thumbs
assets/backup
install