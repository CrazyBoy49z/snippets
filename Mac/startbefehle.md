# Startprobleme

## Startbefehle

* ⌘-⌥-P-R: Reset NVRAM.
* ⇧: Safe Mode.
* ⌥: Startup Manager.
* D: Apple Hardware Test
* ⌥-D: Apple Hardware Test over the Internet.
* ⌘-R: OS X Recovery. 
* ⌘-⌥-R: OS X Recovery over the Internet.
* ⌘-S: single-user mode.
* T: target disk mode.
* X: Start up from an OS X startup volume when the Mac would otherwise start up from a non-OS X startup volume.
* C: Start up from a bootable drive
* ⇧+⌥+⌃+⌽ Reset SMC
* ⌘-V: verbose mode
* N: Start up from a compatible NetBoot server.
* ⌥-N: Start up from a NetBoot server using the default boot image.

## Einstellungen

* Systemeinstellungen > Startvolume: aktivieren

## Probleme beim Aufwachen


reboot into Recovery mode
open terminal
type: csrutil disable
reboot
try to remove the image again with SIP disabled

* `sudo rm /var/vm/sleepimage` löscht Hibernation-Datei
