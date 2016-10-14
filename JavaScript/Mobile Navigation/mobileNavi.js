<script>
var navi = document.getElementById("nav1"),
    ntoggle = document.getElementById("navtoggle"),
    nspan = document.getElementById("navtoggle_span");

function showM(e) {
    // bei Bedarf addOverlay();
    navi.className += "show";
    ntoggle.removeEventListener("click", showM);
    nspan.textContent = "weniger";
    ntoggle.addEventListener("click", hideM)
}

function hideM(e) {
    // bei Bedarf removeOverlay();
    navi.classList.remove("show");
    nspan.textContent = "mehr";
    ntoggle.removeEventListener("click", hideM);
    ntoggle.addEventListener("click", showM);
}

ntoggle.addEventListener("click", showM);
</script>