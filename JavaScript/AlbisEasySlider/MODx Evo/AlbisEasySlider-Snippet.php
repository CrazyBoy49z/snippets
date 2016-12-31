<?php
$docID = $modx->documentIdentifier;
$foto1 = $modx->getTemplateVarOutput('bild1'.$i, $docID,'1');
$foto2 = $modx->getTemplateVarOutput('bild2', $docID,'1');
/*
Für Bilder im Slider werden 2 Chunks benutzt: Fürs erste eines, das src und srcset als Attribute verwendet, die anderen erhalten statt dessen data-src und data-srcset, die mit JS umgeschrieben werden
*/
// 2. Bild-TV benutzt? Erzeuge Slider
if (!empty($foto2['bild2'])) {
    if (!empty($foto1['bild1'])) {
		// für das erste Bild im Slider
        $firstSlide;
        $titel1 = $modx->getTemplateVarOutput('bildtext1', $docID,'1');
		// 2 Platzhalter
        $firstSlideSnippet['img'] = $foto1['bild1'];
        $firstSlideSnippet['figcaption'] = $titel1['bildtext1'];
		// Chunk: firstSlide
		// $modx->parseChunk('Name-des-Chunks', $platzhalter, $platzhalter umschließende Zeichen');
        $firstSlide = $modx->parseChunk('firstSlide', $firstSlideSnippet, '[+', '+]'); 
    }    
    
    $otherSlides = [];
    
    for($i=2; $i<=5; $i++) {
		// ab 2. Bild
        $foto = $modx->getTemplateVarOutput('bild'.$i, $docID,'1');
        if (!empty($foto['bild'.$i])) {
            $titel = $modx->getTemplateVarOutput('bildtext'.$i, $docID,'1');
			// 2 Platzhalter
            $otherSlidesSnippets['img'] = $foto['bild'.$i];
            $otherSlidesSnippets['figcaption'] = $titel['bildtext'.$i];
			// chunk: otherSlides
			// $modx->parseChunk('Name-des-Chunks', $platzhalter, $platzhalter umschließende Zeichen');
			// [] Ausgabe als Array
            $otherSlides[] = $modx->parseChunk('otherSlides', $otherSlidesSnippets, '[+', '+]');
        }
    }
    
	// bilder ab zweiten Bild zählen, 1 fürs erste Bild addieren, dann für die Breite und class dvon <div id="slide"> nutzten
    $countSlides = count($otherSlides) + 1;
    

    echo '<section id="imageslider"><div id="slidercontainer"><div id="slide" class="sliders' . $countSlides . '" style="width:' . $countSlides . '00%">';
	// Chunk erstes Bild ausgeben
    echo $firstSlide;
	// Chunk für weitere Bilder in String umwandeln und ausgeben
    echo implode('', $otherSlides);
    echo '</div><button id="prevslide">zurück</button><button id="nextslide">vor</button></div></section>';
}


// 2. Bild-TV unbenutzt? Erzeuge Einzelbild
else {
    if (!empty($foto1['bild1'])) {
        $singleImg;
        $titel1 = $modx->getTemplateVarOutput('bildtext1', $docID,'1');
        $singleImgSnippet['img'] = $foto1['bild1'];
        $singleImgSnippet['figcaption'] = $titel1['bildtext1'];
		// Chunk für Einzelbild: singleImg
		// $modx->parseChunk siehe oben
        $singleImg = $modx->parseChunk('singleImg', $singleImgSnippet, '[+', '+]');
		echo $singleImg;
    }
}
