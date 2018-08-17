[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});

/* CSS */

/* ------


img {
  opacity: 1;
  transition: opacity 0.3s;
}

img[data-src] {
  opacity: 0;
}


------ */

/* Alternartiven: https://www.sitepoint.com/five-techniques-lazy-load-images-website-performance/ */