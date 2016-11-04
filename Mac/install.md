# Installation

## Stick für Clean Install

1. Installer herunterladen
2. SHA1 Checksum von `shasum /Applications/Install\ OS\ X\ *.app/Contents/SharedSupport/InstallESD.dmg` vergleichen mit (https://github.com/notpeter/apple-installer-checksums)
3. Stick mit Namen "Untitled" formatieren
3. `sudo /Applications/Install\ OS\ X\ El\ Capitan.app/Contents/Resources/createinstallmedia --volume /Volumes/Untitled --applicationpath /Applications/Install\ OS\ X\ El\ Capitan.app`