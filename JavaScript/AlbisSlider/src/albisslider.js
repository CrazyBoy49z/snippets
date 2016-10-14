/* hier jQuery Code */


jQuery.fn.albisSlider = function() {
	// class der einzelnen Slides
	var $slide = $('.slide'),
	// Zahl der Slides
	 	$sliderlength = $slide.length,
    // ID des äußeren Containers
	 	$slider = $('#slider');

	// wenn kein Cookie "Slide", beim Seitenaufruf erstes Slide anzeigen, ansonsten das zuvor angezeigte
	if( $.cookie('slide') == null ){
	 	$thisSlide = 0;
	} else {
	 	$thisSlide = $.cookie('slide');
	}
    
    // string als integer	
	$thisSlide = parseInt($thisSlide);
	
	// setzt den Container mit den Slides auf die Breite des ihn umschließenden Div mal der Anzahl der Slides
	$('#slidercontent').css('width',($sliderlength*100)+'%');
	
	// Position left auf 0 
	// Breite des einzlenen Slide = 100 / Zahl der Slides
	// tabindex setzen
	// in ARIA verbergen
	$slide.css('left','0%').css('width',(100/$sliderlength)+'%').attr("tabindex",-1).attr('aria-hidden', 'true');
	// erstes Slide für ARIA anzeigen
	$slide.first().attr('aria-hidden', 'false');

	$(document).ready(function() {
		focusMarker();	
	});
	
	// weist jedem Slide eine ID zu
	$slide.attr( "id", function( i, val ) {
		return "slide" + i;
	});
	// HTML für Steuerung
	$slider.append('<div aria-controls="slidercontent"><div id="sliderbuttons"><button id="prevslide">zurück</button><button id="nextslide">vor</button></div><ul id="slidecontrol" role="tablist"></ul></div>');
	
	// Variablen für Vor- und Zurück-Button
	var $prevSlideButton = $('#prevslide'),
	 	$nextSlideButton = $('#nextslide');
	 	
	// Zurück-Button verbergen 	
	$prevSlideButton.hide();
	
	// Einbau der Positions-Anzeige
	var $slidecontrol = $('#slidecontrol');
	for (var i = 0; i < $sliderlength; i++) {
		$slidecontrol.append('<li data-number="' + i + '" id="marker' + i + '" role="tab" aria-controls="slide' + i + '">Artikel ' + (i+1) + ' </li>');
	}
	
	$slider.show();
	slideSlides();
	
	showHideButtons();


	
	
	// Steuerung über die Liste
	var $directslide = $slidecontrol.find('li')
	$directslide.click(function () {
		// liest die Nummer des Slides aus der Liste
		$thisSlide = $(this).data('number');
		showHideButtons();
		slideSlides();
		focusMarker();
	});
	
	
	
	function showHideButtons() {
	
		if($thisSlide == $sliderlength-1){
			$nextSlideButton.hide();
		}
		else {
			$nextSlideButton.show();
		}
		if($thisSlide == '0'){
			$prevSlideButton.hide();
		}
		else {
			$prevSlideButton.show();
		}
	
	}
	
	
	$nextSlideButton.click(function () {
	 	showNextSlide();
	});
	
	$prevSlideButton.click(function () {
	 	showPrevSlide();
	});
	
	function showNextSlide(){
		//$thisSlide = $slide.data('frame')+1;
		
		$thisSlide = 1 + $thisSlide;
		//alert($thisSlide);
		$('#prevslide:hidden').show();
		if($thisSlide == $sliderlength-1){
			$nextSlideButton.hide();
		}
		if($thisSlide == $sliderlength){
			return false;
		}
		else {
		
			slideSlides();
			focusMarker();
		}
	}
	
	function showPrevSlide(){
		//$thisSlide = $slide.data('frame')-1;
		$thisSlide =  $thisSlide-1;
		$('#nextslide:hidden').show();
		if($thisSlide == 0){
			$prevSlideButton.hide();
		}
		if($thisSlide < 0){
			return false;
		}
		else {
//		$.removeCookie('slide');
//		$.cookie('slide', $thisSlide);	
			slideSlides();
			focusMarker();
			
		}
	}
	
	function slideSlides() {
		// tabindex
		$slide.css('left',(-$thisSlide*100/$sliderlength)+'%');
		$.cookie('slide', null);
		$.cookie('slide', $thisSlide);

		
	}
	
	function focusMarker(){
		// CSS eingeschaltet?
		if($('#csstest').is(':hidden')) {
			// CSS ist an. Fokus-Funktion erst am Ende der Animation aufrufen  
			$(".slide").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', 
		    function() {
				focusSlide()
			});
		}
		else {
			// CSS aus: Fokus-Animation sofort aufrufen
			focusSlide()
		} 
		
		// Fokus auf aktives Slide setzen
		
		
		// class an den entsprechendne Listeneintrag schreiben		
		$directslide.removeClass('activeslide').attr('aria-selected', 'false');
		var $activeslidemarker = "marker" + $thisSlide;
		$("#" + $activeslidemarker).addClass('activeslide').attr('aria-selected', 'true');
	}
	
	
	function focusSlide() {
		var $activeslide = "slide" + $thisSlide;
		$("#" + $activeslide).attr('aria-hidden', 'false').addClass('akt').focus();
		$('.slide').not('#' + $activeslide).attr('aria-hidden', 'true');
	}
	
};	



$("#slider").albisSlider();

