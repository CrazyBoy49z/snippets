<script>
var mobSaf = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (mobSaf === true) {
    var lastJS = "/pfad-zu-js/fastClick.js";
    function later() {
        var scriptElement = document.createElement("script");
        scriptElement.src = lastJS;
        document.body.appendChild(scriptElement)
    }
    if (window.addEventListener) {
        window.addEventListener("load", later, false)
    }
}
</script>