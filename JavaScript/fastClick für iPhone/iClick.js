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

// Komprimiert mit MODx Aufruf
/*
<script>var mobSaf=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;if(!0===mobSaf){var later=function(){var a=document.createElement("script");a.src=lastJS;document.body.appendChild(a)},lastJS="[!latestVersion? &path=`/client/scripts/` &file=`fc.min.js`!]";window.addEventListener&&window.addEventListener("load",later,!1)};</script>*/