

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


function mbtTOC() {
    var mbtTOC=i=headlength=gethead=0;
    headlength = document.getElementById("post-toc").getElementsByTagName("h2").length;
    for (i = 0; i < headlength; i++) {
        gethead = document.getElementById("post-toc").getElementsByTagName("h2")[i].textContent;
        document.getElementById("post-toc").getElementsByTagName("h2")[i].setAttribute("id", "point"+i);
        mbtTOC = "<li><a href='#point"+i+"'>"+gethead+"</a></li>";
        document.getElementById("mbtTOC").innerHTML += mbtTOC;}
}
function mbtToggle() {
    var mbt = document.getElementById('mbtTOC');
    if (mbt.style.display === 'none') {
        mbt .style.display = 'block';
    } else {
        mbt .style.display = 'none';
    }
}