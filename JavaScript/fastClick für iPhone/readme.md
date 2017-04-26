# FastClick für iPhone, iPad etc.

Verhindert die 300 ms Verzögerung bei Clicks

Einbinden: <https://github.com/ftlabs/fastclick/blob/master/lib/fastclick.js>

und aufrufen mit

`if ('addEventListif ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}`

Ab iOS9 entbehrlich