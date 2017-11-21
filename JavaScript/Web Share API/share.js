(function() {
    // beherrscht Brwoser Web Share API?
    if (navigator.share !== undefined) {
        // finde div, in das der Button eingebaut werden soll
        var shareApi = document.getElementById('teilen');
        // Button konstruieren
        var shareButton = document.createElement("button");
        shareButton.setAttribute("id", "share");
        // span konstruieren mit Text
        var shareSpan = document.createElement("span");       
        shareApi.appendChild(shareButton);
        var share = document.getElementById('share');
        share.appendChild(shareSpan);
        shareSpan.textContent = "Teilen!";
        // class dient zum optischen Ausblenden des Texts über CSS (postion:absolute), Button wird grafisch gestaltet
        shareSpan.classList.add("vs");
        
        // Web Share API aufrufen
        share.addEventListener('click', function (ev) {
            // sucht Kanonische Link-Angabe, fehlt die, wird die URI aus der Adresszeile übernommen
            var shareUrl = document.querySelector('link[rel=canonical]') ? document.querySelector('link[rel=canonical]').href : window.location.href;
                navigator.share({
                    title: document.title,
                    url: shareUrl
                });
            });
        }
})();