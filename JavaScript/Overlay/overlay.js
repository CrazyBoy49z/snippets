<script>
    function addOverlay() {
        var overlay = document.createElement("div");
        overlay.id = "overlay";
        document.body.appendChild(overlay);
    }

    function removeOverlay() {
        overlay = document.getElementById("overlay"),
            overlay.parentNode.removeChild(overlay)
    } 
</script>