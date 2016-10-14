# ffmpeg

Von Datei video.mp4 alle 60 Sekunden einen Screenshot nehmen und unter video-(dreistelliger Zähler).jpg speichern

    ffmpeg -i video.mp4 -vf fps=fps=1/60 video-%03d.jpg

Frame der 1. Sekunde speichern.

    ffmpeg -i video.mp4 -vf fps=fps=1 video-%d.png

## Installieren

    $ brew install ffmpeg


## Infos

<https://ffmpeg.org/> 