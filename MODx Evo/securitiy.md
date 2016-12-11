# Sicherheit MODx 1.x

Version 1.0

## Überprüfen

- htaccess umbennen
- Evocheck laufen lassen: Skripte und datenbanekn bereinigen
- unter /assets händsich auf verdächtige Dateien/Ordner prüfen
- htacces wieder zuschalten
- Daten und DB sichern (außerhalb der Arbeitskopie)

## Überflüssige Skripte löschen/nicht installieren

### Modules

- Evogallery

### Plugins

- dirextResize
- **qm**
- **tinymce**

### Snippets

- **ajaxSearch**
- DocLister
- eForm
- memberCheck
- personalize
- quill
- reflect
- weblogin

## Sicherheitsflicken

- Sicherheitspatch einspielen (Achtung! Für eine nachträglich installierte EvoGalley muss der dafür vorgesehene Patch erneut eingespielt werden)
- .htaccess für Unterverzeichnisse einspielen

## CHMOD

Einstellungen gelten nur für CGI!

- Verzeichnisse chmod 755
- Dateien max. chmod 644
- alle *.php 600
- index.php und /manager/includes/config.inc.php chmod 400

## TSL (https://)

- Let's encrypt aktivieren und erzwingen
- Umleitung in .htaccess auf https:// einschalten
- CSP-Header base-uri in .htacces und index.php aktivieren
- Domain im `<head>` href in `<base>` und `<link rel="canonical">` und `<link rel="alternate" hreflang="de">` anpassen
- im Manager unter Konfiguration -> Seiten "Servertyp" auf https setzen

## Webmaster-Tools

- Google-Datei löschen
- die Domain betreffende Einträge im Webmaster-Tools löschen
- neu anmelden mit Eintrag im head

# Abschluss

- nochmals Evocheck
- Rechte überprüfen, insbesondere für index.php und config.inc.php
- im Manager unter Konfiguraton -> Sonstiges die Art der hochladabren Dateitypen auf eine Minum begrenzen, ebenso die Dateigröße
- Passwort ändern
- Daten und DB sichern (wiederum außerhalb der lokalen Arbeitskopie)
- testen, testen, testen





