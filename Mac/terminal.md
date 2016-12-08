# Terminalbefehle

## Inhalt aller Dateien in eine kopieren

    $ cat *.txt > all.txt
    $ /Users/Mazso/DatMazso/temporär/pw/*.txt > /Users/Mazso/DatMazso/temporär/pw/merg.txt
    
## Größe vom Dock nicht veränderbar

    $ defaults write com.apple.dock size-immutable -bool false
    $ killall Dock
    
## Alle Programm-Namen in eine Datei schreiben

    $ sudo find / -iname *.app > ~/Desktop/AllApps.txt
    
## Versteckte Dateien im Fidner zeigen

    $ defaults write com.apple.finder AppleShowAllFiles 1
    $ killall Finder