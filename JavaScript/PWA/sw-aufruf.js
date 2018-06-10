navigator.serviceWorker && window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw1.js", {
        // updateViaCache: 'none', https://developers.google.com/web/updates/2018/06/fresher-sw
        scope: "/"
    }), navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
        command: "trimCaches"
    })
});