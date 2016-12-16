# curl

curl erlaubt es, Einstellungen in der .htaccess zu überprüfen. Bei Erfolg sollte eine 403-Meldung zurückgegeben werden.

## referer überprüfen

    curl --referer  zu-testender-referer  http://deine-site.de/

## user-agent überprüfen

    curl --user-agent "zu-testender-user-agent" http://deine-site.de/