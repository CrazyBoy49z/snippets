// jQuery Code

"use strict";

// https://github.com/cowboy/jquery-throttle-debounce

(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="TRUE"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

var $target,
    $activeClass = 'n-aktiv',
    $nav,
    $navLink,
    $target,
    $firstNavLink,
    $hash,
    $navLinkHashed,
    $topButton; 
$.fn.singlenav = function () {
    $nav = $(this);    
    $navLink = $nav.find('a');
    $firstNavLink = $navLink.first();
    $topButton = $('.top-button'); 
    window.onhashchange = function() {
        $hash = window.location.hash.substr(1);
        removeActiceClass();
        $navLink.off('hover');
        $nav.find('a[href="#' + $hash + '"]').parent().addBack().addClass($activeClass);
        $target = $('#' + $hash + '');
        //  $('.top-button').remove();
        scrollToContainer();
    }
    	
    $navLink.on('click', function() {
        //removeActiceClass();
        //$(this).parent().addBack().addClass($activeClass);
        $target = $(this.hash);
        console.log("$navLink.on('click', function()");
        // toTop();        
        scrollToContainer();    
    });
    	
       
    if (!!$hash) {
        $nav.find('a[href="#' + $hash + '"]').parent().addBack().addClass($activeClass);
        $target = $('#' + $hash + '');
        //toTop();       
        scrollToContainer(); 
    } 
    else {
        $firstNavLink.parent().addBack().addClass($activeClass);
    }
     
};  

function toTop() {
    $('.top-button').on("click", function() {
        removeActiceClass();
        //$('.top-button').remove();
        $target = $('body');
        scrollToContainer();
        $firstNavLink.parent().addBack().addClass($activeClass);
        //history.pushState(null, null,  window.location.pathname);
        // history.pushState(null, null, $firstAnchor);
    });
}

/*
$(document).on( 'scroll', function(){
    removeActiceClass();
});
*/

function removeActiceClass() {
    $('.' + $activeClass +  '').removeClass($activeClass);
    $('.top-button').remove();
}

function scrollToContainer() {
    $('.focus').removeAttr('tabindex').removeClass('focus');
    $targetString = JSON.stringify($target['selector']);
    if ($targetString != '"body"') {
        $target.parent( ".section" ).find('.section_div').append('<button class="top-button">nach oben</button>');
    }
    $target.attr('tabindex', '-1').addClass('focus'); 
    toTop();
    // http://stackoverflow.com/questions/8149155/animate-scrolltop-not-working-in-firefox
    $('html, body').animate({
        'scrollTop':   $target.offset().top
    }, 900);
}


$('#nav1').singlenav();