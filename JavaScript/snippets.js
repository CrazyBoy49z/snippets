[].slice.call(document.getElementsByClassName('myClass')).forEach(function(element) {
    element.classList.remove('mySecondCalls');
});



   // Register touchstart and touchend listeners for element 'source'
    var src = document.getElementById("main");
    src.addEventListener('touchmove', function (a) {
        [].slice.call(document.getElementsByClassName('liste')).forEach(function(element) {
                element.classList.add('scroll');
            }); 
           setTimeout(function(){ 
                [].slice.call(document.getElementsByClassName('liste')).forEach(function(element) {
                element.classList.remove('scroll');
            }); 
            }, 500);
    }, false);