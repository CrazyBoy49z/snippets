function addOverlay() {
        var overlay = document.createElement("div");
        overlay.id = "overlay";
        document.body.appendChild(overlay);
    }

function removeOverlay() {
    overlay = document.getElementById("overlay"),
    overlay.parentNode.removeChild(overlay)
} 


var navi=document.getElementById("nav1"),
	ntoggle=document.getElementById("navtoggle"),
    nspan = document.getElementById("navtoggle_span");
function showM(e){
	navi.className+="show";
    ntoggle.className+="show";
	addOverlay();
    nspan.textContent = "Menü verbergen";
	ntoggle.removeEventListener("click",showM);
	ntoggle.addEventListener("click",hideM)
}
function hideM(e){
	navi.classList.remove("show");
        ntoggle.classList.remove("show");
	removeOverlay();
    nspan.textContent = "Menü zeigen";
	ntoggle.removeEventListener("click",hideM)
	ntoggle.addEventListener("click",showM);
}

ntoggle.addEventListener("click",showM);