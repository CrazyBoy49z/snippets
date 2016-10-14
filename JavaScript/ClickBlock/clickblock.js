<script>
function blockTap() {
    var map = document.getElementById("YOUR-ELEMENT");
    map.classList.add("click-stop");
    setTimeout(function () {
        map.classList.remove("click-stop");
    }, 1500);
}

window.addEventListener('scroll', function (e) {
    //document.getElementById("myDIV").removeEventListener("scroll", test);
    scrollpos = window.scrollY;
    ticking = false;
    if ((scrollpos <= 1500) && !ticking) {
        window.requestAnimationFrame(function () {
            blockTap();
            ticking = false;
        });
    }
    ticking = true;
});
</script>