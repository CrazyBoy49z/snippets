var slide = document.getElementById("slide"),
    slideLength = document.getElementsByClassName("ratio").length,
    nextButton = document.getElementById("nextslide"),
    prevButton = document.getElementById("prevslide"),
    position = 0;

nextButton.addEventListener("click", nextSlide, false);
prevButton.addEventListener("click", prevSlide, false);
prevButton.style.display ="none";

function nextSlide() {
    position = position + 1;
    slide.style["margin-left"] = '-' + position + '00%';
    var sliderImg = document.getElementsByClassName("slider-img");
    for (var i=0; i<sliderImg.length; i++) {
    if(sliderImg[i].getAttribute('data-src')) {
           sliderImg[i].setAttribute('src',sliderImg[i].getAttribute('data-src'));
           sliderImg[i].setAttribute('srcset',sliderImg[i].getAttribute('data-srcset'));    
           sliderImg[i].removeAttribute('data-src');
           sliderImg[i].removeAttribute('data-srcset');    //use only if you need to remove data-src attribute after setting src
        }
    }
    sliderButtons();
}

 function prevSlide() {
    position = position - 1;
    slide.style["margin-left"] = '-' + position + '00%';
    sliderButtons();
}

function sliderButtons() {
     if (position == slideLength - 1) {
        nextButton.style.display ="none";
    }
     else  {
        nextButton.style.display ="inline";
    }
    if (position == 0) {
        prevButton.style.display ="none";
    }
    else  {
        prevButton.style.display ="inline";
    }
}