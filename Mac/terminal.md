# Terminalbefehle

## Inhalt aller Dateien in eine kopieren

    $ cat *.txt > all.txt
    $ /Users/Mazso/DatMazso/temporär/pw/*.txt > /Users/Mazso/DatMazso/temporär/pw/merg.txt
    
## Größe vom Dock nicht veränderbar

    $ defaults write com.apple.dock size-immutable -bool false
    $ killall Dock
    
## Alle Programm-Namen in eine Datei schreiben

    $ sudo find / -iname *.app > ~/Desktop/AllApps.txt
    
## Versteckte Dateien im Finder zeigen

    $ defaults write com.apple.finder AppleShowAllFiles 1
    $ killall Finder
    
## Pfad im Finderfesnter anzeigen

    $ defaults write com.apple.finder _FXShowPosixPathInTitle -bool true
    
## Prozess stoppen und wieder starten

    $ killall -STOP iTunes
    $ killall -CONT iTunes

## Quellen

* <https://github.com/hjuutilainen/dotfiles/blob/master/bin/osx-user-defaults.sh>
* <https://gist.github.com/wtw/2558338>
* <https://www.heise.de/mac-and-i/artikel/macOS-Die-besten-Befehle-fuers-Terminal-3504825.html>
* <https://www.heise.de/mac-and-i/artikel/macOS-Terminal-Das-kleine-Einmaleins-der-Kommandozeile-3463440.html?artikelseite=5>


