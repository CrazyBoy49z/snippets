(function() {
       
    if (navigator.share !== undefined) {
            var shareApi = document.getElementById('teilen');
            var shareButton = document.createElement("button");
            shareButton.setAttribute("id", "share");
            var shareSpan = document.createElement("span");       
            shareApi.appendChild(shareButton);
            var share = document.getElementById('share');
            share.appendChild(shareSpan);
            shareSpan.textContent = "Teilen!";
            shareSpan.classList.add("vs");

    var shareUrl = document.querySelector('link[rel=canonical]') ? document.querySelector('link[rel=canonical]').href : window.location.href;
    
    share.addEventListener('click', function (ev) {

    
        navigator.share({
            title: document.title,
            url: shareUrl
        });
	});
}
})();